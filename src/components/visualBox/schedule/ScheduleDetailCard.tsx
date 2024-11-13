import React from "react";
import { ScheduleType } from "../../../types/ScheduleType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import ScheduleAddressBox from "./ScheduleAddressBox";
import ScheduleInfoBox from "./ScheduleInfoBox";
import "./ScheduleDetailCard.scss";
import { PlaceDataType } from "../../../types/PlaceDataType";
import ScheduleDetailButton from "./ScheduleDetailButton";

interface ScheduleDetailCardProps {
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleDetailCard = ({
    scheduleData,
    placeData,
}: ScheduleDetailCardProps) => {
    return (
        <div className="detail-sch">
            <div className="image">
                <img src={placeData.photo[0]} alt={"1"} />
                <img src={placeData.photo[1]} alt={"2"} />
                <img src={placeData.photo[2]} alt={"3"} />
                <img src={placeData.photo[3]} alt={"4"} />
            </div>
            <div className="title">{placeData.name}</div>

            <ScheduleAddressBox
                scheduleData={scheduleData}
                placeData={placeData}
            ></ScheduleAddressBox>

            <ScheduleInfoBox
                scheduleData={scheduleData}
                placeData={placeData}
            ></ScheduleInfoBox>

            <PriceCard
                price={placeData.admission_fee}
                title={"Admission Fee"}
            ></PriceCard>

            <div className="button-container">
                <ScheduleDetailButton
                    placeData={placeData}
                    content={"상세정보 보기"}
                ></ScheduleDetailButton>
                <ButtonCard
                    data={placeData.web_site}
                    content={"웹사이트 이동"}
                    type={0}
                ></ButtonCard>
            </div>
        </div>
    );
};

export default ScheduleDetailCard;
