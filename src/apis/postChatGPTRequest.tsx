import { ChatGPTRequestType } from "../types/ChatGPTRequestType";
import instance from "./instance";

interface PostChatGPTRequestParams {
    requestId: string;
    requestContent: string;
}

const postChatGPTRequest = async ({
    requestId,
    requestContent,
}: PostChatGPTRequestParams) => {
    try {
        const res = await instance.post<ChatGPTRequestType>(
            `/chatgpt/request`,
            {
                requestId,
                requestContent,
            }
        );
        return res.data;
    } catch (error) {
        console.log({
            success: false,
            message: "Error posting chatgpt-request",
            error,
        });
        throw error;
    }
};

export default postChatGPTRequest;
