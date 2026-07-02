import { WebsiteContent } from "@/types/WebsiteContent";
import WebsiteCache from "../../types/WebsiteCache";
import FirestoreRepository from "./FirestoreRepository";

class WebsiteContentService {

    async getWebsiteContent(
        websiteId: string
    ): Promise<WebsiteContent> {

        // const cached = WebsiteCache.get(websiteId);

        // if (cached) {

        //     console.log("✅ Loaded from Cache");

        //     return cached;

        // }
        WebsiteCache.clear();

        console.log("🗑 Cache Cleared");

        console.log("🔥 Loading from Firestore");

        const website =
            await FirestoreRepository.getWebsiteContent(
                websiteId
            );

        WebsiteCache.set(
            websiteId,
            website
        );

        return website;

    }

}

export default new WebsiteContentService();