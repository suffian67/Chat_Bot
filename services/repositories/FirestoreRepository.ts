import { db } from "@/services/firebase/firebase";
import { WebsiteContent, WebsitePage, WebsiteSection } from "@/types/WebsiteContent";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

class FirestoreRepository {

    async getWebsiteContent(
        websiteId: string
    ): Promise<WebsiteContent> {

        // websiteId is reserved for future multi-website support.
        // Currently each deployment uses one Firebase project.

        const pagesSnapshot = await getDocs(
            collection(db, "pages")
        );

        console.log("Pages found:", pagesSnapshot.size);

        const pages: WebsitePage[] = [];

        for (const pageDoc of pagesSnapshot.docs) {

            const pageData = pageDoc.data();

            const sectionsSnapshot = await getDocs(
                query(
                    collection(
                        db,
                        "pages",
                        pageDoc.id,
                        "sections"
                    ),
                    orderBy("order")
                )
            );

            const sections: WebsiteSection[] =
                sectionsSnapshot.docs.map(sectionDoc => {

                    const data = sectionDoc.data();

                    return {

                        id: sectionDoc.id,

                        title: data.title ?? "",

                        order: data.order ?? 0,

                        content: data.content ?? []

                    };

                });

            pages.push({

                id: pageDoc.id,

                title: pageData.title ?? "",

                slug: pageData.slug ?? "",

                sections

            });

        }

        return {

            pages

        };

    }

}

export default new FirestoreRepository();