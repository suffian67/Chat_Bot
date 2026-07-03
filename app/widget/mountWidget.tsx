import { createRoot } from "react-dom/client";
import Widget from "./Widget";

export function mountWidget(
    element: HTMLElement,
    websiteId: string
) {

    createRoot(element).render(

        <Widget
            websiteId={websiteId}
        />

    );

}