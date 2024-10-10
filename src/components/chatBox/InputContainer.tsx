import React from "react";

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
    return (
        <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default InputContainer;
