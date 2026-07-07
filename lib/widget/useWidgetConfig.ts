"use client";

import { useEffect, useState } from "react";
import WidgetApi from "@/services/api/WidgetApi";

export default function useWidgetConfig() {

    const [config, setConfig] = useState<any>(null);

    useEffect(() => {

        WidgetApi
            .getConfig()
            .then(result => setConfig(result.config));

    }, []);

    return config;

}