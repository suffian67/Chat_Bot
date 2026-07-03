"use client";

import ChatTheme from "@/config/chatTheme";
import ChatWidget from "./ChatWidget";

interface Props {

    websiteId: string;

    onClose(): void;

}

export default function ChatPopup({
    websiteId,
    onClose
}: Props) {

    return (

        <div className="chat-popup"
            style={{

                background: ChatTheme.background

            }}
        >

            <ChatWidget

                websiteId={websiteId}

                onClose={onClose}

            />

        </div>

    );

}