import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const fees = [
  { k: "Fee", v: "Starting from ₹1,000 per session" },
  { k: "Intro call", v: "Free 15-minute intro call to see if we're a good fit" },
  { k: "Languages", v: "Hindi and English" },
  { k: "Format", v: "Online video call, across India" },
  { k: "Duration", v: "50–60 minutes" },
  { k: "Booking", v: "Message me on WhatsApp. After that, I'll share a short intake form." },
  {
    k: "Confidentiality",
    v: "A private, respectful space where your experiences are held with care. We'll go over how confidentiality works together in our first session.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fees & Booking",
      item: `${SITE_URL}/fees-and-booking`,
    },
  ],
};

export default function FeesAndBooking() {
  return (
    <>
      <Head>
        <title>Fees &amp; Booking | Online Therapy in India | Naina Agarwal</title>
        <meta
          name="description"
          content="Sessions start from ₹1,000. Free 15-minute intro call. Hindi and English, online across India. Book on WhatsApp."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/fees-and-booking`} />
        <meta property="og:title" content="Fees & Booking | Online Therapy in India | Naina Agarwal" />
        <meta
          property="og:description"
          content="Sessions start from ₹1,000. Free 15-minute intro call. Hindi and English, online across India. Book on WhatsApp."
        />
        <meta property="og:url" content={`${SITE_URL}/fees-and-booking`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Fees+%26+Booking&sub=Online+Therapy+in+India`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fees & Booking | Online Therapy in India | Naina Agarwal" />
        <meta
          name="twitter:description"
          content="Sessions start from ₹1,000. Free 15-minute intro call. Hindi and English, online across India. Book on WhatsApp."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Fees+%26+Booking&sub=Online+Therapy+in+India`}
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
              className="eyebrow mb-8"
            >
              Mental Health Practitioner — Naina Agarwal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="h-display"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Fees and booking
            </motion.h1>
          </section>

          {/* ── Sessions block ── */}
          <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="text-center mb-14">
              <p className="eyebrow mb-6">Online therapy and counselling sessions across India</p>
              <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)" }}>
                Simple, transparent, no surprises.
              </h2>
            </div>

            <dl>
              {fees.map((f, i) => (
                <motion.div
                  key={f.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-6 py-7 md:py-9 items-baseline"
                  style={{ borderTop: "1px solid rgba(47, 35, 35, 0.14)" }}
                >
                  <dt className="col-span-12 md:col-span-4 eyebrow" style={{ opacity: 0.85 }}>
                    {f.k}
                  </dt>
                  <dd className="col-span-12 md:col-span-8">
                    <span
                      className="font-display text-xl md:text-2xl"
                      style={{ color: "var(--tbe-dark-wine)" }}
                    >
                      {f.v}
                    </span>
                  </dd>
                </motion.div>
              ))}
            </dl>

            <p
              className="mt-8 text-base md:text-lg"
              style={{
                color: "var(--tbe-dark-brown)",
                opacity: 0.7,
                fontFamily: "'EB Garamond', serif",
              }}
            >
              I work with mild to moderate concerns. If you need psychiatric or crisis support,
              I'll help you find the right service.
            </p>

            <p
              className="mt-4 text-base"
              style={{
                color: "var(--tbe-dark-brown)",
                opacity: 0.6,
                fontFamily: "'EB Garamond', serif",
              }}
            >
              More about the approach:{" "}
              <Link
                href="/how-i-work"
                style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "3px" }}
              >
                How I work →
              </Link>
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="max-w-5xl mx-auto px-6 md:px-12 pb-10 md:pb-12">
            <div
              className="text-center flex flex-col items-center gap-4 py-12"
              style={{ borderTop: "1px solid rgba(47,35,35,0.1)" }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("fees_and_booking")}
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
              <p
                className="font-hand text-2xl mt-2"
                style={{ color: "var(--tbe-warm-brown)", opacity: 0.8 }}
              >
                you don't need the perfect words first.
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
