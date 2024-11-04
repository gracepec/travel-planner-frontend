import { atom } from "recoil";
import { ChatGPTRequestType } from "../types/ChatGPTRequestType";

export const requestResState = atom<ChatGPTRequestType | null>({
    key: "requestRes",
    default: null,
});
