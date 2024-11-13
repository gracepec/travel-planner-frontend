import React from "react";
import "./airTicket/AirTicketCard";
import LoadingCircle from "../ui/LoadingCircle";

interface LoadingCardProps {
    title: string;
    detail: string;
}

const LoadingCard = ({ title, detail }: LoadingCardProps) => {
    return (
        <div className="card-fli">
            <div className="image">
                <LoadingCircle />
            </div>
            <div className="subtitle">{title}</div>
        </div>
    );
};

export default LoadingCard;
