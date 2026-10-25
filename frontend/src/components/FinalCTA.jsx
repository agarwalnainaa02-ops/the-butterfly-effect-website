import React from "react";
import { motion } from "framer-motion";
import Butterfly from "./Butterfly";
import { WA_URL, trackWhatsApp } from "../utils/booking";

const FinalCTA = () => {
  return (
    <section
      id="cta"
      data-testid="final-cta-section"
      className="relative py-40 md:py-56 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(243, 231, 209, 0) 0%, rgba(112, 36, 34, 0.18) 60%, rgba(73, 5, 12, 0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 animate-haze"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(221, 154, 137, 0.20), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="inline-block mb-12"
        >
          <Butterfly size={32} color="var(--tbe-deep-maroon)" className="animate-flutter-slow" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6 }}
          className="h-display"
          style={{
            fontSize: "clamp(1.9rem, 6vw, 5rem)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
          data-testid="final-cta-headline"
        >
          If you've been sitting with something
          <br />
          <em style={{ color: "var(--tbe-warm-brown)" }}>and you don't know where to start —</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto text-lg md:text-xl"
          style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
        >
          my DMs are open. So is the door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-14"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("final_cta")}
            className="btn-primary"
            data-testid="final-cta-book-btn"
            style={{ textDecoration: "none" }}
          >
            Book a Session →
          </a>
          <p
            className="text-sm mt-4"
            style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-dark-brown)", opacity: 0.55, letterSpacing: "0.03em" }}
          >
            No pressure. Just a message to begin.
          </p>
          <p
            className="font-hand text-2xl md:text-3xl mt-8"
            style={{ color: "var(--tbe-warm-brown)", opacity: 0.8 }}
          >
            you don't need the perfect words first.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
