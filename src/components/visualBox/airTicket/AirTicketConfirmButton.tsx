import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { confirmedAirTicketState } from "../../../recoils/atoms";
import { FlightType } from "../../../types/FlightType";
import { FaCheck } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./AirTicketConfirmButton.scss";

interface ConfirmButtonProps {
    isLoading: boolean;
    flightData: FlightType;
    content: string;
}

const ConfirmButton = ({
    isLoading,
    flightData,
    content,
}: ConfirmButtonProps) => {
    const setConfirmedAirTicket = useSetRecoilState(confirmedAirTicketState);
    const confirmedAirTicket = useRecoilValue(confirmedAirTicketState);
    const resetConfirmedAirTicket = useResetRecoilState(
        confirmedAirTicketState
    );

    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {
        if (confirmedAirTicket === flightData) {
            setIsConfirmed(true);
        } else {
            setIsConfirmed(false);
        }
    }, [confirmedAirTicket]);

    const handleClick = () => {
        if (isLoading) return;
        if (isConfirmed) {
            resetConfirmedAirTicket();
            setIsConfirmed(false);
        } else {
            setConfirmedAirTicket(flightData);
            setIsConfirmed(true);
        }
    };

    return (
        <div className="confirm-button-air" onClick={handleClick}>
            <div className={isConfirmed ? "top-confirmed" : "top"}>
                <FaCheck />
            </div>
        </div>
    );
};

export default ConfirmButton;
