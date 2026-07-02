import { ChatRequest } from "@/types/ChatRequest";
import { ChatResponse } from "@/types/ChatResponse";

class ChatApi {

    async send(request: ChatRequest): Promise<ChatResponse> {

        const response = await fetch("/api/v1/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(request)

        });

        return response.json();

    }

}

export default new ChatApi();