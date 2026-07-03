"use client";

import { useState } from "react";
import ChatPopup from "./ChatPopup";
import "./chat.css";
import ChatTheme from "@/config/chatTheme";

interface Props {

    websiteId: string;

}

export default function ChatLauncher({
    websiteId
}: Props) {

    const [open, setOpen] =
        useState(false);

    return (

        <>

            {

                open && (

                    <ChatPopup

                        websiteId={websiteId}

                        onClose={() =>
                            setOpen(false)
                        }

                    />

                )

            }

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