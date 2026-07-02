import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Props {

    role: "user" | "assistant";

    content: string;

}

export default function ChatMessage({
    role,
    content
}: Props) {

    const isUser = role === "user";

    return (

        <div
            style={{
                display: "flex",
                justifyContent: isUser
                    ? "flex-end"
                    : "flex-start",
                marginBottom: 16
            }}
        >
            <div
                style={{
                    fontWeight: 600,
                    marginBottom: 6
                }}
            >

                {isUser
                    ? "You"
                    : "AI Assistant"}

            </div>

            <div
                style={{
                    width: "fit-content",
                    maxWidth: "75%",
                    padding: "14px 18px",
                    borderRadius: 20,
                    background: isUser
                        ? "#2563eb"
                        : "#ffffff",
                    color: isUser
                        ? "#fff"
                        : "#222",
                    border: isUser
                        ? "none"
                        : "1px solid #e5e7eb",
                    boxShadow:
                        "0 4px 12px rgba(0,0,0,.08)",
                    lineHeight: 1.7
                }}
            >

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                >
                    {content}
                </ReactMarkdown>

            </div>

        </div>

    );

}