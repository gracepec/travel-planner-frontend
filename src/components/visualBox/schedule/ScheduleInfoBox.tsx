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
                <div className="title">Opening Hours</div>
            </div>
            <div className="details">오전 5:00~오후 11:00</div>
        </div>
    );
};

export default ScheduleInfoBox;
