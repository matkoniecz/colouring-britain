#!/bin/bash
apt-get update -y
apt-get upgrade -y

service postgresql start

apt-get install -y postgresql-contrib libpq-dev postgis
apt-get install -y postgresql-13-postgis-3
apt-get install -y gdal-bin libspatialindex-dev libgeos-dev libproj-dev

sed -i "s/#\?listen_address.*/listen_addresses '*'/" /etc/postgresql/13/main/postgresql.conf
echo "host all all all md5" | tee --append /etc/postgresql/13/main/pg_hba.conf > /dev/null
service postgresql restart

psql -d colouringlondon -U dockeruser -c "SELECT 1 FROM pg_user WHERE usename = 'dockeruser';" | grep -q 1 ||  psql -d colouringlondon -U dockeruser -c "CREATE ROLE dockeruser SUPERUSER LOGIN PASSWORD 'postgres';"
psql -d colouringlondon -U dockeruser -c "SELECT 1 FROM pg_database WHERE datname = 'colouringlondon';" | grep -q 1 ||  -u postgres createdb -E UTF8 -T template0 --locale=en_US.utf8 -O dockeruser colouringlondon

# psql -d colouringlondon -U dockeruser -h localhost
psql -d colouringlondon -c "create extension postgis;"
psql -d colouringlondon -c "create extension pgcrypto;"
psql -d colouringlondon -c "create extension pg_trgm;"

ls ./colouring-london/migrations/*.up.sql 2>/dev/null | while read -r migration; do psql -d colouringlondon < $migration; done;

pyvenv colouringlondon
source colouringlondon/bin/activate
pip install --upgrade pip
pip install --upgrade setuptools wheel
pip install -r ./colouring-london/etl/requirements.txt

python ./colouring-london/app/etl/get_test_polygons.py
./colouring-london/app/etl/load_geometries_cl.sh ./
psql -d colouringlondon < ./colouring-london/app/migrations/002.index-geometries.up.sql
./create_building_records_cl.sh
psql -d colouringlondon < ./colouring-london/app/migrations/003.index-buildings.up.sql
ls ./colouring-london/migrations/*.up.sql 2>/dev/null | while read -r migration; do psql -d colouringlondon < $migration; done;