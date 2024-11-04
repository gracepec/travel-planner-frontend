import "./MessageContainer.scss";

interface MessageContainerProps {
    messages: {
        from: string;
        text: string;
    }[];
}

const MessageContainer = ({ messages }: MessageContainerProps) => {
    return (
        <div className="messages">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`message ${
                        msg.from === "User" ? "user" : "bot"
                    }`}
                >
                    <strong>{msg.from}</strong>
                    <p>{msg.text}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageContainer;
