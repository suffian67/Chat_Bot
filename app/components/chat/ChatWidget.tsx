"use client";

import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import useChat from "@/lib/useChat";

interface Props {

    websiteId: string;

    onClose?: () => void;

}

export default function ChatWidget({
    websiteId,
    onClose
}: Props) {

    const {

        messages,

        loading,

        sendMessage,

        clearConversation

    } = useChat(websiteId);

    return (

        <div className="chat-widget">

            <ChatHeader
                onNewChat={clearConversation}

                onClose={onClose}
            />


            <ChatWindow

                messages={messages}

                loading={loading}

                onSelect={sendMessage}

                onNewChat={clearConversation}

            />

            <ChatInput

                loading={loading}

                onSend={sendMessage}

            />

        </div>

    );

}