import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { confirmedAccommodationState } from "../../../recoils/atoms";
import "./PlanAccommodationContainer.scss";
import AccommodationCard from "../accommodation/AccommodationCard";

interface PlanAccommodationContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const PlanAccommodationContainer = ({
    isModal,
    onClick,
}: PlanAccommodationContainerProps) => {
    const confirmedAccommodation = useRecoilValue(confirmedAccommodationState);

    return (
        <div className="plan-accommodation-container">
            <header>Accommodation</header>

            <div className="options">
                <AccommodationCard
                    key={0}
                    data={confirmedAccommodation!}
                    isModal={isModal}
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default PlanAccommodationContainer;
