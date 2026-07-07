"use client";

import ChatWidget from "@/app/components/chat/ChatWidget";
import ChatConfig from "@/config/widget.config";
import "@/app/styles/chat.css";

export default function EmbedPage() {

    return (

        <div
            style={{
                width: "420px",
                height: "680px",
                overflow: "hidden",
                background: "transparent"
            }}
        >

            <ChatWidget
                websiteId={ChatConfig.websiteId}
            />

        </div>

    );

}