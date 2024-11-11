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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="input-container">
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메시지를 입력하세요..."
            />
            <button onClick={sendMessage}>
                <IoIosSend />
            </button>
        </div>
    );
};

export default InputContainer;
