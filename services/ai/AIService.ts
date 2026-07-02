import { ChatRequest } from "@/types/ChatRequest";
import { ChatResponse } from "@/types/ChatResponse";
import GeminiService from "./GeminiService";
import PromptBuilder from "./PromptBuilder";
import SearchService from "./SearchService";
import WebsiteContentService from "../repositories/WebsiteContentService";
import ConversationService from "../conversation/ConversationService";


class AIService {
    async chat(request: ChatRequest): Promise<ChatResponse> {

        // Step 1 - Load or Create Conversation
        const conversation =
            ConversationService.getOrCreateConversation(
                request.websiteId,
                request.conversationId
            );

        // Step 2 - Save User Message
        ConversationService.addUserMessage(
            conversation,
            request.message
        );

        // Step 3 - Load Website
        const website =
            await WebsiteContentService.getWebsiteContent(
                request.websiteId
            );

        console.log("===== WEBSITE =====");
        console.dir(website, { depth: null });

        // Step 4 - Search Website
        const searchResults =
            SearchService.search(
                website,
                request.message
            );

        console.log("===== SEARCH RESULTS =====");
        console.log(JSON.stringify(searchResults, null, 2));
        // Step 5 - Build Prompt
        const prompt =
            PromptBuilder.build(
                conversation,
                searchResults
            );

        console.log("===== PROMPT =====");
        console.log(prompt);
        // Step 6 - Ask Gemini
        const answer =
            await GeminiService.generateResponse(
                prompt
            );

        // Step 7 - Save AI Response
        ConversationService.addAssistantMessage(
            conversation,
            answer
        );

        ConversationService.save(
            conversation
        );

        // Step 8 - Return Response
        return {

            success: true,

            conversationId:
                conversation.id,

            reply: answer

        };

    }
}

export default new AIService();