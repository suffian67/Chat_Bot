"use client";

import ChatLauncher from "../components/widget/ChatLauncher";


interface Props {

    websiteId: string;

}

export default function Widget({
    websiteId
}: Props) {

    return (

        <ChatLauncher
            websiteId={websiteId}
        />

    );

}