export interface UIChatMessage {

    role: "user" | "assistant";

    content: string;

    createdAt: Date;

}