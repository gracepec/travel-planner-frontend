import React from "react";
import { PlaceDataType } from "../../../types/PlaceDataType";
import { ScheduleType } from "../../../types/ScheduleType";
import "./ScheduleInfoBox.scss";

interface ScheduleInfoBoxProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleAddress = ({ scheduleData, placeData }: ScheduleInfoBoxProps) => {
    return (
        <div className="sch-info">
            <div className="top">
                <div className="title">Accommodation Location</div>
            </div>
            <div className="details">
                <div>{placeData.address}</div>
            </div>
        </div>
    );
};

export default ScheduleAddress;
