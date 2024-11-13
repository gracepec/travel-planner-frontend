import React from "react";
import "./LoadingCard.scss";
import LoadingCircle from "./LoadingCircle";

interface LoadingCardProps {
    type: number;
    detail: string;
}

const LoadingCard = ({ type, detail }: LoadingCardProps) => {
    if (type === 1)
        return (
            <div className="card-loading-small">
                <LoadingCircle />
            </div>
        );

    return (
        <div className="card-loading">
            <div className="image">
                <LoadingCircle />
            </div>
            <div className="detail">{detail}</div>
        </div>
    );
};

export default LoadingCard;
