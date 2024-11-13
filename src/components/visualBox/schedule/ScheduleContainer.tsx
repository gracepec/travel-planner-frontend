import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
    requestResState,
    scheduleLoadingState,
    scheduleChangedState,
} from "../../../recoils/atoms";
import LoadingCard from "../../ui/LoadingCard";
import ScheduleCard from "./ScheduleCard";
import DirectionCard from "./DirectionCard";
import fetchChatGPTPlan from "../../../apis/fetchChatGPTPlan";
import { ChatGPTPlanType } from "../../../types/ChatGPTPlanType";
import "./ScheduleContainer.scss";
import schedules from "../../../data/schedule.json";
import schedules2 from "../../../data/schedule_2.json";
import pictures from "../../../data/place_img.json";
import pictures2 from "../../../data/place_img_2.json";

interface ScheduleContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const ScheduleContainer = ({ isModal, onClick }: ScheduleContainerProps) => {
    const [chatGPTPlan, setChatGPTPlan] = useState<ChatGPTPlanType[]>([]);
    const [city, setCity] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);
    const [picturesSaved, setPicturesSaved] = useState<{ photo: string }[]>();

    const requestRes = useRecoilValue(requestResState);
    const scheduleLoading = useRecoilValue(scheduleLoadingState);
    const scheduleChanged = useRecoilValue(scheduleChangedState);

    const getChatGPTPlan = async (requestId: number) => {
        setIsLoading(true);

        try {
            const result = await fetchChatGPTPlan({
                requestId: requestId.toString(),
            });
            setChatGPTPlan(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (requestRes?.answerCode === 1) {
            getChatGPTPlan(requestRes.requestId);
        }
    }, [requestRes]);

    useEffect(() => {
        setIsLoadingDetail(true);
        if (scheduleChanged) {
            setChatGPTPlan(schedules2);
            setPicturesSaved(pictures2);
        } else {
            setChatGPTPlan(schedules);
            setPicturesSaved(pictures);
        }
        setIsLoading(!scheduleLoading);
    }, [scheduleLoading, scheduleChanged]);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(loadingDetail, 3000);
        }
    }, [isLoading]);

    useEffect(() => {
        if (chatGPTPlan.length !== 0) setCity(chatGPTPlan[0].city ?? "");
    }, [chatGPTPlan]);

    const loadingDetail = () => {
        setIsLoadingDetail(false);
    };

    const handleScheduleChange = (index: number) => {
        setSelectedScheduleIndex(index);
    };

    return (
        <div className="schedule-container">
            <header>Travel Plan</header>

            {isLoading ? (
                <div className="buttons">
                    <div className="day-button-selected">...</div>
                </div>
            ) : (
                <div className="buttons">
                    {chatGPTPlan.map((schedule, index) => (
                        <div
                            className={
                                selectedScheduleIndex === index
                                    ? "day-button-selected"
                                    : "day-button"
                            }
                            key={index}
                            onClick={() => handleScheduleChange(index)}
                        >
                            {schedule.day}
                        </div>
                    ))}
                </div>
            )}

            {isLoading ? (
                <div>
                    <div className="options">
                        <LoadingCard type={0} detail={"여행 재단중..."} />
                        <LoadingCard type={0} detail={"여행 재단중..."} />
                        <LoadingCard type={0} detail={"여행 재단중..."} />
                        <LoadingCard type={0} detail={"여행 재단중..."} />
                        <LoadingCard type={0} detail={"여행 재단중..."} />
                    </div>
                    <div className="options-dir">
                        <LoadingCard type={1} detail={""} />
                        <LoadingCard type={1} detail={""} />
                        <LoadingCard type={1} detail={""} />
                        <LoadingCard type={1} detail={""} />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="options">
                        <ScheduleCard
                            index={selectedScheduleIndex * 5}
                            imgSrc={
                                picturesSaved![selectedScheduleIndex * 5].photo
                            }
                            data={{
                                city: chatGPTPlan[selectedScheduleIndex].city,
                                schedule:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_1,
                                schedule_time:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_1_time,
                                schedule_detail:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_1_detail,
                            }}
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 1}
                            imgSrc={
                                picturesSaved![selectedScheduleIndex * 5 + 1]
                                    .photo
                            }
                            data={{
                                city: chatGPTPlan[selectedScheduleIndex].city,
                                schedule:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_2,
                                schedule_time:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_2_time,
                                schedule_detail:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_2_detail,
                            }}
                            isModal={isModal}
                            isRestaurant={true}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 2}
                            imgSrc={
                                picturesSaved![selectedScheduleIndex * 5 + 2]
                                    .photo
                            }
                            data={{
                                city: chatGPTPlan[selectedScheduleIndex].city,
                                schedule:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_2,
                                schedule_time:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_2_time,
                                schedule_detail:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_2_detail,
                            }}
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 3}
                            imgSrc={
                                picturesSaved![selectedScheduleIndex * 5 + 3]
                                    .photo
                            }
                            data={{
                                city: chatGPTPlan[selectedScheduleIndex].city,
                                schedule:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_3,
                                schedule_time:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_3_time,
                                schedule_detail:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .restaurant_3_detail,
                            }}
                            isModal={isModal}
                            isRestaurant={true}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 4}
                            imgSrc={
                                picturesSaved![selectedScheduleIndex * 5 + 4]
                                    .photo
                            }
                            data={{
                                city: chatGPTPlan[selectedScheduleIndex].city,
                                schedule:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_3,
                                schedule_time:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_3_time,
                                schedule_detail:
                                    chatGPTPlan[selectedScheduleIndex]
                                        .travel_destination_3_detail,
                            }}
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                    </div>
                    <div className="options-dir">
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1
                            }
                            d2={chatGPTPlan[selectedScheduleIndex].restaurant_2}
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={chatGPTPlan[selectedScheduleIndex].restaurant_2}
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2
                            }
                            d2={chatGPTPlan[selectedScheduleIndex].restaurant_3}
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={chatGPTPlan[selectedScheduleIndex].restaurant_3}
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_3
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleContainer;
