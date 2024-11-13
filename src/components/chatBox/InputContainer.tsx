import { IoIosSend } from "react-icons/io";
import "./InputContainer.scss";
import { useState } from "react";

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
            // IME 입력 중이 아닐 때만 실행
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
