import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
    requestResState,
    accommodationLoadingState,
} from "../../../recoils/atoms";
import "./AccommodationContainer.scss";
import LoadingCard from "../../ui/LoadingCard";
import AccommodationCard from "./AccommodationCard";
import fetchAccommodationData from "../../../apis/fetchAccommodationData";
import { AccommodationType } from "../../../types/AccommodationType";
import accommodation from "../../../data/accommodation.json";

interface AccommodationContainerProps {
    location: string;
    start_date: string;
    end_date: string;
    isModal: boolean;
    onClick: () => void;
}

const AccommodationContainer = ({
    location,
    start_date,
    end_date,
    isModal,
    onClick,
}: AccommodationContainerProps) => {
    const [accommodationData, setAccommodationData] = useState<
        AccommodationType[]
    >([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const requestRes = useRecoilValue(requestResState);
    const accommodationLoading = useRecoilValue(accommodationLoadingState);

    const getAccommodationData = async (responseId: number) => {
        setIsLoading(true);
        try {
            const result = await fetchAccommodationData({
                location: location,
                start_date: start_date,
                end_date: end_date,
            });
            setAccommodationData(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (requestRes?.answerCode === 1) {
            getAccommodationData(requestRes.requestId);
        }
    }, [requestRes]);

    useEffect(() => {
        setIsLoading(!accommodationLoading);
        setAccommodationData(accommodation);
    }, [accommodationLoading]);

    return (
        <div className="accommodation-container">
            <header>Accommodation</header>
            {isLoading ? (
                <div className="options">
                    <LoadingCard type={0} detail={"숙소 재단중..."} />
                    <LoadingCard type={0} detail={"숙소 재단중..."} />
                    <LoadingCard type={0} detail={"숙소 재단중..."} />
                    <LoadingCard type={0} detail={"숙소 재단중..."} />
                    <LoadingCard type={0} detail={"숙소 재단중..."} />
                </div>
            ) : (
                <div className="options">
                    {" "}
                    {accommodationData.map((accommodation, index) => (
                        <AccommodationCard
                            key={index}
                            data={accommodation}
                            isModal={isModal}
                            onClick={onClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AccommodationContainer;
