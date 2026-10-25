import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const lines = [
  "you overthink, and you know you overthink, and somehow that doesn't help",
  "you're okay on the surface and exhausted underneath",
  "you understand your patterns. you just can't seem to stop repeating them.",
  "you feel things more intensely than most people around you seem to",
  "your relationships follow the same shape, over and over",
  "you're not sure who you are outside of what you do for others",
  "you've been meaning to talk to someone for a while now",
];

const Line = ({ line, index }) => (
  <li className="flex items-start gap-6 group" data-testid={`who-line-${index}`}>
    <span
      className="font-display italic mt-1 select-none"
      style={{ color: "var(--tbe-dusty-coral)", fontSize: "1.5rem", minWidth: "2.5rem" }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
    <p
      className="text-lg md:text-2xl leading-snug font-display"
      style={{ color: "var(--tbe-dark-brown)" }}
    >
      {line}
    </p>
  </li>
);

const WhoThisIsFor = ({ onBookClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="who"
      data-testid="who-this-is-for-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-16">
        <motion.div
          className="col-span-12 md:col-span-4 md:sticky md:top-32 self-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-8">Who this is for</p>
          <h2
            className="h-display"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
            data-testid="who-headline"
          >
            If you've been sitting with something
            <br />
            <em style={{ color: "var(--tbe-warm-brown)" }}>and don't know where to start —</em>
          </h2>
          <p
            className="mt-8 text-lg md:text-xl"
            style={{ color: "var(--tbe-dark-brown)", opacity: 0.75 }}
          >
            You don't need the perfect words first.
          </p>
        </motion.div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <motion.ul
            className="space-y-8 list-none p-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {lines.slice(0, 4).map((line, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-6 group" data-testid={`who-line-${i}`}>
                <span
                  className="font-display italic mt-1 select-none"
                  style={{ color: "var(--tbe-dusty-coral)", fontSize: "1.5rem", minWidth: "2.5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-lg md:text-2xl leading-snug font-display"
                  style={{ color: "var(--tbe-dark-brown)" }}
                >
                  {line}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Always in HTML (SSR), toggled visually */}
          <ul
            id="who-more-items"
            className="space-y-8 list-none p-0"
            style={{ marginTop: expanded ? "2rem" : 0, display: expanded ? "" : "none" }}
            aria-hidden={expanded ? undefined : "true"}
          >
            {lines.slice(4).map((line, i) => (
              <Line key={i + 4} line={line} index={i + 4} />
            ))}
          </ul>

          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="who-more-items"
            className="mt-8 text-sm tracking-[0.28em] uppercase transition-all duration-500"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "var(--tbe-warm-brown)",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(121, 2, 8, 0.35)",
              paddingBottom: "2px",
              cursor: "pointer",
            }}
          >
            {expanded ? "See less ↑" : "See more ↓"}
          </button>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="font-hand text-3xl md:text-4xl mt-16 md:mt-20 max-w-2xl mx-auto text-center"
        style={{ color: "var(--tbe-warm-brown)", opacity: 0.85 }}
      >
        you don't need to have it figured out before you reach out.
      </motion.p>

      <div className="flex justify-center mt-10">
        <button onClick={onBookClick} className="btn-primary" data-testid="who-book-btn">
          Book a Session →
        </button>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
