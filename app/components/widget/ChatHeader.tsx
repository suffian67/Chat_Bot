"use client";

import ChatConfig from "@/config/chat.config";
import AIIcon from "./icons/AIIcon";
import CloseIcon from "./icons/CloseIcon";

interface Props {

    onNewChat(): void;

    onClose(): void;

}

export default function ChatHeader({
    onNewChat,
    onClose
}: Props) {

    return (

        <header className="chat-header">

            <div className="chat-brand">

                <div className="chat-logo">

                    <AIIcon />

                </div>

                <div>

                    <h2 className="chat-title">

                        {ChatConfig.assistantName}

                    </h2>

                    <p className="chat-subtitle">

                        {ChatConfig.subtitle}

                    </p>

                    <div className="chat-online">

                        <span />

                        Online

                    </div>

                </div>

            </div>

            <button

                className="header-icon"

                onClick={onClose}

            >

                <CloseIcon />

            </button>

        </header>

    );

}