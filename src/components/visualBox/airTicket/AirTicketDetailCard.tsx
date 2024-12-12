import React, { useState } from "react";
import { FlightType } from "../../../types/FlightType";
import { useRecoilValue } from "recoil";
import { selectedIndexState } from "../../../recoils/atoms";
import AirTicketDeparture from "./AirTicketDeparture";
import AirTicketReturn from "./AirTicketReturn";
import PriceCard from "../../ui/PriceCard";
import ButtonCard from "../../ui/ButtonCard";
import ConfirmButton from "./AirTicketConfirmButton";
import "./AirTicketDetailCard.scss";

interface AirTicketDetailCardProps {
    data: FlightType;
}

const AirTicketDetailCard = ({ data }: AirTicketDetailCardProps) => {
    const plane_1 = require("../../../img/plane_1.jpg");
    const plane_2 = require("../../../img/plane_2.jpg");
    const plane_3 = require("../../../img/plane_3.jpg");
    const plane_4 = require("../../../img/plane_4.jpg");
    const plane_5 = require("../../../img/plane_5.jpg");
    const planeImages = [plane_1, plane_2, plane_3, plane_4, plane_5];

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const selectedIndex = useRecoilValue(selectedIndexState);

    return (
        <div className="detail-fli">
            <div className="cover-image">
                {isLoading && <div className="placeholder"></div>}
                <img
                    src={planeImages[selectedIndex]}
                    alt={""}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="title-container">
                <div className="title">{data.airline}</div>
                <div className="image">
                    <img src={data.airline_logo} alt={""} />
                </div>
            </div>

            <AirTicketDeparture data={data}></AirTicketDeparture>

            <AirTicketReturn data={data}></AirTicketReturn>

            <PriceCard
                price={"₩" + data.price}
                title={"AirLine Ticket Price"}
            ></PriceCard>

            <div className="button-container">
                <ConfirmButton
                    isLoading={isLoading}
                    flightData={data}
                    content={"상세정보 보기"}
                ></ConfirmButton>
                <ButtonCard
                    data={data.url}
                    content={"구매 링크 이동하기"}
                    type={0}
                ></ButtonCard>
            </div>
        </div>
    );
};

export default AirTicketDetailCard;
