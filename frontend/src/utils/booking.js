export const WA_URL =
  "https://wa.me/919989640090?text=Hi%20Naina%2C%20I%20found%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20booking%20a%20session.";

export function trackWhatsApp(section) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "whatsapp_click", {
    page: window.location.pathname,
    section,
  });
}
