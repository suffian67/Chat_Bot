"use client";

import { useState } from "react";
import ChatWidget from "../chat/ChatWidget";
import ChatTheme from "@/config/widgetTheme";
import "@/app/styles/chat.css";

interface Props {

    websiteId: string;

}

export default function ChatLauncher({
    websiteId
}: Props) {

    const [open, setOpen] = useState(false);

    return (

        <>

            {open && (

                <div className="chat-popup">

                    <ChatWidget
                        websiteId={websiteId}
                        onClose={() => setOpen(false)}
                    />

                </div>

            )}

            <button
                className="chat-launcher"
                onClick={() => setOpen(previous => !previous)}
                style={{
                    width: ChatTheme.launcherSize,
                    height: ChatTheme.launcherSize
                }}
            >
                💬
            </button>

        </>

    );

}