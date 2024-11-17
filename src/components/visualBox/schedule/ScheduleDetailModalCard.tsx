import React from "react";
import { ScheduleType } from "../../../types/ScheduleType";
import { PlaceDataType } from "../../../types/PlaceDataType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import GoogleMap from "../../ui/GoogleMap";
import ScheduleTimeBox from "./ScheduleTimeBox";
import "./ScheduleDetailModalCard.scss";

interface ScheduleDetailMoadlCardProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleDetailModalCard = ({
    scheduleData,
    placeData,
}: ScheduleDetailMoadlCardProps) => {
    const request =
        scheduleData.city + " " + placeData.name + "에 대해서 알려줘.";

    return (
        <div className="detail-sch-mod">
            <div className="image">
                <GoogleMap
                    lat={Number(placeData.latitude)}
                    lng={Number(placeData.longitude)}
                />
            </div>

            <ScheduleTimeBox
                scheduleData={scheduleData}
                placeData={placeData}
            ></ScheduleTimeBox>

            <ButtonCard
                data={request}
                content={"장소 설명 요청"}
                type={1}
            ></ButtonCard>
        </div>
    );
};

export default ScheduleDetailModalCard;
