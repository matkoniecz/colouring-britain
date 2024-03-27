import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function RiversOldStyleLayer() {
    const [dataGeojson, setDataGeojson] = useState<GeoJsonObject>(null);
    const { rivers_old_style } = useDisplayPreferences();

    useEffect(() => {
        apiGet('/geometries/rivers.geojson')
            .then(data => setDataGeojson(data as GeoJsonObject));
    }, []);

    if(rivers_old_style == "enabled") {
        return dataGeojson &&
        <GeoJSON 
        attribution='rivers from ?????????????????????????????????????????????????????????????????????????????????????????'
        data={dataGeojson}
        style={{color: '#0f0', fill: true, weight: 1, opacity: 0.6}}
    />;
    } else if (rivers_old_style == "disabled") {
        return <div></div>
    }
}

