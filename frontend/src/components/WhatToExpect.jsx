import React, { useState } from "react";
import { motion } from "framer-motion";
import { WA_URL, trackWhatsApp } from "../utils/booking";

const coreExpectations = [
  { label: "Sessions", text: "50–60 minutes, online. You bring what you bring that week." },
  { label: "Pace", text: "We don't rush. Change is usually quieter than people expect." },
  { label: "Atmosphere", text: "No fixed script. No pressure to perform healing or arrive with tidy sentences." },
];

const whatCounts = {
  label: "What counts",
  text: "The first time you notice the urge before you act on it. Saying something honest and not immediately taking it back. Choosing rest without running a quiet justification in your head. That pause matters.",
};

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

const WhatToExpect = () => {
  const [countsOpen, setCountsOpen] = useState(false);

  return (
    <section
      id="expect"
      data-testid="what-to-expect-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="col-span-12 md:col-span-5"
        >
          <p className="eyebrow mb-8">What to expect</p>
          <h2
            className="h-display mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
            data-testid="expect-headline"
          >
            Some sessions are structured. Some are just two people sitting with something difficult
            <br />
            <em style={{ color: "var(--tbe-warm-brown)" }}>until it starts to make a little more sense.</em>
          </h2>
          <p className="text-lg" style={{ color: "var(--tbe-dark-brown)", opacity: 0.75 }}>
            Both matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="col-span-12 md:col-span-7"
        >
          {/* Core 3 items — always visible */}
          <ol className="relative list-none p-0 m-0" style={{ overflow: "hidden" }}>
            <div
              className="absolute left-[8px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(47,35,35,0.25), transparent)" }}
            />
            {coreExpectations.map((e, i) => (
              <motion.li
                key={e.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.0, delay: i * 0.12 }}
                className="relative pl-12 py-6"
                data-testid={`expect-item-${i}`}
              >
                <span
                  className="absolute left-0 top-[1.85rem] w-[18px] h-[18px] rounded-full"
                  style={{ background: "var(--tbe-cream)", border: "1px solid rgba(121, 2, 8, 0.55)" }}
                />
                <p className="eyebrow mb-1">{e.label}</p>
                <p className="font-display text-xl md:text-2xl leading-snug" style={{ color: "var(--tbe-dark-wine)" }}>
                  {e.text}
                </p>
              </motion.li>
            ))}
          </ol>

          {/* What counts — expandable */}
          <div
            className="relative pl-12"
            style={{ borderTop: "1px solid rgba(47,35,35,0.1)", paddingTop: "1.5rem" }}
            data-testid="expect-item-3"
          >
            <span
              className="absolute left-0 top-[1.85rem] w-[18px] h-[18px] rounded-full"
              style={{ background: "var(--tbe-cream)", border: "1px solid rgba(121, 2, 8, 0.35)" }}
            />
            <button
              onClick={() => setCountsOpen(!countsOpen)}
              aria-expanded={countsOpen}
              aria-controls="what-counts-text"
              className="text-left w-full"
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
            >
              <p className="eyebrow mb-1">{whatCounts.label}</p>
              <p
                className="font-display text-xl md:text-2xl leading-snug transition-colors duration-500"
                style={{ color: countsOpen ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
              >
                The small moments no one else sees.{" "}
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "var(--tbe-warm-brown)", opacity: 0.65 }}>
                  {countsOpen ? "less ↑" : "more ↓"}
                </span>
              </p>
            </button>
            <div
              id="what-counts-text"
              style={{ display: countsOpen ? "" : "none", marginTop: "0.75rem" }}
              aria-hidden={countsOpen ? undefined : "true"}
            >
              <p className="font-display text-lg leading-relaxed max-w-xl" style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}>
                {whatCounts.text}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="font-hand text-2xl md:text-3xl mt-16 max-w-xl"
        style={{ color: "var(--tbe-warm-brown)", opacity: 0.85 }}
      >
        real change is often slow, invisible, and quietly life-altering.
      </motion.p>

      <div className="flex flex-col items-start mt-8 gap-3">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("what_to_expect")}
          className="btn-primary"
          data-testid="expect-book-btn"
          style={{ textDecoration: "none" }}
        >
          Book a Session →
        </a>
        <p className="text-sm" style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-dark-brown)", opacity: 0.55, letterSpacing: "0.03em" }}>
          No pressure. Just a message to begin.
        </p>
      </div>

      {/* Fees & practicalities */}
      <div id="fees" className="mt-24 md:mt-32 max-w-5xl mx-auto" data-testid="fees-block">
        <div className="text-center mb-14">
          <p className="eyebrow mb-6">Online therapy and counselling sessions across India</p>
          <h3 className="h-display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)" }}>
            Simple, transparent, no surprises.
          </h3>
        </div>

        <dl>
          {fees.map((f) => (
            <div
              key={f.k}
              className="grid grid-cols-12 gap-6 py-7 md:py-9 items-baseline"
              style={{ borderTop: "1px solid rgba(47, 35, 35, 0.14)" }}
            >
              <dt className="col-span-12 md:col-span-4 eyebrow" style={{ opacity: 0.85 }}>
                {f.k}
              </dt>
              <dd className="col-span-12 md:col-span-8">
                <span className="font-display text-xl md:text-2xl" style={{ color: "var(--tbe-dark-wine)" }}>
                  {f.v}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p
          className="mt-8 text-base md:text-lg"
          style={{ color: "var(--tbe-dark-brown)", opacity: 0.7, fontFamily: "'EB Garamond', serif" }}
        >
          I work with mild to moderate concerns. If you need psychiatric or crisis support, I'll help you find the right service.
        </p>

        <div className="text-center mt-14 flex flex-col items-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("fees")}
            className="btn-primary"
            data-testid="fees-book-session-btn"
            style={{ textDecoration: "none" }}
          >
            Begin a Conversation →
          </a>
          <p className="text-sm" style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-dark-brown)", opacity: 0.55, letterSpacing: "0.03em" }}>
            No pressure. Just a message to begin.
          </p>
          <p className="font-hand text-2xl mt-2" style={{ color: "var(--tbe-warm-brown)", opacity: 0.8 }}>
            you don't need the perfect words first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
