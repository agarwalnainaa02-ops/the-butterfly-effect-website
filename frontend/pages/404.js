import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import BookingDialog from "../src/components/BookingDialog";
import Butterfly from "../src/components/Butterfly";

export default function NotFound() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookClick = useCallback(() => setBookingOpen(true), []);

  return (
    <>
      <Head>
        <title>Page Not Found — The Butterfly Effect</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div style={{ minHeight: "100vh", backgroundColor: "var(--tbe-cream)", overflowX: "hidden" }}>
        <Navbar onBookClick={handleBookClick} visible={true} />

        <main
          className="flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: "80vh", paddingTop: "100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mb-10"
          >
            <Butterfly size={28} color="var(--tbe-warm-brown)" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.35 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              color: "var(--tbe-dark-wine)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            This page doesn't exist.
            <br />
            <em style={{ color: "var(--tbe-warm-brown)" }}>But you do.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "1.15rem",
              color: "var(--tbe-dark-brown)",
              opacity: 0.7,
              maxWidth: "28rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Whatever brought you here — the homepage is a good place to start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <Link href="/" className="btn-primary" style={{ textDecoration: "none" }}>
              Back to the homepage
            </Link>
            <Link
              href="/blog"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "var(--tbe-warm-brown)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(112,36,34,0.4)",
                paddingBottom: "2px",
              }}
            >
              Or read the blog →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.2 }}
            className="font-hand text-2xl mt-16"
            style={{ color: "var(--tbe-warm-brown)", opacity: 0.65 }}
          >
            getting lost is sometimes where things start.
          </motion.p>
        </main>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}
