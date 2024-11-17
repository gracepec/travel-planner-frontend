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
    city: string;
    schedule: string;
    schedule_local: string;
    schedule_detail: string;
    isModal: boolean;
    isRestaurant: boolean;
    onClick: () => void;
    isLoadingDetail: boolean;
}

const ScheduleCard = ({
    index,
    city,
    schedule,
    schedule_local,
    schedule_detail,
    isModal,
    isRestaurant,
    onClick,
    isLoadingDetail,
}: ScheduleCardProps) => {
    const setSelectedScheduleState = useSetRecoilState(selectedScheduleState);

    // const [placeData_ex, setPlaceData] = useState<PlaceDataType>();
    // const [isLoading, setIsLoading] = useState<boolean>(true);

    // const getPlaceData = async (place: string) => {
    //     if (placeData) return;
    //     setIsLoading(true);
    //     try {
    //         const result = await fetchPlaceData({
    //             place: place,
    //         });
    //         setPlaceData(result);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getPlaceData(scheduleData.schedule + " " + scheduleData.city);
    // }, [scheduleData]);

    // useEffect(() => {
    //     if (!placeData) {
    //         return;
    //     }
    //     setIsLoading(false);
    // }, [placeData]);

    const handleClick = () => {
        // if (isLoading) return;
        // if (!placeData) {
        //     return;
        // }

        setSelectedScheduleState({
            city: city,
            schedule: schedule,
            schedule_local: schedule_local,
            schedule_detail: schedule_detail,
        });
        onClick();
    };

    return (
        <div
            className={isModal ? "card-sch-small" : "card-sch"}
            onClick={handleClick}
        >
            {/* <div className="image">
                {isLoading ? (
                    <LoadingCircle />
                ) : (
                    <img src={placeData ? placeData.photo[0] : ""} alt="" />
                )}
            </div> */}
            <div className="title">{schedule}</div>
            <div className="details">{schedule_detail}</div>
            <div className="details-icon">
                {isRestaurant ? <RiRestaurantLine /> : <MdCardTravel />}
            </div>
        </div>
    );
};

export default ScheduleCard;
