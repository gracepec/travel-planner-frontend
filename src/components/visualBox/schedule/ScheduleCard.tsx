import React from "react";
import { useSetRecoilState } from "recoil";
import "./ScheduleCard.scss";
import { selectedScheduleState } from "../../../recoils/atoms";
import { ScheduleType } from "../../../types/ScheduleType";

interface ScheduleCardProps {
    index: number;
    data: ScheduleType;
    isModal: boolean;
    onClick: () => void;
}

const ScheduleCard = ({ index, data, isModal, onClick }: ScheduleCardProps) => {
    const setSelectedAirTicketState = useSetRecoilState(selectedScheduleState);

    const handleClick = () => {
        setSelectedAirTicketState(data);
        onClick();
    };
    return (
        <div
            className={isModal ? "card-sch-small" : "card-sch"}
            onClick={handleClick}
        >
            <img
                className="image"
                src="https://placehold.co/600x400"
                alt=""
                title="place_image"
            ></img>
            <div className="subtitle">{data.schedule}</div>
            <div className="detail">{data.schedule_time}</div>
        </div>
    );
};

export default ScheduleCard;
