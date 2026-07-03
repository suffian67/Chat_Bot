import { ChatSuggestion } from "@/types/ChatSuggestions";

const ChatWelcome = {

    title: "Welcome!",

    subtitle: "Ask me anything about Freight World.",

    suggestions: <ChatSuggestion[]>[

        {
            icon: "🚚",
            title: "Our Services",
            question: "What services do you provide?"
        },

        {
            icon: "📦",
            title: "Track Shipment",
            question: "How can I track my shipment?"
        },

        {
            icon: "📞",
            title: "Contact Us",
            question: "What is your phone number?"
        },

        {
            icon: "💰",
            title: "Get Quote",
            question: "How can I request a quote?"
        }

    ]

};

export default ChatWelcome;