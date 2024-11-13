import React from "react";
import { useSetRecoilState } from "recoil";
import { selectedDirectionState } from "../../../recoils/atoms";
import { FaBusSimple } from "react-icons/fa6";
import "./DirectionCard.scss";

interface DirectionCardProps {
    city: string;
    d1: string;
    d2: string;
    isModal: boolean;
    onClick: () => void;
}

const DirectionCard = ({
    city,
    d1,
    d2,
    isModal,
    onClick,
}: DirectionCardProps) => {
    const setSelectedDirection = useSetRecoilState(selectedDirectionState);

    const handleClick = () => {
        const request =
            city +
            " " +
            d1 +
            "에서 " +
            city +
            " " +
            d2 +
            "(으)로 가는 방법을 알려줘.";
        setSelectedDirection(request);
    };

    return (
        <div
            className={isModal ? "card-dir-small" : "card-dir"}
            onClick={handleClick}
        >
            <div className="image" onClick={handleClick}>
                <FaBusSimple />
            </div>
            <div className="detail">경로 안내 요청</div>
        </div>
    );
};

export default DirectionCard;
