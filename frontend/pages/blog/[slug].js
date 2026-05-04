import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import BookingDialog from "../../src/components/BookingDialog";
import JsonLd from "../../src/components/JsonLd";
import { getAllPostSlugs, getPostData } from "../../lib/posts";

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

export default function BlogPost({ postData }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookClick = useCallback(() => setBookingOpen(true), []);

  const postUrl = `${SITE_URL}/blog/${postData.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postData.title,
    description: postData.excerpt,
    datePublished: postData.date,
    dateModified: postData.date,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: "Naina Agarwal",
      jobTitle: "Counselling Psychologist",
      url: `${SITE_URL}/#about`,
    },
    publisher: {
      "@type": "Organization",
      name: "The Butterfly Effect",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <Head>
        <title>{postData.title} — The Butterfly Effect</title>
        <meta name="description" content={postData.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph — article */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${postData.title} — The Butterfly Effect`} />
        <meta property="og:description" content={postData.excerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="article:published_time" content={postData.date} />
        <meta property="article:author" content="Naina Agarwal" />

        {/* Twitter */}
        <meta name="twitter:title" content={`${postData.title} — The Butterfly Effect`} />
        <meta name="twitter:description" content={postData.excerpt} />

        {/* JSON-LD */}
        <JsonLd data={blogPostingSchema} />
      </Head>

      <div style={{ minHeight: "100vh", backgroundColor: "var(--tbe-cream)", overflowX: "hidden" }}>
        <Navbar onBookClick={handleBookClick} visible={true} />

        <article className="max-w-2xl mx-auto px-6 md:px-8 pt-40 pb-32">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/blog"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.82rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--tbe-warm-brown)",
                opacity: 0.72,
                textDecoration: "none",
              }}
            >
              ← All Posts
            </Link>
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--tbe-warm-brown)",
              opacity: 0.72,
              marginBottom: "1rem",
            }}
          >
            {formatDate(postData.date)}
          </motion.p>

          {/* Title — h1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--tbe-dark-brown)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.75rem",
            }}
          >
            {postData.title}
          </motion.h1>

          {/* Excerpt / standfirst */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="font-display italic"
            style={{
              fontSize: "1.25rem",
              color: "var(--tbe-warm-brown)",
              opacity: 0.82,
              lineHeight: 1.55,
              marginBottom: "2.5rem",
            }}
          >
            {postData.excerpt}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              height: "1px",
              background: "rgba(47,35,35,0.18)",
              marginBottom: "2.5rem",
              transformOrigin: "left",
            }}
          />

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55 }}
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {/* Footer call-to-action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-20 pt-10"
            style={{ borderTop: "1px solid rgba(47,35,35,0.14)" }}
          >
            <p
              className="font-hand text-2xl md:text-3xl mb-6"
              style={{ color: "var(--tbe-warm-brown)", opacity: 0.82 }}
            >
              something resonated?
            </p>
            <button
              onClick={handleBookClick}
              className="btn-primary"
            >
              Book a Session →
            </button>
          </motion.div>
        </article>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: { postData },
  };
}
