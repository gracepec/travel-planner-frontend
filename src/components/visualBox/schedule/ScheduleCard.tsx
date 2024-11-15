import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import "./ScheduleCard.scss";
import { selectedScheduleState } from "../../../recoils/atoms";
import { ScheduleType } from "../../../types/ScheduleType";
import { PlaceDataType } from "../../../types/PlaceDataType";
import fetchPlaceData from "../../../apis/fetchPlaceData";
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

    const [placeData, setPlaceData] = useState<PlaceDataType>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPlaceData = async (place: string) => {
        setIsLoading(true);
        try {
            const result = await fetchPlaceData({
                place: place,
            });
            setPlaceData(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPlaceData(data.schedule + " " + data.city);
    }, []);

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
                {isLoading ? (
                    <LoadingCircle />
                ) : (
                    <img src={placeData?.photo[0]} alt="" />
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
