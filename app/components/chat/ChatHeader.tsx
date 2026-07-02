interface Props {

    onNewChat(): void;

}

export default function ChatHeader({
    onNewChat
}: Props) {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 20,
                borderBottom: "1px solid #eee",
                marginBottom: 20
            }}
        >

            <div>

                <h2
                    style={{
                        margin: 0
                    }}
                >

                    🤖 AI Assistant

                </h2>

                <small>

                    Online

                </small>

            </div>

            <button
                onClick={onNewChat}
            >

                New Chat

            </button>

        </div>

    );

}