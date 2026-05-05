import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import BookingDialog from "../../src/components/BookingDialog";
import JsonLd from "../../src/components/JsonLd";
import { getSortedPostsData } from "../../lib/posts";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

/** Format "2026-04-18" → "18 April 2026" */
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex({ allPostsData }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookClick = useCallback(() => setBookingOpen(true), []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Reflections — The Butterfly Effect",
    description:
      "Thoughts on therapy, patterns, and the quiet work of understanding yourself — by Naina Agarwal, Counselling Psychologist.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "Naina Agarwal",
      url: `${SITE_URL}/#about`,
    },
    blogPost: allPostsData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Naina Agarwal",
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Reflections — The Butterfly Effect</title>
        <meta
          name="description"
          content="Thoughts on therapy, patterns, and the quiet work of understanding yourself — by Naina Agarwal, Counselling Psychologist."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />

        {/* Open Graph */}
        <meta property="og:title" content="Reflections — The Butterfly Effect" />
        <meta
          property="og:description"
          content="Thoughts on therapy, patterns, and the quiet work of understanding yourself."
        />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Reflections&sub=Writing+by+Naina+Agarwal`}
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Reflections&sub=Writing+by+Naina+Agarwal`}
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Reflections — The Butterfly Effect" />
        <meta
          name="twitter:description"
          content="Thoughts on therapy, patterns, and the quiet work of understanding yourself."
        />

        {/* JSON-LD */}
        <JsonLd data={blogSchema} />
      </Head>

      <div style={{ minHeight: "100vh", backgroundColor: "var(--tbe-cream)", overflowX: "hidden" }}>
        <Navbar onBookClick={handleBookClick} visible={true} />

        {/* Hero strip */}
        <section
          className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,231,209,0) 0%, rgba(243,231,209,0.6) 100%)",
          }}
        >
          {/* Soft ambient blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 60% 30%, rgba(221,154,137,0.22), transparent 65%)",
            }}
          />
          <div className="relative max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="eyebrow mb-6"
            >
              Writing
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
                marginBottom: "1.25rem",
              }}
            >
              Reflections
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "1.2rem",
                color: "var(--tbe-dark-brown)",
                opacity: 0.72,
                maxWidth: "36rem",
                lineHeight: 1.7,
              }}
            >
              Thoughts on therapy, patterns, and the quiet work of understanding yourself.
            </motion.p>
          </div>
        </section>

        {/* Post list */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-32">
          <div
            className="w-full mb-16"
            style={{ height: "1px", background: "rgba(47,35,35,0.14)" }}
          />

          <ul className="space-y-16 list-none p-0">
            {allPostsData.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 * i + 0.5, ease: "easeOut" }}
              >
                <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: "none" }}>
                  <p
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: "0.78rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--tbe-warm-brown)",
                      opacity: 0.75,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {formatDate(post.date)}
                  </p>

                  <h2
                    className="font-display group-hover:underline underline-offset-4"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                      color: "var(--tbe-dark-brown)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      marginBottom: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: "1.1rem",
                      color: "var(--tbe-dark-brown)",
                      opacity: 0.7,
                      lineHeight: 1.7,
                      maxWidth: "34rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <span
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--tbe-deep-maroon)",
                      opacity: 0.85,
                    }}
                  >
                    Read →
                  </span>
                </Link>

                {/* Divider — skip after last item */}
                {i < allPostsData.length - 1 && (
                  <div
                    className="mt-16"
                    style={{ height: "1px", background: "rgba(47,35,35,0.1)" }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </section>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
