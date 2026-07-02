import AIService from "@/services/ai/AIService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {

        const body = await request.json();

        if (!body.websiteId || !body.message) {

            return NextResponse.json(
                {
                    success: false,
                    error: "websiteId and message are required."
                },
                {
                    status: 400
                }
            );

        }

        const result = await AIService.chat(body);

        return NextResponse.json(result);

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                success: false,
                error: "Something went wrong."
            },
            {
                status: 500
            }
        );
    }
}