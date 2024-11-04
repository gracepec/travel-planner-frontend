import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { requestResState } from "../../recoils/atoms";
import "./ChatBox.scss";
import Message from "./MessageContainer";
import InputContainer from "./InputContainer";
import postChatGPTRequest from "../../apis/postChatGPTRequest";

const ChatBox = () => {
    const [messages, setMessages] = useState([
        {
            from: "Travel Tailor",
            text: "안녕하세요! Travel Tailor 입니다. 완벽한 여행을 위해 최선을 다해 도와드리겠습니다. 어느 지역을 언제 여행하고 싶으신가요?\n(ex. 10월 15일부터 20일까지 LA 여행하고 싶어)",
        },
    ]);
    const [input, setInput] = useState("");
    const setRequestResState = useSetRecoilState(requestResState);

    const postRequest = async (requestId: string, input: string) => {
        try {
            const result = await postChatGPTRequest({
                requestId: requestId,
                requestContent: input,
            });
            const ex_result = {
                requestId: 1,
                answerCode: 1,
                responseContent: "Response from chatGPT.",
            };
            setRequestResState(result);
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { from: "User", text: input }]);
            postRequest("1", input);
            setInput("");
        }
    };

    return (
        <div className="chat-container">
            <Message messages={messages} />
            <InputContainer
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
            />
        </div>
    );
};

export default ChatBox;
