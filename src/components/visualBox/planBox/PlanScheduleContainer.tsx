import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { chatGPTPlanState } from "../../../recoils/atoms";
import ScheduleCard from "../schedule/ScheduleCard";
import "./PlanScheduleContainer.scss";
import RoadMap from "../schedule/roadMap/RoadMap";

interface PlanScheduleContainerProps {
    isModal: boolean;
    onClick: () => void;
}

const PlanScheduleContainer = ({
    isModal,
    onClick,
}: PlanScheduleContainerProps) => {
    const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);
    const chatGPTPlan = useRecoilValue(chatGPTPlanState);

    if (!chatGPTPlan) return <div className="schedule-container"></div>;

    return (
        <div className="schedule-container">
            <header>Travel Plan</header>

            {chatGPTPlan.map((plan, scheduleIndex) => (
                <div key={scheduleIndex}>
                    <RoadMap gptPlan={plan} isModal={isModal} />

                    <div>
                        <div className="options">
                            <ScheduleCard
                                index={scheduleIndex * 5}
                                city={plan.city}
                                schedule={plan.travel_destination_1}
                                schedule_local={plan.travel_destination_1_local}
                                schedule_detail={
                                    plan.travel_destination_1_detail
                                }
                                isModal={isModal}
                                isRestaurant={false}
                                onClick={onClick}
                                isLoadingDetail={isLoadingDetail}
                            />
                            <ScheduleCard
                                index={scheduleIndex * 5 + 1}
                                city={plan.city}
                                schedule={plan.restaurant_2}
                                schedule_local={plan.restaurant_2_local}
                                schedule_detail={plan.restaurant_2_detail}
                                isModal={isModal}
                                isRestaurant={true}
                                onClick={onClick}
                                isLoadingDetail={isLoadingDetail}
                            />
                            <ScheduleCard
                                index={scheduleIndex * 5 + 2}
                                city={plan.city}
                                schedule={plan.travel_destination_2}
                                schedule_local={plan.travel_destination_2_local}
                                schedule_detail={
                                    plan.travel_destination_2_detail
                                }
                                isModal={isModal}
                                isRestaurant={false}
                                onClick={onClick}
                                isLoadingDetail={isLoadingDetail}
                            />
                            <ScheduleCard
                                index={scheduleIndex * 5 + 3}
                                city={plan.city}
                                schedule={plan.restaurant_3}
                                schedule_local={plan.restaurant_3_local}
                                schedule_detail={plan.restaurant_3_detail}
                                isModal={isModal}
                                isRestaurant={true}
                                onClick={onClick}
                                isLoadingDetail={isLoadingDetail}
                            />
                            <ScheduleCard
                                index={scheduleIndex * 5 + 4}
                                city={plan.city}
                                schedule={plan.travel_destination_3}
                                schedule_local={plan.travel_destination_3_local}
                                schedule_detail={
                                    plan.travel_destination_3_detail
                                }
                                isModal={isModal}
                                isRestaurant={false}
                                onClick={onClick}
                                isLoadingDetail={isLoadingDetail}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlanScheduleContainer;
