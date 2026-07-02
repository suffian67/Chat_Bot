interface Props {

    onSelect: (question: string) => void;

}

const questions = [

    "What services do you provide?",

    "What is your phone number?",

    "What are your business hours?",

    "Do you offer door-to-door delivery?"

];

export default function SuggestedQuestions({
    onSelect
}: Props) {

    return (

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 20
            }}
        >

            {questions.map(question => (

                <button
                    key={question}
                    onClick={() => onSelect(question)}
                    style={{
                        padding: "10px 16px",
                        borderRadius: 20,
                        border: "1px solid #ddd",
                        background: "#fff",
                        cursor: "pointer"
                    }}
                >

                    {question}

                </button>

            ))}

        </div>

    );

}