import React from "react";
import { ScheduleType } from "../../../types/ScheduleType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import ScheduleInfoBox from "./ScheduleInfoBox";
import "./ScheduleDetailCard.scss";
import { PlaceDataType } from "../../../types/PlaceDataType";

interface ScheduleDetailCardProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleDetailCard = ({
    scheduleData,
    placeData,
}: ScheduleDetailCardProps) => {
    return (
        <div className="detail-acc">
            <div className="image">
                <img src={placeData.photo[0]} alt={""} />
            </div>
            <div className="title">{placeData.name}</div>

            <ScheduleInfoBox
                scheduleData={scheduleData}
                placeData={placeData}
            ></ScheduleInfoBox>

            <ScheduleInfoBox
                scheduleData={scheduleData}
                placeData={placeData}
            ></ScheduleInfoBox>

            <PriceCard
                price={placeData.admission_fee}
                title={"Accommodation Price"}
            ></PriceCard>

            <ButtonCard
                data={placeData.web_site}
                content={"숙소 예매하기"}
            ></ButtonCard>
        </div>
    );
};

export default ScheduleDetailCard;
