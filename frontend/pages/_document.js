import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />

        {/* Google Fonts — non-render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Caveat:wght@400;500&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Caveat:wght@400;500&display=swap"
          />
        </noscript>

        {/* Open Graph global defaults (page-level <Head> overrides per-property) */}
        <meta property="og:site_name" content="The Butterfly Effect" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.thebutterflyeffecttherapy.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="The Butterfly Effect — Therapy with Naina Agarwal" />

        {/* Twitter card defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.thebutterflyeffecttherapy.com/og-image.jpg" />
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
