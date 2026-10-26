import "../src/index.css";
import "../src/App.css";
import Script from "next/script";
import { ebGaramond } from "../lib/fonts";

const GA_ID = "G-TTV9EE7V1G";

export default function App({ Component, pageProps }) {
  const gaEnabled = process.env.NODE_ENV === "production";
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
export { ebGaramond };
