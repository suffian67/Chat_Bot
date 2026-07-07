"use client";

import ChatConfig from "@/config/widget.config";
import ChatLauncher from "./ChatLauncher";
import useWidgetConfig from "@/lib/widget/useWidgetConfig";

export default function WidgetLoader() {

    const config = useWidgetConfig();

    if (!config)
        return null;

    return (

        <ChatLauncher
            websiteId={ChatConfig.websiteId}
        />

    );

}