"use client";

import ChatConfig from "@/config/chat.config";
import ChatLauncher from "../components/widget/ChatLauncher";

interface Props {

    children: React.ReactNode;

}

export default function ChatWidgetProvider({
    children
}: Props) {

    return (

        <>

            {children}

            <ChatLauncher
                websiteId={ChatConfig.websiteId}
            />

        </>

    );

}