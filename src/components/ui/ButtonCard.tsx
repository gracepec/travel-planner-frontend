import React from "react";
import { useSetRecoilState } from "recoil";
import { selectedPlaceState } from "../../recoils/atoms";
import "./ButtonCard.scss";

interface ButtonCardProps {
    data: string;
    content: string;
    type: number;
}

const ButtonCard = ({ data, content, type }: ButtonCardProps) => {
    const setSelectedPlaceState = useSetRecoilState(selectedPlaceState);

    const handleClick = () => {
        if (type === 0) {
            window.open(data, "_blank");
        } else {
            setSelectedPlaceState(data);
        }
    };

    return (
        <div className="card-button" onClick={handleClick}>
            <div className="top">
                <div className="title">{content}</div>
            </div>
        </div>
    );
};

export default ButtonCard;
