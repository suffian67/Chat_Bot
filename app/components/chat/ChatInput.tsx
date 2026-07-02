"use client";

import { useState } from "react";

interface Props {

    loading: boolean;

    onSend(message: string): Promise<void>;

}

export default function ChatInput({
    loading,
    onSend
}: Props) {

    const [message, setMessage] = useState("");

    async function handleSend() {

        if (!message.trim())
            return;

        await onSend(message);

        setMessage("");

    }

    return (

        <div
            style={{
                display: "flex",
                gap: 10
            }}
        >

            <input

                value={message}

                onChange={(e) =>
                    setMessage(e.target.value)
                }

                onKeyDown={(e) => {

                    if (
                        e.key === "Enter" &&
                        !loading
                    ) {

                        handleSend();

                    }

                }}

                placeholder="Ask anything..."

                style={{
                    flex: 1,
                    padding: 12
                }}

            />

            <button

                onClick={handleSend}

                disabled={loading}

            >

                Send

            </button>

        </div>

    );

}