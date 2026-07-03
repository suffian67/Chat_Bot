import ChatConfig from "@/config/chat.config";
import ChatTheme from "@/config/chatTheme";
import ChatWelcome from "@/config/chatWelcome";

interface Props {

    onSelect(question: string): void;

}

export default function WelcomeCard({
    onSelect
}: Props) {

    return (

        <div className="welcome-card">

            <div

                className="welcome-logo"

                style={{

                    background: ChatTheme.primary

                }}

            >

                🤖

            </div>

            <h2>

                {ChatConfig.title}

            </h2>

            <p>

                {ChatConfig.subtitle}

            </p>

            <div className="suggestion-grid">

                {

                    ChatWelcome.suggestions.map(item => (

                        <button

                            key={item.title}

                            className="suggestion-card"

                            onClick={() =>
                                onSelect(
                                    item.question
                                )
                            }

                        >

                            <div className="suggestion-icon">

                                {item.icon}

                            </div>

                            <div>

                                <div className="suggestion-title">

                                    {item.title}

                                </div>

                                <div className="suggestion-question">

                                    {item.question}

                                </div>

                            </div>

                        </button>

                    ))

                }

            </div>

        </div>

    );

}