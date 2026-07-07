"use client";

import WidgetLoader from "../components/launcher/WidgetLoader";
import "@/app/styles/chat.css";
// import "../components/common/chat.css"

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <>
            {children}

            <WidgetLoader />

        </>

    );

}