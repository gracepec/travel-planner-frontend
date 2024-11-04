import { ChatGPTResponseType } from "../types/ChatGPTResponseType";
import instance from "./instance";

interface FetchChatGPTRequestParams {
    requestId: string;
}

const fetchChatGPTRequest = async ({
    requestId,
}: FetchChatGPTRequestParams) => {
    try {
        const res = await instance.get<ChatGPTResponseType>(
            `/chatgpt/request/${requestId}`
        );
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching chatgpt-response",
            error,
        });
        throw error;
    }
};

export default fetchChatGPTRequest;
