    (function () {

        if (window.AIChatWidgetLoaded)
            return;

        window.AIChatWidgetLoaded = true;

        const script = document.currentScript;

        const baseUrl = new URL(script.src).origin;

        // -------------------------
        // Launcher
        // -------------------------

        const launcher = document.createElement("button");

        launcher.innerHTML = "💬";

        launcher.style.position = "fixed";
        launcher.style.right = "24px";
        launcher.style.bottom = "24px";

        launcher.style.width = "64px";
        launcher.style.height = "64px";

        launcher.style.border = "none";
        launcher.style.borderRadius = "50%";

        launcher.style.cursor = "pointer";

        launcher.style.background = "#2563eb";

        launcher.style.color = "white";

        launcher.style.fontSize = "28px";

        launcher.style.boxShadow =
            "0 12px 30px rgba(0,0,0,.25)";

        launcher.style.zIndex = "999999";

        document.body.appendChild(launcher);

        // -------------------------
        // iframe
        // -------------------------

        const iframe = document.createElement("iframe");

        iframe.src = `${baseUrl}/embed`;

        iframe.style.position = "fixed";

        iframe.style.right = "24px";

        iframe.style.bottom = "100px";

        iframe.style.width = "420px";

        iframe.style.height = "min(700px, calc(100vh - 48px))";

        iframe.style.background = "transparent";
        iframe.setAttribute("scrolling", "no");

        iframe.style.border = "none";

        iframe.style.borderRadius = "20px";

        iframe.style.boxShadow =
            "0 20px 60px rgba(0,0,0,.25)";

        iframe.style.display = "none";

        iframe.style.zIndex = "999998";

        document.body.appendChild(iframe);

        // -------------------------
        // Toggle
        // -------------------------

        launcher.onclick = () => {

            iframe.style.display =
                iframe.style.display === "none"
                    ? "block"
                    : "none";

        };

        // -------------------------
        // Close Message
        // -------------------------

        window.addEventListener("message", event => {

            if (
                event.data?.type ===
                "AI_WIDGET_CLOSE"
            ) {

                iframe.style.display = "none";

            }

        });

    })();