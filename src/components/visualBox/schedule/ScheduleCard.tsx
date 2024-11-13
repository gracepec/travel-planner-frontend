import React from "react";
import { useSetRecoilState } from "recoil";
import "./ScheduleCard.scss";
import { selectedScheduleState } from "../../../recoils/atoms";
import { ScheduleType } from "../../../types/ScheduleType";
import { RiRestaurantLine } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import LoadingCircle from "../../ui/LoadingCircle";

interface ScheduleCardProps {
    index: number;
    imgSrc: string;
    data: ScheduleType;
    isModal: boolean;
    isRestaurant: boolean;
    onClick: () => void;
    isLoadingDetail: boolean;
}

const ScheduleCard = ({
    index,
    imgSrc,
    data,
    isModal,
    isRestaurant,
    onClick,
    isLoadingDetail,
}: ScheduleCardProps) => {
    const setSelectedScheduleState = useSetRecoilState(selectedScheduleState);

    const handleClick = () => {
        setSelectedScheduleState(data);
        onClick();
    };

    return (
        <div
            className={isModal ? "card-sch-small" : "card-sch"}
            onClick={handleClick}
        >
            <div className="image">
                {isLoadingDetail ? (
                    <LoadingCircle />
                ) : (
                    <img src={imgSrc} alt="" />
                )}
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
