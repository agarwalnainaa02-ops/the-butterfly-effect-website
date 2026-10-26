import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import LogoEntrance from "../src/components/LogoEntrance";
import Navbar from "../src/components/Navbar";
import ButterflyDrift from "../src/components/ButterflyDrift";
import Hero from "../src/components/Hero";
import WhoThisIsFor from "../src/components/WhoThisIsFor";
import AreasOfWork from "../src/components/AreasOfWork";
import InstagramFeed from "../src/components/InstagramFeed";
import FinalCTA from "../src/components/FinalCTA";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../src/utils/booking";
import { getSortedPostsData } from "../lib/posts";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Butterfly Effect",
  url: SITE_URL,
  description:
    "Online therapy and counselling in India by Naina Agarwal, Mental Health Practitioner.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Butterfly Effect",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Online therapy and counselling in India. Working with anxiety, emotional patterns, relationships, self-worth, and identity. Sessions held via video call.",
  telephone: "+919989640090",
  email: "agarwalnainaa02@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Online Counselling",
  priceRange: "₹₹",
  sameAs: ["https://www.instagram.com/thebutterflyeffect_with.nainaa"],
  founder: {
    "@type": "Person",
    name: "Naina Agarwal",
    jobTitle: "Mental Health Practitioner",
    description:
      "Hyderabad-based mental health practitioner offering online therapy and counselling across India.",
    url: `${SITE_URL}/about`,
    sameAs: ["https://www.instagram.com/thebutterflyeffect_with.nainaa"],
  },
};

/** Format "2026-04-18" → "18 April 2026" */
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const principles = [
  {
    title: "Curious before directive",
    body: "I tend to ask about the pattern before I name it.",
  },
  {
    title: "Integrative, not fixed",
    body: "CBT, DBT, ACT and IFS-informed. Session to session.",
  },
  {
    title: "Person-centred at the core",
    body: "You are the expert on your own experience.",
  },
];

export default function Home({ latestPosts }) {
  const [introDone, setIntroDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("tbe-intro-played") === "1") {
      setIntroDone(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [introDone]);

  /* Redirect old anchor bookmarks to their new pages */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    const redirects = {
      "#about": "/about",
      "#approach": "/how-i-work",
      "#expect": "/fees-and-booking",
      "#faq": "/faq",
    };
    const target = redirects[hash];
    if (target) router.replace(target);
  }, []);

  return (
    <>
      <Head>
        <title>Online Therapist in India | Naina Agarwal, Counsellor</title>
        <meta
          name="description"
          content="Online therapist &amp; counsellor in India, based in Hyderabad. Support for anxiety, overthinking, relationships and burnout. Book on WhatsApp."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:title" content="Online Therapist in India | Naina Agarwal, Counsellor" />
        <meta
          property="og:description"
          content="Online therapist &amp; counsellor in India, based in Hyderabad. Support for anxiety, overthinking, relationships and burnout. Book on WhatsApp."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Therapy+that+follows+you%2C+not+a+script.`}
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Therapy+that+follows+you%2C+not+a+script.`}
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Online Therapist in India | Naina Agarwal, Counsellor" />
        <meta
          name="twitter:description"
          content="Online therapist &amp; counsellor in India, based in Hyderabad. Support for anxiety, overthinking, relationships and burnout. Book on WhatsApp."
        />

        {/* JSON-LD */}
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
      </Head>

      <div className="App" data-testid="tbe-home">
        <LogoEntrance onComplete={handleIntroComplete} />
        <Navbar visible={introDone} />
        <ButterflyDrift />

        <main id="main-content">
          {/* ── Hero ── */}
          <Hero />

          {/* ── Who this is for ── */}
          <WhoThisIsFor />

          {/* ── What we cover (Areas of Work) ── */}
          <AreasOfWork />

          {/* ── How I work teaser ── */}
          <section
            id="approach"
            className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(47,35,35,0.08)" }}
          >
            <div className="grid grid-cols-12 gap-y-10 md:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2 }}
                className="col-span-12 md:col-span-4"
              >
                <p className="eyebrow mb-6">How I work</p>
                <h2
                  className="h-display"
                  style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
                >
                  Integrative.{" "}
                  <em style={{ color: "var(--tbe-warm-brown)" }}>Person-centred.</em>
                </h2>
                <Link
                  href="/how-i-work"
                  className="mt-8 inline-block text-sm tracking-[0.28em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "var(--tbe-warm-brown)",
                    borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  Read more about how I work ↓
                </Link>
              </motion.div>

              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <ul className="space-y-0 list-none p-0" style={{ borderTop: "1px solid rgba(47,35,35,0.14)" }}>
                  {principles.map((p, i) => (
                    <motion.li
                      key={p.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.9, delay: i * 0.1 }}
                      className="flex items-start gap-6 py-6"
                      style={{ borderBottom: "1px solid rgba(47,35,35,0.14)" }}
                    >
                      <span
                        className="font-display italic shrink-0"
                        style={{ color: "var(--tbe-dusty-coral)", fontSize: "1.2rem", minWidth: "2rem" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p
                          className="font-display text-lg md:text-xl"
                          style={{ color: "var(--tbe-dark-wine)" }}
                        >
                          {p.title}
                        </p>
                        <p
                          className="mt-1 text-base leading-relaxed"
                          style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-dark-brown)", opacity: 0.75 }}
                        >
                          {p.body}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── About Naina teaser ── */}
          <section
            id="about"
            className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(47,35,35,0.08)" }}
          >
            <div className="grid grid-cols-12 gap-y-10 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2 }}
                className="col-span-12 md:col-span-7"
              >
                <p className="eyebrow mb-8">About Naina</p>
                <h2
                  className="h-display mb-8"
                  style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
                >
                  The therapist{" "}
                  <em style={{ color: "var(--tbe-warm-brown)" }}>and the person.</em>
                </h2>
                <p
                  className="text-lg md:text-xl leading-relaxed max-w-2xl"
                  style={{ color: "var(--tbe-dark-brown)", opacity: 0.88 }}
                >
                  I didn't come to psychology to help people. I came because I couldn't stop
                  trying to understand them — not in a detached, analytical way. In a
                  can't-stop-thinking-about-it way.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 items-start">
                  <div>
                    <p className="eyebrow mb-2">Education</p>
                    <p
                      className="font-display text-base md:text-lg"
                      style={{ color: "var(--tbe-dark-wine)", marginBottom: "0.3rem" }}
                    >
                      BA Psychology, St. Francis College for Women
                    </p>
                    <p className="font-display text-base md:text-lg" style={{ color: "var(--tbe-dark-wine)" }}>
                      MSc Psychology, Jain University
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-block text-sm tracking-[0.28em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "var(--tbe-warm-brown)",
                    borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  More about Naina ↓
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ── Fees / sessions summary ── */}
          <section
            id="expect"
            className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
            style={{ borderTop: "1px solid rgba(47,35,35,0.08)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
              className="max-w-3xl"
            >
              <p className="eyebrow mb-8">Sessions</p>
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
              >
                Simple, transparent,{" "}
                <em style={{ color: "var(--tbe-warm-brown)" }}>no surprises.</em>
              </h2>

              <dl className="space-y-0">
                {[
                  { k: "Fee", v: "From ₹1,000 per session" },
                  { k: "Intro call", v: "Free 15-minute intro call" },
                  { k: "Languages", v: "Hindi and English" },
                  { k: "Format", v: "Online video call, across India" },
                ].map((f) => (
                  <div
                    key={f.k}
                    className="flex gap-8 py-5 items-baseline"
                    style={{ borderTop: "1px solid rgba(47,35,35,0.12)" }}
                  >
                    <dt className="eyebrow-body w-32 shrink-0" style={{ opacity: 0.8 }}>{f.k}</dt>
                    <dd
                      className="font-display text-lg md:text-xl"
                      style={{ color: "var(--tbe-dark-wine)" }}
                    >
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/fees-and-booking"
                className="mt-10 inline-block text-sm tracking-[0.28em] uppercase transition-all duration-500"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: "var(--tbe-warm-brown)",
                  borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                See full fees and booking info ↓
              </Link>
            </motion.div>
          </section>

          {/* ── Latest reflections ── */}
          {latestPosts && latestPosts.length > 0 && (
            <section
              className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
              style={{ borderTop: "1px solid rgba(47,35,35,0.08)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2 }}
                className="mb-12"
              >
                <p className="eyebrow mb-6">Latest reflections</p>
                <h2
                  className="h-display"
                  style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
                >
                  From the blog
                </h2>
              </motion.div>

              <p style={{ marginBottom: "1.5rem" }}>
                <Link
                  href="/blog/topics/getting-married"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.18em",
                    color: "var(--tbe-warm-brown)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
                    paddingBottom: "2px",
                  }}
                >
                  Thinking about marriage? Start here →
                </Link>
              </p>

              <ul className="space-y-0 list-none p-0" style={{ borderTop: "1px solid rgba(47,35,35,0.14)" }}>
                {latestPosts.map((post, i) => (
                  <motion.li
                    key={post.slug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: i * 0.1 }}
                    style={{ borderBottom: "1px solid rgba(47,35,35,0.12)" }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 py-7 md:py-8"
                      style={{ textDecoration: "none" }}
                    >
                      <h3
                        className="font-display text-xl md:text-2xl group-hover:underline underline-offset-4 leading-snug"
                        style={{ color: "var(--tbe-dark-brown)" }}
                      >
                        {post.title}
                      </h3>
                      <span
                        className="shrink-0 text-sm tracking-[0.2em] uppercase"
                        style={{
                          fontFamily: "'EB Garamond', serif",
                          color: "var(--tbe-warm-brown)",
                          opacity: 0.7,
                        }}
                      >
                        {formatDate(post.date)}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/blog"
                  className="text-sm tracking-[0.28em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "var(--tbe-warm-brown)",
                    borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  All posts →
                </Link>
              </div>
            </section>
          )}

          {/* ── Instagram ── */}
          <InstagramFeed />

          {/* ── Closing booking CTA ── */}
          <FinalCTA />
        </main>

        <Footer />
        <StickyWhatsApp />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      latestPosts: allPostsData.slice(0, 3),
    },
  };
}
