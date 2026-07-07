"use client";

import Link from "next/link";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <h2>AI Admin</h2>

            <Link href="/admin">
                Dashboard
            </Link>

            <Link href="/admin/pages">
                Pages
            </Link>

            <Link href="/admin/settings">
                Settings
            </Link>

            <Link href="/admin/prompts">
                Prompt
            </Link>

            <Link href="/admin/analytics">
                Analytics
            </Link>

            <Link href="/admin/conversations">
                Conversations
            </Link>

        </aside>

    );

}