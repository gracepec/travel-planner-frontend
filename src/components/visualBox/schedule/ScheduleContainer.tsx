import { useEffect, useState } from "react";
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
        console.log(chatGPTPlan);
    }, [chatGPTPlan]);

    useEffect(() => {
        setIsLoading(false);
        setChatGPTPlan(schedules);

        chatGPTPlan.map((schedule, index) => {
            setDay(index + 1);
            setDayPlan(schedule);
        });
    }, []);

    return (
        <div className="schedule-container">
            <header>Travel Plan</header>
            {isLoading ? (
                <div className="options">
                    <LoadingCard title={"여행 재단중..."} detail={""} />
                </div>
            ) : (
                chatGPTPlan.map((schedule, index) => (
                    <div>
                        <header>{schedule.day}</header>
                        <div className="options">
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.travel_destination_1,
                                    schedule_time:
                                        schedule.travel_destination_1_time,
                                    schedule_detail:
                                        schedule.travel_destination_1_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                            <DirectionCard
                                d1={schedule.travel_destination_1}
                                d2={schedule.travel_destination_2}
                                isModal={isModal}
                                onClick={onClick}
                            ></DirectionCard>
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.travel_destination_2,
                                    schedule_time:
                                        schedule.travel_destination_2_time,
                                    schedule_detail:
                                        schedule.travel_destination_2_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                            <DirectionCard
                                d1={schedule.travel_destination_2}
                                d2={schedule.travel_destination_3}
                                isModal={isModal}
                                onClick={onClick}
                            ></DirectionCard>
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.travel_destination_3,
                                    schedule_time:
                                        schedule.travel_destination_3_time,
                                    schedule_detail:
                                        schedule.travel_destination_3_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                        </div>
                        <div className="options">
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.restaurant_1,
                                    schedule_time: schedule.restaurant_1_time,
                                    schedule_detail:
                                        schedule.restaurant_1_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.restaurant_2,
                                    schedule_time: schedule.restaurant_2_time,
                                    schedule_detail:
                                        schedule.restaurant_2_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                            <ScheduleCard
                                index={index}
                                data={{
                                    city: schedule.city,
                                    schedule: schedule.restaurant_3,
                                    schedule_time: schedule.restaurant_3_time,
                                    schedule_detail:
                                        schedule.restaurant_3_detail,
                                }}
                                isModal={isModal}
                                onClick={onClick}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ScheduleContainer;
