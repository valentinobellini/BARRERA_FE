export function loadGoogleAnalytics(measurementId) {
    if (typeof window === "undefined") return;
    if (!measurementId) return;
    if (window.__gaLoaded) return;

    window.__gaLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag =
        window.gtag ||
        function gtag() {
            window.dataLayer.push(arguments);
        };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);
}

