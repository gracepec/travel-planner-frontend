import React, { useEffect, useRef } from "react";
import "./MessageContainer.scss";

interface MessageContainerProps {
    messages: {
        from: string;
        text: string;
    }[];
}

const MessageContainer = ({ messages }: MessageContainerProps) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="messages">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`message ${msg.from === "You" ? "user" : "bot"}`}
                >
                    <strong>{msg.from}</strong>
                    <p>{msg.text}</p>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageContainer;
