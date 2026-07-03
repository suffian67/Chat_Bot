"use client";

import ChatTheme from "@/config/chatTheme";
import ReactMarkdown from "react-markdown";

interface Props {

    role: "user" | "assistant";

    content: string;

    createdAt: Date;

}

export default function ChatMessage({
    role,
    content,
    createdAt
}: Props) {

    const isUser = role === "user";

    return (

        <div
            className={`chat-message ${isUser ? "user" : "assistant"}`}
        >

            {!isUser && (

                <div className="chat-avatar ai">

                    AI

                </div>

            )}

            <div className="chat-content">

                <div

                    className={`chat-bubble ${isUser ? "user" : "assistant"}`}

                    style={{

                        background: isUser

                            ? ChatTheme.userBubble

                            : ChatTheme.assistantBubble

                    }}

                >

                    <ReactMarkdown>

                        {content}

                    </ReactMarkdown>

                </div>

                <div className="message-time">

                    {new Date(createdAt).toLocaleTimeString([], {

                        hour: "2-digit",

                        minute: "2-digit"

                    })}

                </div>

            </div>

            {isUser && (

                <div className="chat-avatar user">

                    U

                </div>

            )}

        </div>

    );

}