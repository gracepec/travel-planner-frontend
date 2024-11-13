import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import "./InputContainer.scss";

interface InputContainerProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    sendMessage: () => void;
}

const InputContainer = ({
    input,
    setInput,
    sendMessage,
}: InputContainerProps) => {
    const [isComposing, setIsComposing] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !isComposing) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleCompositionStart = () => setIsComposing(true);
    const handleCompositionEnd = () => setIsComposing(false);

    return (
        <div className="input-container">
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
                placeholder="메시지를 입력하세요..."
            />
            <button onClick={sendMessage}>
                <IoIosSend />
            </button>
        </div>
    );
};

export default InputContainer;
