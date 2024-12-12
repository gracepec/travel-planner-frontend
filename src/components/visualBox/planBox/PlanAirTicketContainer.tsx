import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { confirmedAirTicketState } from "../../../recoils/atoms";
import "./PlanAirTicketContainer.scss";
import AirTicketCard from "../airTicket/AirTicketCard";

interface PlanAirTicketContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const PlanAirTicketContainer = ({
    isModal,
    onClick,
}: PlanAirTicketContainerProps) => {
    const confirmedAirTicket = useRecoilValue(confirmedAirTicketState);

    return (
        <div className="plan-air-ticket-container">
            <header>Air Ticket</header>

            <div className="options">
                <AirTicketCard
                    key={0}
                    index={0}
                    data={confirmedAirTicket!}
                    isModal={isModal}
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default PlanAirTicketContainer;
