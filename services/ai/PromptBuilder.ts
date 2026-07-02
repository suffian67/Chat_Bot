import { Conversation } from "@/types/Conversation";
import { SearchResult } from "@/types/SearchResult";

class PromptBuilder {

    build(
        conversation: Conversation,
        results: SearchResult[]
    ): string {

        const userQuestion =
            conversation.messages[conversation.messages.length - 1]?.content ?? "";

        let prompt = `
You are the official AI assistant of this company.

Rules:

- Answer ONLY from the website knowledge provided below.
- Never make up information.
- If the answer is not available, politely say that the information is not available on the website.
- Keep your answers professional and concise.
- Answer in the same language as the user's question.

==================================================

Conversation History

`;

        for (const message of conversation.messages) {

            prompt += `
${message.role.toUpperCase()}:

${message.content}

`;

        }

        prompt += `

==================================================

Current User Question:

${userQuestion}

==================================================

Website Knowledge

`;

        for (const result of results) {

            prompt += `

----------------------------------------

PAGE: ${result.page}

SECTION: ${result.section}

${result.text}

`;

        }

        return prompt;
    }

}

export default new PromptBuilder();