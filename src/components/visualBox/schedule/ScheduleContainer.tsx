import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    requestResState,
    scheduleLoadingState,
    scheduleChangedState,
    chatGPTPlanState,
} from "../../../recoils/atoms";
import LoadingCard from "../../ui/LoadingCard";
import ScheduleCard from "./ScheduleCard";
import DirectionCard from "./DirectionCard";
import fetchChatGPTPlan from "../../../apis/fetchChatGPTPlan";
import fetchPlaceData from "../../../apis/fetchPlaceData";
import { ChatGPTPlanType } from "../../../types/ChatGPTPlanType";
import { PlaceDataType } from "../../../types/PlaceDataType";
import "./ScheduleContainer.scss";
import schedules from "../../../data/schedule.json";
import schedules2 from "../../../data/schedule_2.json";
import pictures from "../../../data/place_img.json";
import pictures2 from "../../../data/place_img_2.json";
import RoadMap from "./roadMap/RoadMap";

interface ScheduleContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const ScheduleContainer = ({ isModal, onClick }: ScheduleContainerProps) => {
    const [chatGPTPlan, setChatGPTPlan] = useState<ChatGPTPlanType[]>([]);
    const [placeData, setPlaceData] = useState<PlaceDataType>();
    const [placeDataArray, setPlaceDataArray] = useState<PlaceDataType[]>([]);

    const [city, setCity] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);
    const [picturesSaved, setPicturesSaved] = useState<{ photo: string }[]>();

    const requestRes = useRecoilValue(requestResState);
    const scheduleLoading = useRecoilValue(scheduleLoadingState);
    const scheduleChanged = useRecoilValue(scheduleChangedState);

    const setChatGPTPlanState = useSetRecoilState(chatGPTPlanState);

    const getChatGPTPlan = async (requestId: number) => {
        setIsLoading(true);

        try {
            const result = await fetchChatGPTPlan({
                requestId: requestId.toString(),
            });
            setChatGPTPlan(result);
            setChatGPTPlanState(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    // const getPlaceData = async (place: string, index: number) => {
    //     try {
    //         const result = await fetchPlaceData({
    //             place: place,
    //         });
    //         setPlaceDataArray(prevArray => {
    //             const updatedArray = [...prevArray];
    //             updatedArray[index] = result;
    //             return updatedArray;
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     console.log("placeDataArray: ", placeDataArray);
    // }, [placeDataArray]);

    useEffect(() => {
        if (!requestRes) return;
        if (requestRes.answerCode === 1) {
            getChatGPTPlan(requestRes.requestId);
        }
        if (requestRes.answerCode === 2) {
            getChatGPTPlan(requestRes.requestId);
        }
    }, [requestRes]);

    // useEffect(() => {
    //     setIsLoadingDetail(true);
    //     if (scheduleChanged) {
    //         setChatGPTPlan(schedules2);
    //         setPicturesSaved(pictures2);
    //     } else {
    //         setChatGPTPlan(schedules);
    //         setPicturesSaved(pictures);
    //     }
    //     setIsLoading(!scheduleLoading);
    // }, [scheduleLoading, scheduleChanged]);

    // useEffect(() => {
    //     if (!isLoading) {
    //         setTimeout(loadingDetail, 3000);
    //     }
    // }, [isLoading]);

    // useEffect(() => {
    //     const fetchPlaceDataSequentially = async () => {
    //         if (chatGPTPlan.length === 0) return;

    //         for (let index = 0; index < chatGPTPlan.length; index++) {
    //             const schedule = chatGPTPlan[index];
    //             const baseIndex = index * 5;

    //             await getPlaceData(
    //                 schedule.travel_destination_1_local,
    //                 baseIndex + 0
    //             );
    //             await getPlaceData(schedule.restaurant_2_local, baseIndex + 1);
    //             await getPlaceData(
    //                 schedule.travel_destination_2_local,
    //                 baseIndex + 2
    //             );
    //             await getPlaceData(schedule.restaurant_3_local, baseIndex + 3);
    //             await getPlaceData(
    //                 schedule.travel_destination_3_local,
    //                 baseIndex + 4
    //             );
    //         }
    //     };
    //     fetchPlaceDataSequentially();
    // }, [chatGPTPlan]);

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

            <RoadMap
                gptPlan={chatGPTPlan[selectedScheduleIndex]}
                isModal={isModal}
            ></RoadMap>

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
                            city={chatGPTPlan[selectedScheduleIndex].city}
                            schedule={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1
                            }
                            schedule_local={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1_local
                            }
                            schedule_detail={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1_detail
                            }
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 1}
                            city={chatGPTPlan[selectedScheduleIndex].city}
                            schedule={
                                chatGPTPlan[selectedScheduleIndex].restaurant_2
                            }
                            schedule_local={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_2_local
                            }
                            schedule_detail={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_2_detail
                            }
                            isModal={isModal}
                            isRestaurant={true}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 2}
                            city={chatGPTPlan[selectedScheduleIndex].city}
                            schedule={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2
                            }
                            schedule_local={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2_local
                            }
                            schedule_detail={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2_detail
                            }
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 3}
                            city={chatGPTPlan[selectedScheduleIndex].city}
                            schedule={
                                chatGPTPlan[selectedScheduleIndex].restaurant_3
                            }
                            schedule_local={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_3_local
                            }
                            schedule_detail={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_3_detail
                            }
                            isModal={isModal}
                            isRestaurant={true}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                        <ScheduleCard
                            index={selectedScheduleIndex * 5 + 4}
                            city={chatGPTPlan[selectedScheduleIndex].city}
                            schedule={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_3
                            }
                            schedule_local={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_3_local
                            }
                            schedule_detail={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_3_detail
                            }
                            isModal={isModal}
                            isRestaurant={false}
                            onClick={onClick}
                            isLoadingDetail={isLoadingDetail}
                        />
                    </div>
                    {/* <div className="options-dir">
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_1_local
                            }
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_2_local
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_2_local
                            }
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2_local
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_2_local
                            }
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_3_local
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                        <DirectionCard
                            city={city ?? ""}
                            d1={
                                chatGPTPlan[selectedScheduleIndex]
                                    .restaurant_3_local
                            }
                            d2={
                                chatGPTPlan[selectedScheduleIndex]
                                    .travel_destination_3_local
                            }
                            isModal={isModal}
                            onClick={onClick}
                        />
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default ScheduleContainer;
