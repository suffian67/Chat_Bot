"use client";

import ChatApi from "@/services/api/ChatApi";
import { UIChatMessage } from "@/types/UIChatMessage";
import { useState } from "react";

export default function useChat(
    websiteId: string
) {

    const [messages, setMessages] = useState<UIChatMessage[]>([]);

    const [loading, setLoading] = useState(false);

    const [conversationId, setConversationId] =
        useState<string | undefined>(() => {

            if (typeof window === "undefined")
                return undefined;

            return (
                localStorage.getItem("conversationId")
                ?? undefined
            );

        });

    function clearConversation() {

        setMessages([]);

        setConversationId(undefined);

        localStorage.removeItem(
            "conversationId"
        );

        setLoading(false);

    }
    async function sendMessage(message: string) {

        if (!message.trim())
            return;

        const userMessage: UIChatMessage = {

            role: "user",

            content: message

        };

        setMessages(previous => [

            ...previous,

            userMessage

        ]);

        setLoading(true);

        try {

            const response = await ChatApi.send({

                websiteId,

                conversationId,

                message

            });

            if (response.success) {

                if (response.conversationId) {

                    setConversationId(
                        response.conversationId
                    );

                    localStorage.setItem(
                        "conversationId",
                        response.conversationId
                    );

                }

                setMessages(previous => [

                    ...previous,

                    {

                        role: "assistant",

                        content: response.reply

                    }

                ]);

            }

        }
        catch {

            setMessages(previous => [

                ...previous,

                {

                    role: "assistant",

                    content:
                        "⚠️ Sorry, I couldn't contact the AI service. Please try again."

                }

            ]);

        }
        finally {

            setLoading(false);

        }

    }

    return {

        messages,

        loading,

        sendMessage,

        clearConversation

    };

}