import { atom } from "recoil";
import { ChatGPTRequestType } from "../types/ChatGPTRequestType";
import { FlightType } from "../types/FlightType";
import { AccommodationType } from "../types/AccommodationType";
import { ScheduleType } from "../types/ScheduleType";

export const requestResState = atom<ChatGPTRequestType | null>({
    key: "requestRes",
    default: null,
});

export const selectedAirTicketState = atom<FlightType | null>({
    key: "selectedAirTicket",
    default: null,
});

export const selectedAccommodationState = atom<AccommodationType | null>({
    key: "selectedAccommodation",
    default: null,
});

export const selectedScheduleState = atom<ScheduleType | null>({
    key: "selectedSchedule",
    default: null,
});

export const selectedIndexState = atom<number>({
    key: "selectedIndex",
    default: 0,
});
