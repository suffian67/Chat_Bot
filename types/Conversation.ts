export interface ChatMessage {

    role: "user" | "assistant";

    content: string;

    createdAt: Date;

}

export interface Conversation {

    id: string;

    websiteId: string;

    messages: ChatMessage[];

    lastActivity: Date;

}