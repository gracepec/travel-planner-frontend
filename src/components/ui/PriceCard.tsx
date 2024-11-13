import React from "react";
import "./PriceCard.scss";

interface PriceCardProps {
    price: string;
    title: string;
}

const PriceCard = ({ price, title }: PriceCardProps) => {
    return (
        <div className="card-price">
            <div className="top">
                <div className="title">{title}</div>
            </div>
            <div className="details">
                <div>{price}</div>
            </div>
        </div>
    );
};

export default PriceCard;
