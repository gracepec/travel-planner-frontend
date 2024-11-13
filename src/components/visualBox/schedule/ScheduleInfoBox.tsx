import React from "react";
import { PlaceDataType } from "../../../types/PlaceDataType";
import { ScheduleType } from "../../../types/ScheduleType";
import "./ScheduleInfoBox.scss";

interface ScheduleInfoBoxProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleInfoBox = ({ scheduleData, placeData }: ScheduleInfoBoxProps) => {
    return (
        <div className="sch-info">
            <div className="top">
                <div className="title">Details</div>
            </div>
            <div className="details">{scheduleData.schedule_detail}</div>
        </div>
    );
};

export default ScheduleInfoBox;
