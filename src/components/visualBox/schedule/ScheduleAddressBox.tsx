import React from "react";
import { PlaceDataType } from "../../../types/PlaceDataType";
import { ScheduleType } from "../../../types/ScheduleType";
import "./ScheduleAddressBox.scss";

interface ScheduleAddressBoxProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleAddressBox = ({
    scheduleData,
    placeData,
}: ScheduleAddressBoxProps) => {
    return (
        <div className="sch-add">
            <div className="top">
                <div className="title">Location</div>
            </div>
            <div className="details">
                <div>{placeData.address}</div>
            </div>
        </div>
    );
};

export default ScheduleAddressBox;
