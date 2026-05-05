import React from "react";
import { motion } from "framer-motion";

const expectations = [
  { label: "Sessions", text: "50–60 minutes, online. You bring what you bring that week." },
  { label: "Pace", text: "We don't rush. Change is usually quieter than people expect." },
  { label: "Atmosphere", text: "No fixed script. No pressure to perform healing or arrive with tidy sentences." },
  {
    label: "What counts",
    text: "The first time you notice the urge before you act on it. Saying something honest and not immediately taking it back. Choosing rest without running a quiet justification in your head. That pause matters.",
  },
];

const fees = [
  { k: "Format", v: "Online — all sessions held via video call" },
  { k: "Duration", v: "50–60 minutes" },
  { k: "Booking", v: "Via WhatsApp or email" },
  { k: "Confidentiality", v: "A private, respectful space. Limits of confidentiality explained in session one." },
];

const WhatToExpect = ({ onBookClick }) => {
  return (
    <section
      id="expect"
      data-testid="what-to-expect-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48"
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
          <p
            className="text-lg"
            style={{ color: "var(--tbe-dark-brown)", opacity: 0.75 }}
          >
            Both matter.
          </p>
        </motion.div>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="col-span-12 md:col-span-7 relative list-none p-0 m-0"
          style={{ overflow: "hidden" }}
        >
          <div
            className="absolute left-[8px] top-2 bottom-2 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(47,35,35,0.25), transparent)",
            }}
          />
          {expectations.map((e, i) => (
            <motion.li
              key={e.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, delay: i * 0.12 }}
              className="relative pl-12 py-7"
              data-testid={`expect-item-${i}`}
            >
              <span
                className="absolute left-0 top-9 w-[18px] h-[18px] rounded-full"
                style={{
                  background: "var(--tbe-cream)",
                  border: "1px solid rgba(121, 2, 8, 0.55)",
                }}
              />
              <p className="eyebrow mb-2">{e.label}</p>
              <p
                className="font-display text-xl md:text-2xl leading-snug"
                style={{ color: "var(--tbe-dark-wine)" }}
              >
                {e.text}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="font-hand text-2xl md:text-3xl mt-20 max-w-xl"
        style={{ color: "var(--tbe-warm-brown)", opacity: 0.85 }}
      >
        real change is often slow, invisible, and quietly life-altering.
      </motion.p>

      {/* Fees & practicalities */}
      <div id="fees" className="mt-32 md:mt-40 max-w-5xl mx-auto" data-testid="fees-block">
        <div className="text-center mb-14">
          <p className="eyebrow mb-6">Sessions</p>
          <h3
            className="h-display"
            style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)" }}
          >
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
              <dd
                className="col-span-12 md:col-span-8 font-display text-xl md:text-2xl"
                style={{ color: "var(--tbe-dark-wine)" }}
              >
                {f.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="text-center mt-16 flex flex-col items-center gap-6">
          <button
            onClick={onBookClick}
            className="btn-primary"
            data-testid="fees-book-session-btn"
          >
            Begin a Conversation
          </button>
          <p
            className="font-hand text-2xl"
            style={{ color: "var(--tbe-warm-brown)", opacity: 0.8 }}
          >
            you don't need the perfect words first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
