import React from "react";
import { useSetRecoilState } from "recoil";
import "./ScheduleCard.scss";
import { selectedScheduleState } from "../../../recoils/atoms";
import { ScheduleType } from "../../../types/ScheduleType";
import { RiRestaurantLine } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";

interface ScheduleCardProps {
    index: number;
    data: ScheduleType;
    isModal: boolean;
    isRestaurant: boolean;
    onClick: () => void;
}

const ScheduleCard = ({
    index,
    data,
    isModal,
    isRestaurant,
    onClick,
}: ScheduleCardProps) => {
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
            <div className="image">
                <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div className="title">{data.schedule}</div>
            <div className="details">{data.schedule_detail}</div>
            <div className="details-icon">
                {isRestaurant ? <RiRestaurantLine /> : <MdCardTravel />}
            </div>
        </div>
    );
};

export default ScheduleCard;
