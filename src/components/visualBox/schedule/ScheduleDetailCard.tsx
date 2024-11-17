import React from "react";
import { ScheduleType } from "../../../types/ScheduleType";
import ButtonCard from "../../ui/ButtonCard";
import PriceCard from "../../ui/PriceCard";
import ScheduleAddressBox from "./ScheduleAddressBox";
import ScheduleInfoBox from "./ScheduleInfoBox";
import "./ScheduleDetailCard.scss";
import { PlaceDataType } from "../../../types/PlaceDataType";
import ScheduleDetailButton from "./ScheduleDetailButton";
import LoadingCircle from "../../ui/LoadingCircle";

interface ScheduleDetailCardProps {
    isLoading: boolean;
    scheduleData: ScheduleType;
    placeData: PlaceDataType;
}

const ScheduleDetailCard = ({
    isLoading,
    scheduleData,
    placeData,
}: ScheduleDetailCardProps) => {
    console.log("placeData: ", placeData);
    if (!Array.isArray(placeData.photo)) {
    }
    return (
        <div className="detail-sch">
            {isLoading ? (
                <div className="image-loading">
                    <LoadingCircle />
                </div>
            ) : placeData.photo[0] === "-" ? (
                <div className="image-loading">로딩에 실패하였습니다.</div>
            ) : (
                <div className="image">
                    {placeData.photo.map((photoUrl, index) => (
                        <img key={index} src={photoUrl} alt={`${index + 1}`} />
                    ))}
                </div>
            )}
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
                    isLoading={isLoading}
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
