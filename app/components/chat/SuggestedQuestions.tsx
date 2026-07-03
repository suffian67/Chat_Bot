"use client";

interface Props {

    onSelect: (question: string) => void;

}

const questions = [

    {
        icon: "🚚",
        text: "What services do you provide?"
    },

    {
        icon: "📞",
        text: "What is your phone number?"
    },

    {
        icon: "🕒",
        text: "What are your business hours?"
    },

    {
        icon: "📦",
        text: "Do you offer door-to-door delivery?"
    }

];

export default function SuggestedQuestions({
    onSelect
}: Props) {

    return (

        <div className="suggested-questions">

            {questions.map(question => (

                <button

                    key={question.text}

                    className="suggestion-chip"

                    onClick={() =>

                        onSelect(question.text)

                    }

                >

                    <span>

                        {question.icon}

                    </span>

                    {question.text}

                </button>

            ))}

        </div>

    );

}