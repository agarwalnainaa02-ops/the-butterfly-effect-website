import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const faqs = [
  {
    q: "What happens in the first session?",
    a: "Mostly we just meet. I'll ask what brings you here, and we'll go at whatever pace feels manageable. You don't have to explain everything at once — or at all, if something isn't ready yet.",
  },
  {
    q: "What if I don't know what to talk about?",
    a: "That's more common than you'd think. We can start with what brought you here, or just how your week has been. You don't need a topic or the right words. We'll find where to begin together.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. Details of your sessions are confidential, and the few limits to that, such as serious risk of harm or a legal requirement, are explained in the consent form you'll receive before we begin. We'll go through it together.",
  },
  {
    q: "How often should we meet?",
    a: "We decide together based on what you need and what's manageable. Many people start weekly or every two weeks, then adjust.",
  },
  {
    q: "What if things feel more intense in therapy?",
    a: "Sometimes they do. Looking at hard things can stir them up before they settle. We go at your pace, and you can always ask to slow down or pause. Counselling isn't an emergency service, so if you're ever in immediate danger, call 112 or a crisis helpline.",
  },
  {
    q: "What if it's not the right fit?",
    a: "That's okay. The free 15-minute intro call is there for exactly this. You can also pause or end at any point, ideally after talking it through, and I'm happy to point you to other support.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

const FaqItem = ({ q, a, index, open, onToggle }) => (
  <div className="border-t" style={{ borderColor: "rgba(47, 35, 35, 0.14)" }}>
    <button
      onClick={onToggle}
      className="w-full text-left flex items-start justify-between gap-8 py-8 md:py-10"
      aria-expanded={open}
      aria-controls={`faq-ans-${index}`}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      <h2
        className="font-display text-xl md:text-2xl leading-snug pr-6 transition-colors duration-500"
        style={{ color: open ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
      >
        {q}
      </h2>
      <span
        className="font-display text-2xl shrink-0"
        style={{
          color: "var(--tbe-warm-brown)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 700ms ease",
          display: "block",
        }}
        aria-hidden="true"
      >
        +
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="content"
          id={`faq-ans-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p
            className="pb-10 max-w-3xl text-lg leading-relaxed"
            style={{ color: "var(--tbe-dark-brown)", opacity: 0.88 }}
          >
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <Head>
        <title>FAQ | Online Therapy &amp; Counselling | Naina Agarwal</title>
        <meta
          name="description"
          content="Answers to common questions about online therapy and counselling: first sessions, confidentiality, how often to meet, and finding the right fit."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/faq`} />
        <meta property="og:title" content="FAQ | Online Therapy & Counselling | Naina Agarwal" />
        <meta
          property="og:description"
          content="Answers to common questions about online therapy and counselling: first sessions, confidentiality, how often to meet, and finding the right fit."
        />
        <meta property="og:url" content={`${SITE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=FAQ&sub=Online+Therapy+%26+Counselling`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Online Therapy & Counselling | Naina Agarwal" />
        <meta
          name="twitter:description"
          content="Answers to common questions about online therapy and counselling: first sessions, confidentiality, how often to meet, and finding the right fit."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=FAQ&sub=Online+Therapy+%26+Counselling`}
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
              transition={{ duration: 1.2, delay: 0.3 }}
              className="eyebrow mb-8"
            >
              Mental Health Practitioner — Naina Agarwal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.55 }}
              className="h-display"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Questions people ask
            </motion.h1>
          </section>

          {/* ── Accordion ── */}
          <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="border-b" style={{ borderColor: "rgba(47, 35, 35, 0.14)" }}>
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  index={i}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </section>

          {/* ── Booking CTA ── */}
          <section className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-12">
            <div className="flex flex-col items-start gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("faq")}
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Book a Session →
              </a>
              <p
                className="text-sm"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: "var(--tbe-dark-brown)",
                  opacity: 0.55,
                  letterSpacing: "0.03em",
                }}
              >
                No pressure. Just a message to begin.
              </p>
            </div>
          </section>

          {/* ── Emergency disclaimer ── */}
          <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <p
              className="text-sm"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.5,
                letterSpacing: "0.02em",
              }}
            >
              Counselling is not an emergency service. If you are in immediate danger, call 112.
            </p>
          </div>
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
