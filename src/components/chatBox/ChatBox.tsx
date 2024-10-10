import { useState } from "react";
import "./ChatBox.scss";
import Message from "./MessageContainer";
import InputContainer from "./InputContainer";

const ChatBox = () => {
    const [messages, setMessages] = useState([
        {
            from: "Travel Tailor",
            text: "안녕하세요! Travel Tailor 입니다. 여행 계획을 말씀해주시면 최선을 다해 도와드리겠습니다. 어느 지역을 여행하고 싶으신가요?",
        },
        { from: "User", text: "일본 여행 계획해줘" },
        {
            from: "Travel Tailor",
            text: "일본의 어느 도시를 여행하고 싶으신가요? 언제부터 얼마 동안 여행하고 싶은지도 알려주시면 더 도움을 드릴 수 있습니다.",
        },
        { from: "User", text: "도쿄에 10월 15일 부터 4일 동안 여행 할거야" },
        {
            from: "Travel Tailor",
            text: "우측 화면에 여행 계획을 만들어 드렸습니다. 원하시는 항공권과 숙소를 선택해주시면 계획을 저장해 드릴 수 있습니다. 수정 사항이 있으시다면 언제든 말씀해주세요.",
        },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { from: "User", text: input }]);
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
