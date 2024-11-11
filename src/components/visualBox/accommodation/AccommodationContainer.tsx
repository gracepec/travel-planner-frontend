import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../../recoils/atoms";
import "./AccommodationContainer.scss";
import LoadingCard from "../LoadingCard";
import AccommodationCard from "./AccommodationCard";
import fetchAccommodationData from "../../../apis/fetchAccommodationData";
import { AccommodationType } from "../../../types/AccommodationType";
import accommodation from "../../../data/accommodation.json";

interface AccommodationContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const AccommodationContainer = ({
    isModal,
    onClick,
}: AccommodationContainerProps) => {
    const [accommodationData, setAccommodationData] = useState<
        AccommodationType[]
    >([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const requestRes = useRecoilValue(requestResState);

    const getAccommodationData = async (responseId: number) => {
        setIsLoading(true);

        const location = "도쿄";
        const start_date = "2024-11-15";
        const end_date = "2024-11-20";

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
        setIsLoading(false);
        setAccommodationData(accommodation.accommodation);
    }, []);

    return (
        <div className="accommodation-container">
            <header>Accommodation</header>
            <div className="options">
                {isLoading ? (
                    <LoadingCard title={"숙소 재단중..."} detail={""} />
                ) : (
                    accommodationData.map((accommodation, index) => (
                        <AccommodationCard
                            key={index}
                            data={accommodation}
                            isModal={isModal}
                            onClick={onClick}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AccommodationContainer;
