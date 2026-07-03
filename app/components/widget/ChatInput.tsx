"use client";

import {
    useEffect,
    useRef,
    useState
} from "react";

interface Props {

    loading: boolean;

    onSend(message: string): Promise<void>;

}

export default function ChatInput({
    loading,
    onSend
}: Props) {

    const [message, setMessage] =
        useState("");

    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    useEffect(() => {

        const textarea =
            textareaRef.current;

        if (!textarea)
            return;

        textarea.style.height = "0px";

        textarea.style.height =
            Math.min(
                textarea.scrollHeight,
                140
            ) + "px";

    }, [message]);

    async function handleSend() {

        if (!message.trim())
            return;

        const text = message;

        setMessage("");

        await onSend(text);

    }

    return (

        <div className="chat-input">

            <textarea

                ref={textareaRef}

                className="chat-textarea"

                value={message}

                rows={1}

                placeholder="Ask anything..."

                disabled={loading}

                onChange={(e) =>
                    setMessage(
                        e.target.value
                    )
                }

                onKeyDown={(e) => {

                    if (

                        e.key === "Enter" &&

                        !e.shiftKey

                    ) {

                        e.preventDefault();

                        handleSend();

                    }

                }}

            />

            <button

                className="send-button"

                disabled={
                    loading ||
                    !message.trim()
                }

                onClick={handleSend}

            >

                ➜

            </button>

        </div>

    );

}