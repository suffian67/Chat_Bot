import { WebsiteContent } from "@/types/WebsiteContent";

interface CacheItem {

    data: WebsiteContent;

    cachedAt: number;

}

class WebsiteCache {

    private readonly CACHE_TTL_MS =
        Number(process.env.CACHE_TTL_MS) ||
        5 * 60 * 1000;

    private cache = new Map<string, CacheItem>();

    get(websiteId: string): WebsiteContent | null {

        const item = this.cache.get(websiteId);

        if (!item)
            return null;

        const expired =
            Date.now() - item.cachedAt > this.CACHE_TTL_MS;

        if (expired) {

            this.cache.delete(websiteId);

            return null;

        }

        return item.data;

    }

    set(
        websiteId: string,
        data: WebsiteContent
    ) {

        this.cache.set(websiteId, {

            data,

            cachedAt: Date.now()

        });

    }

    clear(websiteId?: string) {

        if (websiteId) {

            this.cache.delete(websiteId);

            return;

        }

        this.cache.clear();

    }

}

export default new WebsiteCache();