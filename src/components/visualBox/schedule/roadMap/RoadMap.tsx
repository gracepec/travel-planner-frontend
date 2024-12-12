import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { selectedDirectionState } from "../../../../recoils/atoms";
import { ChatGPTPlanType } from "../../../../types/ChatGPTPlanType";
import { RiRestaurantLine } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import "./RoadMap.scss";

interface RoadMapProps {
    gptPlan: ChatGPTPlanType;
    isModal: boolean;
}

const RoadMap = ({ gptPlan, isModal }: RoadMapProps) => {
    const setSelectedDirection = useSetRecoilState(selectedDirectionState);

    const handleClick_1 = () => {
        const request =
            gptPlan.travel_destination_1_local +
            "에서 " +
            gptPlan.restaurant_2_local +
            "(으)로 가는 방법을 알려줘.";
        setSelectedDirection(request);
    };

    const handleClick_2 = () => {
        const request =
            gptPlan.restaurant_2_local +
            "에서 " +
            gptPlan.travel_destination_2_local +
            "(으)로 가는 방법을 알려줘.";
        setSelectedDirection(request);
    };

    const handleClick_3 = () => {
        const request =
            gptPlan.travel_destination_2_local +
            "에서 " +
            gptPlan.restaurant_3_local +
            "(으)로 가는 방법을 알려줘.";
        setSelectedDirection(request);
    };

    const handleClick_4 = () => {
        const request =
            gptPlan.restaurant_3_local +
            "에서 " +
            gptPlan.travel_destination_3_local +
            "(으)로 가는 방법을 알려줘.";
        setSelectedDirection(request);
    };

    return (
        <div
            className={
                isModal ? "roadmap-container-small" : "roadmap-container"
            }
        >
            <div className="line"></div>
            <div className="line-white"></div>
            <div className="roadmap-button-container">
                <div className="place-button">
                    <MdCardTravel />
                </div>

                <div className="tooltip-container">
                    <div className="icon-button" onClick={handleClick_1}>
                        <TbBus />
                    </div>
                    <span className="tooltip-text">경로 안내 요청</span>
                </div>

                <div className="place-button">
                    <RiRestaurantLine />
                </div>

                <div className="tooltip-container">
                    <div className="icon-button" onClick={handleClick_2}>
                        <TbBus />
                    </div>
                    <span className="tooltip-text">경로 안내 요청</span>
                </div>

                <div className="place-button">
                    <MdCardTravel />
                </div>

                <div className="tooltip-container">
                    <div className="icon-button" onClick={handleClick_3}>
                        <TbBus />
                    </div>
                    <span className="tooltip-text">경로 안내 요청</span>
                </div>

                <div className="place-button">
                    <RiRestaurantLine />
                </div>

                <div className="tooltip-container">
                    <div className="icon-button" onClick={handleClick_4}>
                        <TbBus />
                    </div>
                    <span className="tooltip-text">경로 안내 요청</span>
                </div>

                <div className="place-button">
                    <MdCardTravel />
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
