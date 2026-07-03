import ChatWidgetProvider from "./providers/ChatWidgetProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ChatWidgetProvider>
                    {children}
                </ChatWidgetProvider>
            </body>
        </html>
    );
}