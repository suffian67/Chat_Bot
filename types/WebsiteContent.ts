export interface WebsiteSection {
    id: string;
    title: string;
    order: number;
    content: any[];
}

export interface WebsitePage {
    id: string;
    title: string;
    slug: string;
    sections: WebsiteSection[];
}

export interface WebsiteContent {
    pages: WebsitePage[];
}