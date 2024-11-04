import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../recoils/atoms";
import "./OptionContainer.scss";
import LoadingCard from "./LoadingCard";
import OptionCard from "./OptionCard";
import fetchAccommodationData from "../../apis/fetchAccommodationData";
import { AccommodationType } from "../../types/AccommodationType";

const AccommodationContainer = () => {
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

    return (
        <div className="option-container">
            <header>Accommodation</header>
            <div className="options">
                {isLoading ? (
                    <LoadingCard title={"숙소 재단중..."} detail={""} />
                ) : (
                    accommodationData.map((accommodation, index) => (
                        <OptionCard
                            key={index}
                            title={accommodation.name}
                            price={accommodation.price}
                            url={accommodation.url}
                            photo={accommodation.photo}
                            times={[]}
                            rate={"평점: " + accommodation.rate}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AccommodationContainer;
