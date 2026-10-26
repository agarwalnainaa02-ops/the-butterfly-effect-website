import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import BookingDialog from "../../../src/components/BookingDialog";
import JsonLd from "../../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

export default function TopicHub({ topic }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookClick = useCallback(() => setBookingOpen(true), []);

  const allPosts = topic.groups.flatMap((g) => g.posts);

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic.pageTitle,
    description: topic.metaDescription,
    url: topic.canonical,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: "Naina Agarwal",
      jobTitle: "Mental Health Practitioner",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "The Butterfly Effect",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allPosts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: topic.pageTitle, item: topic.canonical },
    ],
  };

  return (
    <>
      <Head>
        <title>{topic.seoTitle}</title>
        <meta name="description" content={topic.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={topic.canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={topic.seoTitle} />
        <meta property="og:description" content={topic.metaDescription} />
        <meta property="og:url" content={topic.canonical} />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=${encodeURIComponent(topic.pageTitle)}`}
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=${encodeURIComponent(topic.pageTitle)}`}
        />
        <meta name="twitter:title" content={topic.seoTitle} />
        <meta name="twitter:description" content={topic.metaDescription} />

        <JsonLd data={collectionPageSchema} />
        <JsonLd data={breadcrumbSchema} />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--tbe-cream)",
          overflowX: "hidden",
        }}
      >
        <Navbar onBookClick={handleBookClick} visible={true} />

        {/* Hero */}
        <section
          className="relative pt-40 pb-16 px-6 md:px-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,231,209,0) 0%, rgba(243,231,209,0.6) 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 60% 30%, rgba(221,154,137,0.18), transparent 65%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <Link
              href="/blog"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.14em",
                color: "var(--tbe-warm-brown)",
                opacity: 0.72,
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "2.25rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.72"; }}
            >
              ← All reflections
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="eyebrow mb-6"
            >
              Topic
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "var(--tbe-dark-brown)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              {topic.pageTitle}
            </motion.h1>
            {topic.introParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.65 + i * 0.12 }}
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "1.2rem",
                  color: "var(--tbe-dark-brown)",
                  opacity: 0.75,
                  lineHeight: 1.75,
                  maxWidth: "42rem",
                  marginBottom: "1rem",
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Post groups */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-12">
          <div
            className="w-full mb-16"
            style={{ height: "1px", background: "rgba(47,35,35,0.14)" }}
          />

          <div className="space-y-20">
            {topic.groups.map((group, gi) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, delay: gi * 0.08 }}
              >
                <h2
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--tbe-warm-brown)",
                    opacity: 0.7,
                    marginBottom: group.note ? "0.5rem" : "1.5rem",
                  }}
                >
                  {group.heading}
                </h2>
                {group.note && (
                  <p
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: "0.9rem",
                      color: "var(--tbe-dark-brown)",
                      opacity: 0.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {group.note}
                  </p>
                )}

                <ul className="list-none p-0 m-0 space-y-0">
                  {group.posts.map((post, pi) => (
                    <li
                      key={post.slug}
                      style={{
                        borderTop: pi === 0 ? "1px solid rgba(47,35,35,0.12)" : "none",
                        borderBottom: "1px solid rgba(47,35,35,0.12)",
                      }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block py-6"
                        style={{ textDecoration: "none" }}
                      >
                        <h3
                          className="font-display group-hover:underline underline-offset-4"
                          style={{
                            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                            color: "var(--tbe-dark-brown)",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.25,
                            marginBottom: "0.4rem",
                            textDecoration: "none",
                          }}
                        >
                          {post.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'EB Garamond', serif",
                            fontSize: "1rem",
                            color: "var(--tbe-dark-brown)",
                            opacity: 0.65,
                            lineHeight: 1.6,
                            marginBottom: 0,
                          }}
                        >
                          {post.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking block */}
        <section
          className="max-w-3xl mx-auto px-6 md:px-12 py-16 mb-4"
          style={{ borderTop: "1px solid rgba(47,35,35,0.12)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
          >
            <p
              className="font-hand text-2xl md:text-3xl mb-5"
              style={{ color: "var(--tbe-warm-brown)", opacity: 0.82 }}
            >
              something resonated?
            </p>
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "1.05rem",
                color: "var(--tbe-dark-brown)",
                opacity: 0.72,
                lineHeight: 1.75,
                maxWidth: "36rem",
                marginBottom: "1.5rem",
              }}
            >
              15-minute intro call, free. Online sessions in Hindi and English.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(`topic-${topic.slug}`)}
              className="btn-primary"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Book via WhatsApp →
            </a>
          </motion.div>
        </section>

        {/* Scope note */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-32">
          <p
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.82rem",
              color: "var(--tbe-dark-brown)",
              opacity: 0.5,
              lineHeight: 1.7,
            }}
          >
            I work with concerns within my scope of practice. If you need a
            different level of support, I'll help you explore appropriate
            options. If you're in immediate danger in India, call 112.
          </p>
        </div>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { topics } = await import("../../../data/topics");
  return {
    paths: topics
      .filter((t) => t.groups.flatMap((g) => g.posts).length > 0)
      .map((t) => ({ params: { slug: t.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { getTopicBySlug } = await import("../../../data/topics");
  const topic = getTopicBySlug(params.slug);
  if (!topic) return { notFound: true };
  return { props: { topic } };
}
