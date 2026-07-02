"use client";

import useChat from "@/app/hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

interface Props {

    websiteId: string;

}

export default function ChatWidget({
    websiteId
}: Props) {

    const {

        messages,

        loading,

        sendMessage,

        clearConversation

    } = useChat(websiteId);

    return (

        <div>

            <ChatHeader
                onNewChat={clearConversation}
            />

            <ChatWindow

                messages={messages}

                loading={loading}

            />

            <ChatInput
                onSend={sendMessage}
                loading={loading}
            />

        </div>

    );

}