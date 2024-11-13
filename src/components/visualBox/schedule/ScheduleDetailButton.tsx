import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { detailPlaceState } from "../../../recoils/atoms";
import { PlaceDataType } from "../../../types/PlaceDataType";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import "./ScheduleDetailButton.scss";

interface ScheduleDetailButtonProps {
    placeData: PlaceDataType;
    content: string;
}

const ScheduleDetailButton = ({
    placeData,
    content,
}: ScheduleDetailButtonProps) => {
    const setDetailPlace = useSetRecoilState(detailPlaceState);
    const detailPlace = useRecoilValue(detailPlaceState);

    const handleClick = () => {
        setDetailPlace(prevState => !prevState);
    };

    return (
        <div className="modal-button" onClick={handleClick}>
            <div className="top">{detailPlace ? <FaMinus /> : <FaPlus />}</div>
        </div>
    );
};

export default ScheduleDetailButton;
