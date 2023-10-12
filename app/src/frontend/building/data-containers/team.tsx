import React, { Fragment } from 'react';
import InfoBox from '../../components/info-box';
import { commonSourceTypes, dataFields } from '../../config/data-fields-config';
import SelectDataEntry from '../data-components/select-data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import Verification from '../data-components/verification';
import { LogicalDataEntry, LogicalDataEntryYesOnly } from '../data-components/logical-data-entry/logical-data-entry';
import { DataEntryGroup } from '../data-components/data-entry-group';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';

import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';
import YearDataEntry from '../data-components/year-data-entry';

/**
* Team view/edit section
*/
const TeamView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const building = props.building;
    const currentYear = new Date().getFullYear();
    const currentBuildingConstructionYear = building.date_year || undefined;

    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");


    return (
        <form>
            <DataEntryGroup name="General info" collapsed={subcat==null || subcat!="1"}>
                <LogicalDataEntry
                    title={dataFields.has_extension.title}
                    slug="has_extension"
                    value={props.building.has_extension}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.has_extension.tooltip}
                    />
                {props.building.has_extension!=null && !props.building.has_extension ? (
                <>
                    <NumericDataEntry
                        title={dataFields.date_year.title}
                        slug="date_year"
                        value={props.building.date_year}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                    />
                    <div className={`alert alert-dark`} role="alert" style={{ fontSize: 14, backgroundColor: "#f6f8f9" }}>
                        <i className="source-url">To edit the building age, and to see the data mapped, please go to&nbsp;
                        <a href={"/"+props.mode+"/age/"+props.building.building_id+"?sc=1"}>Age & History</a>.</i>
                    </div>
                </>
                ) : 
                    props.building.has_extension!=null && props.building.has_extension ? (
                    <>
                        <NumericDataEntry
                            slug='extension_year'
                            title={dataFields.extension_year.title}
                            value={props.building.extension_year}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            step={1}
                            min={1}
                            max={currentYear}
                            tooltip={dataFields.extension_year.tooltip_extension}
                        />
                        <div className={`alert alert-dark`} role="alert" style={{ fontSize: 14, backgroundColor: "#f6f8f9" }}>
                            <i className="source-url">To edit the extension date, and to see the data mapped, please go to&nbsp;
                            <a href={"/"+props.mode+"/age/"+props.building.building_id+"?sc=3"}>Age & History</a>.</i>
                        </div>
                    </>
                    )
                    : 
                    <></>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Land ownership" collapsed={subcat==null || subcat!="2"}>
                <MultiDataEntry
                    title={dataFields.landowner.title}
                    slug="landowner"
                    value={props.building.landowner}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.landowner.tooltip}
                    placeholder=""
                    editableEntries={true}
                    disabled={true}
                    />
                <Verification
                    slug="landowner"
                    allow_verify={props.user !== undefined && props.building.landowner !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("landowner")}
                    user_verified_as={props.user_verified.landowner}
                    verified_count={props.building.verified.landowner}
                    />
                <MultiDataEntry
                    title={dataFields.landowner_links.title}
                    slug="landowner_links"
                    value={props.building.landowner_links}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.landowner_links.tooltip}
                    placeholder="https://..."
                    editableEntries={true}
                    isUrl={true}
                />
                <SelectDataEntry
                    title={dataFields.landowner_source_type.title}
                    slug="landowner_source_type"
                    value={props.building.landowner_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.landowner_source_type.tooltip}
                    options={dataFields.landowner_source_type.items}
                    placeholder={dataFields.landowner_source_type.example}
                    />
                {(props.building.landowner_source_type == commonSourceTypes[0] ||
                    props.building.landowner_source_type == commonSourceTypes[1] ||
                    props.building.landowner_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.landowner_source_link.title}
                            slug="landowner_source_link"
                            value={props.building.landowner_source_link}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.landowner_source_link.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Developer" collapsed={subcat==null || subcat!="3"}>
                <SelectDataEntry
                    slug='developer_type'
                    title={dataFields.developer_type.title}
                    value={props.building.developer_type}
                    options={dataFields.developer_type.items}
                    onChange={props.onChange}
                    mode={props.mode}
                    copy={props.copy}
                />
                <Verification
                    slug="developer_type"
                    allow_verify={props.user !== undefined && props.building.developer_type !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("developer_type")}
                    user_verified_as={props.user_verified.developer_type}
                    verified_count={props.building.verified.developer_type}
                    />
                <MultiDataEntry
                    title={dataFields.developer_name.title}
                    slug="developer_name"
                    value={props.building.developer_name}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.developer_name.tooltip}
                    placeholder=""
                    editableEntries={true}
                    disabled={true}
                    />
                <Verification
                    slug="developer_name"
                    allow_verify={props.user !== undefined && props.building.developer_name !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("developer_name")}
                    user_verified_as={props.user_verified.developer_name}
                    verified_count={props.building.verified.developer_name}
                    />
                <MultiDataEntry
                    title={dataFields.developer_links.title}
                    slug="developer_links"
                    value={props.building.developer_links}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.developer_links.tooltip}
                    placeholder="https://..."
                    editableEntries={true}
                    isUrl={true}
                />
                <SelectDataEntry
                    title={dataFields.developer_source_type.title}
                    slug="developer_source_type"
                    value={props.building.developer_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.developer_source_type.tooltip}
                    options={dataFields.developer_source_type.items}
                    placeholder={dataFields.developer_source_type.example}
                    />
                {(props.building.developer_source_type == commonSourceTypes[0] ||
                    props.building.developer_source_type == commonSourceTypes[1] ||
                    props.building.developer_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.developer_source_link.title}
                            slug="developer_source_link"
                            value={props.building.developer_source_link}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.developer_source_link.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Designer" collapsed={subcat==null || subcat!="4"}>
                <MultiDataEntry
                    title={dataFields.designers.title}
                    slug="designers"
                    value={props.building.designers}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.designers.tooltip}
                    placeholder=""
                    editableEntries={true}
                    disabled={true}
                    />
                <Verification
                    slug="designers"
                    allow_verify={props.user !== undefined && props.building.designers !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("designers")}
                    user_verified_as={props.user_verified.designers}
                    verified_count={props.building.verified.designers}
                    />
                <MultiDataEntry
                    title={dataFields.designers_links.title}
                    slug="designers_links"
                    value={props.building.designers_links}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.designers_links.tooltip}
                    placeholder="https://..."
                    editableEntries={true}
                    isUrl={true}
                />
                <SelectDataEntry
                    slug='lead_designer_type'
                    title={dataFields.lead_designer_type.title}
                    value={props.building.lead_designer_type}
                    options={dataFields.lead_designer_type.items}
                    onChange={props.onChange}
                    mode={props.mode}
                    copy={props.copy}
                />
                <Verification
                    slug="lead_designer_type"
                    allow_verify={props.user !== undefined && props.building.lead_designer_type !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("lead_designer_type")}
                    user_verified_as={props.user_verified.lead_designer_type}
                    verified_count={props.building.verified.lead_designer_type}
                    />
                <SelectDataEntry
                    title={dataFields.designers_source_type.title}
                    slug="designers_source_type"
                    value={props.building.designers_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.designers_source_type.tooltip}
                    options={dataFields.designers_source_type.items}
                    placeholder={dataFields.designers_source_type.example}
                    />
                {(props.building.designers_source_type == commonSourceTypes[0] ||
                    props.building.designers_source_type == commonSourceTypes[1] ||
                    props.building.designers_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.designers_source_link.title}
                            slug="designers_source_link"
                            value={props.building.designers_source_link}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.designers_source_link.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Builder" collapsed={subcat==null || subcat!="5"}>
                <MultiDataEntry
                    title={dataFields.builder.title}
                    slug="builder"
                    value={props.building.builder}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.builder.tooltip}
                    placeholder=""
                    editableEntries={true}
                    disabled={true}
                    />
                <Verification
                    slug="builder"
                    allow_verify={props.user !== undefined && props.building.builder !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("builder")}
                    user_verified_as={props.user_verified.builder}
                    verified_count={props.building.verified.builder}
                    />
                <MultiDataEntry
                    title={dataFields.builder_links.title}
                    slug="builder_links"
                    value={props.building.builder_links}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.builder_links.tooltip}
                    placeholder="https://..."
                    editableEntries={true}
                    isUrl={true}
                />
                <SelectDataEntry
                    title={dataFields.builder_source_type.title}
                    slug="builder_source_type"
                    value={props.building.builder_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.builder_source_type.tooltip}
                    options={dataFields.builder_source_type.items}
                    placeholder={dataFields.builder_source_type.example}
                    />
                {(props.building.builder_source_type == commonSourceTypes[0] ||
                    props.building.builder_source_type == commonSourceTypes[1] ||
                    props.building.builder_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.builder_source_link.title}
                            slug="builder_source_link"
                            value={props.building.builder_source_link}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Awards" collapsed={subcat==null || subcat!="6"}>
                <LogicalDataEntryYesOnly
                        slug='designer_awards'
                        title={dataFields.designer_awards.title}
                        tooltip={dataFields.designer_awards.tooltip}
                        value={props.building.designer_awards}
                        copy={props.copy}
                        onChange={props.onChange}
                        mode={props.mode}
                    />
                    <Verification
                        slug="designer_awards"
                        allow_verify={props.user !== undefined && props.building.designer_awards !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("designer_awards")}
                        user_verified_as={props.user_verified.designer_awards}
                        verified_count={props.building.verified.designer_awards}
                        />
                    {props.building.designer_awards ? (
                    <>
                    <MultiDataEntry
                        title={dataFields.awards_source_link.title}
                        slug="awards_source_link"
                        value={props.building.awards_source_link}
                        mode={props.mode}
                        copy={props.copy}
                        onChange={props.onChange}
                        tooltip={dataFields.awards_source_link.tooltip}
                        placeholder="https://..."
                        editableEntries={true}
                        isUrl={true}
                        />
                    <Verification
                        slug="awards_source_link"
                        allow_verify={props.user !== undefined && props.building.awards_source_link !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("awards_source_link")}
                        user_verified_as={props.user_verified.awards_source_link}
                        verified_count={props.building.verified.awards_source_link}
                        />
                    </>
                    ) : (null)
                    }
            </DataEntryGroup>
        </form>
    );
};
const TeamContainer = withCopyEdit(TeamView);

export default TeamContainer;
