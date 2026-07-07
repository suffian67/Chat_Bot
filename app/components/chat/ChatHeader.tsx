"use client";

import ChatConfig from "@/config/widget.config";
import AIIcon from "../shared/icons/AIIcon";
import CloseIcon from "../shared/icons/CloseIcon";

interface Props {

    onNewChat(): void;

    onClose?: () => void;

}

export default function ChatHeader({
    onNewChat,
    onClose
}: Props) {

    return (

        <header className="chat-header">

            <div className="chat-brand">

                <div className="chat-logo">

                    <AIIcon />

                </div>

                <div>

                    <h2 className="chat-title">

                        {ChatConfig.assistantName}

                    </h2>

                    <p className="chat-subtitle">

                        {ChatConfig.subtitle}

                    </p>

                    <div className="chat-online">

                        <span />

                        Online

                    </div>

                </div>

            </div>

            {onClose && (

                <button
                    className="header-icon"
                    onClick={() => {

                        if (window.parent !== window) {

                            window.parent.postMessage(
                                {
                                    type: "AI_WIDGET_CLOSE"
                                },
                                "*"
                            );

                        }
                        else {

                            onClose?.();

                        }

                    }}
                >
                    <CloseIcon />
                </button>

            )}

        </header>

    );

}