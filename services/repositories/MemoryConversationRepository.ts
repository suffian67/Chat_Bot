import { Conversation } from "@/types/Conversation";

class MemoryConversationRepository {

    private conversations = new Map<string, Conversation>();

    get(conversationId: string): Conversation | undefined {

        return this.conversations.get(conversationId);

    }

    getAll(): Conversation[] {

        return Array.from(this.conversations.values());

    }

    save(conversation: Conversation): void {

        this.conversations.set(
            conversation.id,
            conversation
        );

    }

    delete(conversationId: string): void {

        this.conversations.delete(conversationId);

    }

    count(): number {

        return this.conversations.size;

    }

}

export default new MemoryConversationRepository();