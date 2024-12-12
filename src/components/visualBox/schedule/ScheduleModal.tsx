import React, { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import ScheduleDetailCard from "./ScheduleDetailCard";
import ScheduleDetailModalCard from "./ScheduleDetailModalCard";
import { ScheduleType } from "../../../types/ScheduleType";
import { PlaceDataType } from "../../../types/PlaceDataType";
import {
    selectedScheduleState,
    detailPlaceState,
} from "../../../recoils/atoms";
import { ImCross } from "react-icons/im";
import fetchPlaceData from "../../../apis/fetchPlaceData";
import "./ScheduleModal.scss";
import place_data from "../../../data/place_data.json";

interface ModalProps {
    data: ScheduleType | null;
    open: boolean;
    close: () => void;
}

const ScheduleModal = ({ data, open, close }: ModalProps) => {
    const selectedSchedule = useRecoilValue(selectedScheduleState);
    const detailPlace = useRecoilValue(detailPlaceState);
    const resetDetailPlace = useResetRecoilState(detailPlaceState);

    const [delayedDetailPlace, setDelayedDetailPlace] = useState(false);

    const [placeData, setPlaceData] = useState<PlaceDataType>({
        name: "-",
        photo: [],
        address: "-",
        latitude: "0.0",
        longitude: "0.0",
        opening_hours: [],
        admission_provider: "-",
        admission_fee: "-",
        admission_url: "-",
        web_site: "-",
    });
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
        if (!data) return;
        getPlaceData(data.schedule_local);
    }, [data]);

    useEffect(() => {
        if (detailPlace) {
            const timer = setTimeout(() => setDelayedDetailPlace(true), 200);
            return () => clearTimeout(timer);
        } else {
            setDelayedDetailPlace(false);
        }
    }, [detailPlace]);

    // useEffect(() => {
    //     if (!data) return;
    //     setPlaceData(data.placeData);
    // }, [data]);

    const handleClick = () => {
        resetDetailPlace();
        close();
    };

    if (!open || !data) return null;

    return (
        <div className={detailPlace ? "modal-sch-detail" : "modal-sch"}>
            <ScheduleDetailCard
                isLoading={isLoading}
                scheduleData={data}
                placeData={placeData}
            ></ScheduleDetailCard>
            {delayedDetailPlace && (
                <ScheduleDetailModalCard
                    scheduleData={data}
                    placeData={placeData}
                />
            )}
            <button className="button" onClick={handleClick}>
                <ImCross />
            </button>
        </div>
    );
};

export default ScheduleModal;
