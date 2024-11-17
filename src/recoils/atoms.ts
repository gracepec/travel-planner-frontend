import { atom } from "recoil";
import { ChatGPTRequestType } from "../types/ChatGPTRequestType";
import { FlightType } from "../types/FlightType";
import { AccommodationType } from "../types/AccommodationType";
import { ScheduleType } from "../types/ScheduleType";
import { PlaceDataType } from "../types/PlaceDataType";

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

export const selectedDirectionState = atom<string>({
    key: "selectedDirection",
    default: "",
});

export const selectedPlaceState = atom<string>({
    key: "selectedPlace",
    default: "",
});

export const detailPlaceState = atom<boolean>({
    key: "detailPlace",
    default: false,
});

export const initialLoadingState = atom<boolean>({
    key: "initialLoading",
    default: false,
});

export const scheduleLoadingState = atom<boolean>({
    key: "scheduleLoading",
    default: false,
});

export const airTicketLoadingState = atom<boolean>({
    key: "airTicketLoading",
    default: false,
});

export const accommodationLoadingState = atom<boolean>({
    key: "accommodationLoading",
    default: false,
});

export const scheduleChangedState = atom<boolean>({
    key: "scheduleChanged",
    default: false,
});

export const confirmedAirTicketState = atom<FlightType | null>({
    key: "confirmedAirTicket",
    default: null,
});

export const confirmedAccommodationState = atom<AccommodationType | null>({
    key: "confirmedAccommodation",
    default: null,
});
