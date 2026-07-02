"use client";

import { UIChatMessage } from "@/types/UIChatMessage";
import ChatMessages from "./ChatMessages";
import TypingIndicator from "./TypingIndicator";
import { useEffect, useRef } from "react";

interface Props {

    messages: UIChatMessage[];

    loading: boolean;

}

export default function ChatWindow({ messages, loading }: Props) {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);
    return (

        <div
            style={{
                border: "1px solid #ddd",
                minHeight: 450,
                padding: 20,
                marginBottom: 20,
                overflowY: "auto"
            }}
        >

            <ChatMessages
                messages={messages}
            />

            {loading && (
                <TypingIndicator />
            )}

            <div ref={bottomRef} />

        </div>

    );

}