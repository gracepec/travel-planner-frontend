import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../recoils/atoms";
import "./OptionContainer.scss";
import LoadingCard from "./LoadingCard";
import OptionCard from "./OptionCard";
import fetchFlightData from "../../apis/fetchFlightData";
import { FlightType } from "../../types/FlightType";

const AirTicketContainer = () => {
    const [flightData, setFlightData] = useState<FlightType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const requestRes = useRecoilValue(requestResState);

    const getFlightData = async (responseId: number) => {
        setIsLoading(true);

        const origin = "ICN";
        const destination = "HND";
        const start_date = "20241115";
        const end_date = "20241120";

        try {
            const result = await fetchFlightData({
                origin: origin,
                destination: destination,
                start_date: start_date,
                end_date: end_date,
            });
            setFlightData(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("AirTicketContainer: useEffect requestRes");
        if (requestRes?.answerCode === 1) {
            getFlightData(requestRes.requestId);
        }
    }, [requestRes]);

    return (
        <div className="option-container">
            <header>Air Ticket</header>
            <div className="options">
                {isLoading ? (
                    <LoadingCard title={"항공권 재단중..."} detail={""} />
                ) : (
                    flightData.map((flight, index) => (
                        <OptionCard
                            key={index}
                            title={flight.airline}
                            price={flight.price}
                            url={flight.url}
                            photo={flight.airline_logo}
                            times={[
                                flight.dpt_dpt_time +
                                    " - " +
                                    flight.dpt_arv_time,
                                flight.rtn_dpt_time +
                                    " - " +
                                    flight.rtn_arv_time,
                            ]}
                            rate={""}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AirTicketContainer;
