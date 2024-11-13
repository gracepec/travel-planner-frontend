import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../../recoils/atoms";
import LoadingCard from "../LoadingCard";
import ScheduleCard from "./ScheduleCard";
import fetchChatGPTPlan from "../../../apis/fetchChatGPTPlan";
import { ChatGPTPlanType } from "../../../types/ChatGPTPlanType";
import "./ScheduleContainer.scss";
import schedules from "../../../data/schedule.json";
import DirectionCard from "./DirectionCard";

interface ScheduleContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const ScheduleContainer = ({ isModal, onClick }: ScheduleContainerProps) => {
    const [chatGPTPlan, setChatGPTPlan] = useState<ChatGPTPlanType[]>([]);
    const [day, setDay] = useState<number>();
    const [dayPlan, setDayPlan] = useState<ChatGPTPlanType>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);

    const requestRes = useRecoilValue(requestResState);

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
        setIsLoading(false);
        setChatGPTPlan(schedules);

        chatGPTPlan.map((schedule, index) => {
            setDay(index + 1);
            setDayPlan(schedule);
        });
    }, []);

    const handleScheduleChange = (index: number) => {
        setSelectedScheduleIndex(index);
    };

    return (
        <div className="schedule-container">
            <header>Travel Plan</header>

            {!isLoading && chatGPTPlan && (
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
                <div className="options">
                    <LoadingCard title={"여행 재단중..."} detail={""} />
                </div>
            ) : (
                <div>
                    <div className="options">
                        <ScheduleCard
                            index={selectedScheduleIndex}
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
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex}
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
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex}
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
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex}
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
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex}
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
                        />
                    </div>
                    <div className="options-dir">
                        <DirectionCard
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1
                            }
                            d2={chatGPTPlan[selectedScheduleIndex].restaurant_2}
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            d1={chatGPTPlan[selectedScheduleIndex].restaurant_2}
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2
                            }
                            d2={chatGPTPlan[selectedScheduleIndex].restaurant_3}
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
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
