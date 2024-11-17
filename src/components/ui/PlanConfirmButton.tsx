import React from "react";
import { useSetRecoilState } from "recoil";
import { confirmTravelPlanState } from "../../recoils/atoms";
import "./PlanConfirmButton.scss";

interface PlanConfirmButtonProps {
    content: string;
    type: number;
}

const PlanConfirmButton = ({ content, type }: PlanConfirmButtonProps) => {
    const setConfirmTravelPlanState = useSetRecoilState(confirmTravelPlanState);

    const handleClick = () => {
        if (type === 0) {
            setConfirmTravelPlanState(true);
        } else {
            setConfirmTravelPlanState(false);
        }
    };

    return (
        <div className="confirm-button" onClick={handleClick}>
            <div className="top">
                <div className="title">{content}</div>
            </div>
        </div>
    );
};

export default PlanConfirmButton;
