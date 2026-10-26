import "../src/index.css";
import "../src/App.css";
import Script from "next/script";
import { ebGaramond, caveat } from "../lib/fonts";

// GA4 — replace "GA_MEASUREMENT_ID" with your real Measurement ID (format: G-XXXXXXXXXX).
// Find it: Google Analytics → Admin → Data Streams → your web stream → Measurement ID.
// Tracking fires on every WhatsApp click once the real ID is in place.
const GA_ID = "GA_MEASUREMENT_ID"; // ← your ID here

export default function App({ Component, pageProps }) {
  const gaEnabled = GA_ID !== "GA_MEASUREMENT_ID";
  return (
    <>
      {gaEnabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${GA_ID}');
          `}</Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

// Export fonts so _document.js can apply the variable classes to <Html>
export { ebGaramond, caveat };
