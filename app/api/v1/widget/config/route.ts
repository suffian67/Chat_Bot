import ChatConfig from "@/config/widget.config";
import ChatTheme from "@/config/widgetTheme";
import ChatWelcome from "@/config/widgetWelcome";
import { NextResponse } from "next/server";


export async function GET() {

    return NextResponse.json({

        success: true,

        config: {

            chat: ChatConfig,

            welcome: ChatWelcome,

            theme: ChatTheme

        }

    });

}