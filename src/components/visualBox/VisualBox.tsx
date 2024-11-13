import React, { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
    requestResState,
    selectedAirTicketState,
    selectedAccommodationState,
    selectedScheduleState,
} from "../../recoils/atoms";
import "./VisualBox.scss";
import AirTicketContainer from "./airTicket/AirTicketContainer";
import ScheduleContainer from "./schedule/ScheduleContainer";
import AccommodationContainer from "./accommodation/AccommodationContainer";
import AirTicketModal from "./airTicket/AirTicketModal";
import AccommodationModal from "./accommodation/AccommodationModal";
import ScheduleModal from "./schedule/ScheduleModal";

const VisualBox = () => {
    const [isTailing, setIsTailing] = useState<boolean>(false);
    const requestRes = useRecoilValue(requestResState);
    const [modalOpen, setModalOpen] = useState(false);
    const [optionType, setOptionType] = useState(0);

    const selectedAirTicket = useRecoilValue(selectedAirTicketState);
    const selectedAccommodation = useRecoilValue(selectedAccommodationState);
    const selectedSchedule = useRecoilValue(selectedScheduleState);
    const resetSelectedAirTicket = useResetRecoilState(selectedAirTicketState);
    const resetSelectedAccommodation = useResetRecoilState(
        selectedAccommodationState
    );
    const resetSelectedSchedule = useResetRecoilState(selectedScheduleState);

    useEffect(() => {
        if (requestRes?.answerCode === 1) {
            setIsTailing(true);
        }
    }, [requestRes]);

    useEffect(() => {
        console.log("airTicket has changed: ", selectedAirTicket);
        if (selectedAirTicket === null) return;
        setOptionType(1);
        resetSelectedAccommodation();
        resetSelectedSchedule();
    }, [selectedAirTicket, resetSelectedAccommodation, resetSelectedSchedule]);

    useEffect(() => {
        console.log("accommodation has changed: ", selectedAccommodation);
        if (selectedAccommodation === null) return;
        setOptionType(2);
        resetSelectedAirTicket();
        resetSelectedSchedule();
    }, [selectedAccommodation, resetSelectedAirTicket, resetSelectedSchedule]);

    useEffect(() => {
        console.log("schedule has changed: ", selectedSchedule);
        if (selectedSchedule === null) return;
        setOptionType(3);
        resetSelectedAirTicket();
        resetSelectedAccommodation();
    }, [selectedSchedule, resetSelectedAirTicket, resetSelectedAccommodation]);

    useEffect(() => {
        setIsTailing(true);
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="visual-container">
            {isTailing ? (
                <div>
                    <header>Travel to TOKYO</header>
                    <div className="visual-content">
                        <AirTicketContainer
                            origin={"인천"}
                            destination={requestRes?.responseCity ?? ""}
                            start_date={requestRes?.responseStartDt ?? ""}
                            end_date={requestRes?.responseEndDt ?? ""}
                            isModal={modalOpen}
                            onClick={openModal}
                        />
                        <AccommodationContainer
                            location={requestRes?.responseCity ?? ""}
                            start_date={requestRes?.responseStartDt ?? ""}
                            end_date={requestRes?.responseEndDt ?? ""}
                            isModal={modalOpen}
                            onClick={openModal}
                        />
                        <ScheduleContainer
                            isModal={modalOpen}
                            onClick={openModal}
                        />
                    </div>
                    {optionType === 1 && (
                        <AirTicketModal
                            key={`modal-fli-${Date.now()}`}
                            data={selectedAirTicket}
                            open={modalOpen}
                            close={closeModal}
                        />
                    )}
                    {optionType === 2 && (
                        <AccommodationModal
                            key={`modal-acc-${Date.now()}`}
                            data={selectedAccommodation}
                            open={modalOpen}
                            close={closeModal}
                        />
                    )}
                    {optionType === 3 && (
                        <ScheduleModal
                            key={`modal-acc-${Date.now()}`}
                            data={selectedSchedule}
                            open={modalOpen}
                            close={closeModal}
                        />
                    )}
                </div>
            ) : (
                <div>
                    <header>Travel Tailor</header>
                    <div className="visual-content"></div>
                </div>
            )}
        </div>
    );
};

export default VisualBox;
