import { Conversation } from "@/types/Conversation";
import MemoryConversationRepository from "../repositories/MemoryConversationRepository";
import { randomUUID } from "crypto";

class ConversationService {

    private readonly MAX_MESSAGES = 20;

    private readonly EXPIRY_TIME =
        30 * 60 * 1000;


    private trimConversation(
        conversation: Conversation
    ) {

        while (
            conversation.messages.length >
            this.MAX_MESSAGES
        ) {

            conversation.messages.shift();

        }

    }

    private cleanup(): void {

        const conversations =
            MemoryConversationRepository.getAll();

        const now = Date.now();

        for (const conversation of conversations) {

            const expired =
                now - conversation.lastActivity.getTime() >
                this.EXPIRY_TIME;

            if (expired) {

                MemoryConversationRepository.delete(
                    conversation.id
                );

                console.log(
                    `🗑 Conversation ${conversation.id} expired`
                );

            }

        }

    }

    getOrCreateConversation(
        websiteId: string,
        conversationId?: string
    ): Conversation {

        this.cleanup();

        if (conversationId) {

            const existing =
                MemoryConversationRepository.get(
                    conversationId
                );

            if (existing)
                return existing;

        }

        const conversation: Conversation = {

            id: randomUUID(),

            websiteId,

            messages: [],

            lastActivity: new Date()

        };

        MemoryConversationRepository.save(
            conversation
        );

        console.log(
            "Active Conversations:",
            MemoryConversationRepository.count()
        );

        return conversation;

    }

    addUserMessage(
        conversation: Conversation,
        message: string
    ) {

        conversation.messages.push({

            role: "user",

            content: message,

            createdAt: new Date()

        });

        conversation.lastActivity = new Date();

        this.trimConversation(conversation);

    }

    addAssistantMessage(
        conversation: Conversation,
        message: string
    ) {

        conversation.messages.push({

            role: "assistant",

            content: message,

            createdAt: new Date()

        });

        conversation.lastActivity = new Date();

        this.trimConversation(conversation);

    }

    save(
        conversation: Conversation
    ) {

        MemoryConversationRepository.save(
            conversation
        );

    }

}

export default new ConversationService();