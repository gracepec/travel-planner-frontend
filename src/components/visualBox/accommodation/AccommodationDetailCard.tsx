import React from "react";
import { AccommodationType } from "../../../types/AccommodationType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import AccommodationAddress from "./AccommodationAddress";
import "./AccommodationDetailCard.scss";
import AccommodationRate from "./AccommodationRate";
import AccommodationConfirmButton from "./AccommodationConfirmButton";

interface AccommodationDetailCardProps {
    data: AccommodationType;
}

const AccommodationDetailCard = ({ data }: AccommodationDetailCardProps) => {
    return (
        <div className="detail-acc">
            <div className="image">
                <img src={data.photo} alt={""} />
            </div>
            <div className="title">{data.name}</div>

            <AccommodationAddress data={data}></AccommodationAddress>

            <AccommodationRate data={data}></AccommodationRate>

            <PriceCard
                price={data.price}
                title={"Accommodation Price"}
            ></PriceCard>

            <div className="button-container">
                <AccommodationConfirmButton
                    isLoading={false}
                    accommodationData={data}
                    content={"상세정보 보기"}
                ></AccommodationConfirmButton>
                <ButtonCard
                    data={data.url}
                    content={"숙소 예매하기"}
                    type={0}
                ></ButtonCard>
            </div>
        </div>
    );
};

export default AccommodationDetailCard;
