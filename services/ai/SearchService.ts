import { SearchResult } from "@/types/SearchResult";
import { WebsiteContent } from "@/types/WebsiteContent";

class SearchService {

    private synonyms: Record<string, string[]> = {

        phone: [
            "phone",
            "telephone",
            "mobile",
            "contact",
            "call",
            "helpline"
        ],

        email: [
            "email",
            "mail",
            "e-mail"
        ],

        address: [
            "address",
            "office",
            "location",
            "head office"
        ],

        services: [
            "service",
            "services",
            "solution",
            "solutions"
        ]

    };

    private stopWords = [
        "what",
        "is",
        "are",
        "the",
        "a",
        "an",
        "do",
        "does",
        "your",
        "you",
        "of",
        "for",
        "to",
        "in",
        "on",
        "can",
        "i",
        "me",
        "my"
    ];

    search(
        website: WebsiteContent,
        question: string
    ): SearchResult[] {

        const keywords = question
            .toLowerCase()
            .replace(/[^\w\s]/g, " ")
            .split(/\s+/)
            .filter(word =>
                word.length > 2 &&
                !this.stopWords.includes(word)
            );

        const results: SearchResult[] = [];

        for (const page of website.pages) {

            for (const section of page.sections) {

                const originalText = section.content
                    .map(item => {

                        if (item.text)
                            return item.text;

                        if (item.items)
                            return item.items.join(" ");

                        return "";

                    })
                    .join(" ");

                const searchableText = `
                    ${page.title}
                    ${section.title}
                    ${originalText}
                    `
                    .toLowerCase();

                let score = 0;

                for (const keyword of keywords) {

                    const words = this.synonyms[keyword] ?? [keyword];

                    for (const word of words) {

                        if (searchableText.includes(word)) {

                            score++;

                            break;

                        }

                    }

                }

                if (score > 0) {

                    results.push({

                        page: page.title,

                        section: section.title,

                        score,

                        text: originalText

                    });

                }

            }

        }

        results.sort((a, b) => b.score - a.score);

        return results.slice(0, 5);

    }

}

export default new SearchService();