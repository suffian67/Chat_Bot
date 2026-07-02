import { UIChatMessage } from "@/types/UIChatMessage";
import ChatMessage from "./ChatMessage";

interface Props {

    messages: UIChatMessage[];

}

export default function ChatMessages({
    messages
}: Props) {

    return (

        <>

            {messages.map((message, index) => (

                <ChatMessage

                    key={index}

                    role={message.role}

                    content={message.content}

                />

            ))}

        </>

    );

}