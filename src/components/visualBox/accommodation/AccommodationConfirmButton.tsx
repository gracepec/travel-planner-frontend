import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { confirmedAccommodationState } from "../../../recoils/atoms";
import { AccommodationType } from "../../../types/AccommodationType";
import { FaCheck } from "react-icons/fa";
import "./AccommodationConfirmButton.scss";

interface ConfirmButtonProps {
    isLoading: boolean;
    accommodationData: AccommodationType;
    content: string;
}

const AccommodationConfirmButton = ({
    isLoading,
    accommodationData,
    content,
}: ConfirmButtonProps) => {
    const setConfirmedAccommodation = useSetRecoilState(
        confirmedAccommodationState
    );
    const confirmedAccommodation = useRecoilValue(confirmedAccommodationState);
    const resetConfirmedAccommodation = useResetRecoilState(
        confirmedAccommodationState
    );

    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {
        if (confirmedAccommodation === accommodationData) {
            setIsConfirmed(true);
        } else {
            setIsConfirmed(false);
        }
    }, [confirmedAccommodation]);

    const handleClick = () => {
        if (isLoading) return;
        if (isConfirmed) {
            resetConfirmedAccommodation();
            setIsConfirmed(false);
        } else {
            setConfirmedAccommodation(accommodationData);
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

export default AccommodationConfirmButton;
