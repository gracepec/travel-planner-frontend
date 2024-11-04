import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { requestResState } from "../../recoils/atoms";
import "./OptionContainer.scss";
import LoadingCard from "./LoadingCard";
import ScheduleCard from "./ScheduleCard";
import fetchChatGPTPlan from "../../apis/fetchChatGPTPlan";
import { ChatGPTPlanType } from "../../types/ChatGPTPlanType";

const ScheduleContainer = () => {
    const [chatGPTPlan, setChatGPTPlan] = useState<ChatGPTPlanType[]>([]);
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

    return (
        <div className="option-container">
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
                                title={schedule.travel_destination_1}
                                time={schedule.travel_destination_1_time}
                                detail={schedule.travel_destination_1_detail}
                                url={""}
                                isTransport={false}
                            />
                            <ScheduleCard
                                title={schedule.restaurant_1}
                                time={""}
                                detail={schedule.restaurant_1_detail}
                                url={""}
                                isTransport={false}
                            />
                            <ScheduleCard
                                title={schedule.travel_destination_2}
                                time={schedule.travel_destination_2_time}
                                detail={schedule.travel_destination_2_detail}
                                url={""}
                                isTransport={false}
                            />
                            <ScheduleCard
                                title={schedule.restaurant_2}
                                time={""}
                                detail={schedule.restaurant_2_detail}
                                url={""}
                                isTransport={false}
                            />
                            <ScheduleCard
                                title={schedule.travel_destination_3}
                                time={schedule.travel_destination_3_time}
                                detail={schedule.travel_destination_3_detail}
                                url={""}
                                isTransport={false}
                            />
                            <ScheduleCard
                                title={schedule.restaurant_3}
                                time={""}
                                detail={schedule.restaurant_3_detail}
                                url={""}
                                isTransport={false}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ScheduleContainer;
