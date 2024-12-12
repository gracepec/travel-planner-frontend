import React from "react";
import { useSetRecoilState } from "recoil";
import {
    selectedAirTicketState,
    selectedIndexState,
} from "../../../recoils/atoms";
import { FlightType } from "../../../types/FlightType";
import "./AirTicketCard.scss";

interface AirTicketCardProps {
    index: number;
    data: FlightType;
    isModal: boolean;
    onClick: () => void;
}

const AirTicketCard = ({
    index,
    data,
    isModal,
    onClick,
}: AirTicketCardProps) => {
    const setSelectedAirTicketState = useSetRecoilState(selectedAirTicketState);
    const setSelectedIndexState = useSetRecoilState(selectedIndexState);

    const handleClick = () => {
        setSelectedAirTicketState(data);
        setSelectedIndexState(index);
        onClick();
    };

    return (
        <div
            className={isModal ? "card-fli-small" : "card-fli"}
            onClick={handleClick}
        >
            <div className="subtitle">{data.airline}</div>
            <div className="image">
                <img src={data.airline_logo} alt={""} />
            </div>
            <div className="title">₩{data.price}</div>
            <div className="detail">
                <div>{data.dpt_dpt_time + " - " + data.dpt_arv_time}</div>
                <div>{data.rtn_dpt_time + " - " + data.rtn_arv_time}</div>
            </div>
        </div>
    );
};

export default AirTicketCard;
