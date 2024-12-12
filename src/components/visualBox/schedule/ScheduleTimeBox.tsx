import React from "react";
import { PlaceDataType } from "../../../types/PlaceDataType";
import { ScheduleType } from "../../../types/ScheduleType";
import "./ScheduleTimeBox.scss";

interface ScheduleTimeBoxProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleTimeBox = ({ scheduleData, placeData }: ScheduleTimeBoxProps) => {
    console.log(placeData);
    return (
        <div className="sch-time">
            <div className="top">
                <div className="title">Opening Hours</div>
            </div>
            <div className="details">
                {placeData.opening_hours.map((hour, index) => (
                    <div key={index}>{hour.replace(",", ": ")}</div>
                ))}
            </div>
        </div>
    );
};

export default ScheduleTimeBox;
