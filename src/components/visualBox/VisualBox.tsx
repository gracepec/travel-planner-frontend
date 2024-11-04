import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../recoils/atoms";
import "./VisualBox.scss";
import AirTicketContainer from "./AirTicketContainer";
import ScheduleContainer from "./ScheduleContainer";
import AccommodationContainer from "./AccommodationContainer";

const VisualBox = () => {
    const [isTailing, setIsTailing] = useState<boolean>(false);
    const requestRes = useRecoilValue(requestResState);

    useEffect(() => {
        if (requestRes?.answerCode === 1) {
            setIsTailing(true);
        }
    }, [requestRes]);

    return (
        <div className="visual-container">
            {isTailing ? (
                <div>
                    <header>Travel to TOKYO</header>
                    <div className="visual-content">
                        <AirTicketContainer />
                        <ScheduleContainer />
                        <AccommodationContainer />
                    </div>
                </div>
            ) : (
                <div>
                    <header>Travel Tailor</header>
                    <div className="visual-content"></div>
                </div>
            )}
        </div>
    );
};

export default VisualBox;
