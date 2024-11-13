import React, { useEffect, useState } from "react";
import ScheduleDetailCard from "./ScheduleDetailCard";
import { ScheduleType } from "../../../types/ScheduleType";
import { PlaceDataType } from "../../../types/PlaceDataType";
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
    const [placeData, setPlaceData] = useState<PlaceDataType>({
        name: "-",
        photo: [],
        address: "-",
        opening_hours: [],
        admission_provider: "-",
        admission_fee: "-",
        admission_url: "-",
        web_site: "-W",
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

    // useEffect(() => {
    //     getPlaceData(data?.schedule + " " + data?.city);
    // }, [data]);

    useEffect(() => {
        setPlaceData(place_data);
    }, []);

    if (!open || !data) return null;

    return (
        <div className="modal-sch">
            <ScheduleDetailCard
                scheduleData={data}
                placeData={placeData}
            ></ScheduleDetailCard>
            <button className="button" onClick={close}>
                <ImCross />
            </button>
        </div>
    );
};

export default ScheduleModal;
