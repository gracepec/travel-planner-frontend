import { ChatGPTPlanType } from "../types/ChatGPTPlanType";
import instance from "./instance";

interface FetchChatGPTRequestParams {
    requestId: string;
}

const fetchChatGPTRequest = async ({
    requestId,
}: FetchChatGPTRequestParams) => {
    try {
        const res = await instance.get<ChatGPTPlanType[]>(
            `/chatgpt/travel-plan/${requestId}`
        );
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error fetching chatgpt-plan",
            error,
        });
        throw error;
    }
};

export default fetchChatGPTRequest;
