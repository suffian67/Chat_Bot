"use client";

import { UIChatMessage } from "@/types/UIChatMessage";
import { useEffect, useRef } from "react";
import WelcomeCard from "./WelcomeCard";
import ChatMessages from "./ChatMessages";
import TypingIndicator from "./TypingIndicator";

interface Props {

    messages: UIChatMessage[];

    loading: boolean;

    onSelect(question: string): void;

    onNewChat(): void;

}

export default function ChatWindow({

    messages,

    loading,

    onSelect,

    onNewChat

}: Props) {

    const bottomRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);

    if (
        messages.length === 0 &&
        !loading
    ) {

        return (

            <div className="chat-window">

                <WelcomeCard
                    onSelect={onSelect}
                />

            </div>

        );

    }

    return (


        <div className="chat-window">

            <div className="chat-toolbar">

                <button
                    className="new-chat-link"
                    onClick={onNewChat}
                >

                    + New Conversation

                </button>

            </div>

            <ChatMessages
                messages={messages}
            />

            {

                loading &&

                <TypingIndicator />

            }

            <div ref={bottomRef} />

        </div>

    );

}