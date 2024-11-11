import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../../recoils/atoms";
import "./AirTicketContainer.scss";
import LoadingCard from "../LoadingCard";
import AirTicketCard from "./AirTicketCard";
import fetchFlightData from "../../../apis/fetchFlightData";
import { FlightType } from "../../../types/FlightType";
import flights from "../../../data/flights.json";

interface AirTicketContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const AirTicketContainer = ({ isModal, onClick }: AirTicketContainerProps) => {
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

    useEffect(() => {
        setIsLoading(false);
        setFlightData(flights.flights);
    }, []);

    return (
        <div className="air-ticket-container">
            <header>Air Ticket</header>
            <div className="options">
                {isLoading ? (
                    <LoadingCard title={"항공권 재단중..."} detail={""} />
                ) : (
                    flightData.map((flight, index) => (
                        <AirTicketCard
                            key={index}
                            index={index}
                            data={flight}
                            isModal={isModal}
                            onClick={onClick}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AirTicketContainer;
