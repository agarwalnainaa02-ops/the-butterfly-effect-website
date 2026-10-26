import { Html, Head, Main, NextScript } from "next/document";
import { ebGaramond } from "../lib/fonts";

export default function Document() {
  return (
    <Html lang="en-IN" className={`${ebGaramond.variable}`}>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />

        {/* Open Graph global defaults — og:type and og:image are set per-page */}
        <meta property="og:site_name" content="The Butterfly Effect" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="The Butterfly Effect — Therapy with Naina Agarwal" />

        {/* Twitter card defaults — twitter:image is set per-page */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thebutterflyeffect_with.nainaa" />

        {/* General */}
        <meta name="author" content="Naina Agarwal" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f3e7d1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
