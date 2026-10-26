import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import HowIWork from "../src/components/HowIWork";
import WhatToExpect from "../src/components/WhatToExpect";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "How I Work", item: `${SITE_URL}/how-i-work` },
  ],
};

export default function HowIWorkPage() {
  return (
    <>
      <Head>
        <title>How I Work | Online Therapy &amp; Counselling in India</title>
        <meta
          name="description"
          content="An eclectic, person-centred approach to online counselling. Learn what sessions are like and what to expect with Naina Agarwal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/how-i-work`} />
        <meta property="og:title" content="How I Work | Online Therapy & Counselling in India" />
        <meta
          property="og:description"
          content="An eclectic, person-centred approach to online counselling. Learn what sessions are like and what to expect with Naina Agarwal."
        />
        <meta property="og:url" content={`${SITE_URL}/how-i-work`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=How+I+Work&sub=Online+Therapy+%26+Counselling`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How I Work | Online Therapy & Counselling in India" />
        <meta
          name="twitter:description"
          content="An eclectic, person-centred approach to online counselling. Learn what sessions are like and what to expect with Naina Agarwal."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=How+I+Work&sub=Online+Therapy+%26+Counselling`}
        />
        <JsonLd data={breadcrumb} />
      </Head>

      <div className="App">
        <Navbar visible={true} />

        <main id="main-content">
          {/* ── Page header ── */}
          <section className="max-w-5xl mx-auto px-6 md:px-12 pt-40 md:pt-52 pb-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="eyebrow-body mb-8"
            >
              Mental Health Practitioner — Naina Agarwal
            </motion.p>
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="h-display"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              How I work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.75,
                marginTop: "1.5rem",
              }}
            >
              If you&rsquo;re working through difficulties in relationships specifically,
              there&rsquo;s a{" "}
              <Link
                href="/therapy-for-relationship-issues"
                style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "3px" }}
              >
                dedicated page on therapy for relationship issues
              </Link>
              .
            </motion.p>
          </section>

          {/* ── Full HowIWork section ── */}
          <HowIWork />

          {/* ── Full WhatToExpect section ── */}
          <WhatToExpect />
        </main>

        <Footer />
        <StickyWhatsApp />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
