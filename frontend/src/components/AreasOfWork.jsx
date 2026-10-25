import React, { useState } from "react";
import { motion } from "framer-motion";
import { WA_URL, trackWhatsApp } from "../utils/booking";

const areas = [
  {
    title: "Anxiety & Overthinking",
    body: "The loop that won't quiet. The body that braces before the day even starts.",
  },
  {
    title: "Emotional Patterns",
    body: "The coping mechanism has a name. The belief has an origin. We look for both.",
  },
  {
    title: "Self-Worth",
    body: "The quiet disbelief that you're allowed to take up space. We sit with that.",
  },
  {
    title: "Relationships & Attachment",
    body: "The same shape, different people. Patterns repeat until something changes.",
  },
  {
    title: "Stress & Burnout",
    body: "When capacity has quietly thinned to almost nothing. Somewhere to put the weight down.",
  },
  {
    title: "Identity & Self-Understanding",
    body: "Who you are outside of what you do, who you love, and what you're supposed to be.",
  },
  {
    title: "Emotional Regulation",
    body: "Flood, freeze, and the moments in between. Learning to read your own signals.",
  },
  {
    title: "Change & Transitions",
    body: "Endings that weren't clean. Beginnings that feel too big. The in-between.",
  },
];

const AreasOfWork = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="areas"
      data-testid="areas-of-work-section"
      className="relative py-24 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(221, 154, 137, 0.15), transparent 65%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-8">Therapy and counselling for anxiety, overthinking, relationships and burnout</p>
            <h2
              className="h-display"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}
              data-testid="areas-headline"
            >
              The quieter stuff.
              <br />
              <em style={{ color: "var(--tbe-warm-brown)" }}>The louder stuff.</em>
              <br />
              And everything in between.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
            >
              I work with the experiences people often carry without quite having language for yet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {areas.map((a, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: "easeOut" }}
                data-testid={`area-of-work-${i}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`area-desc-${i}`}
                  className="w-full text-left p-5 md:p-6 transition-all duration-500"
                  style={{
                    background: isOpen ? "rgba(243,231,209,0.7)" : "rgba(243,231,209,0.35)",
                    border: "1px solid rgba(47,35,35,0.12)",
                    cursor: "pointer",
                    display: "block",
                  }}
                >
                  <span
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "1rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-lg md:text-xl mt-2 mb-1 transition-colors duration-500"
                    style={{ color: isOpen ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
                  >
                    {a.title}
                  </h3>
                  <span
                    className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                    style={{ color: "var(--tbe-warm-brown)", opacity: 0.65 }}
                  >
                    {isOpen ? "less ↑" : "more ↓"}
                  </span>
                </button>

                {/* Always in HTML (SSR), toggled visually */}
                <div
                  id={`area-desc-${i}`}
                  style={{
                    display: isOpen ? "" : "none",
                    padding: "0.75rem 1.25rem 1.25rem",
                    background: "rgba(243,231,209,0.45)",
                    borderLeft: "1px solid rgba(47,35,35,0.12)",
                    borderRight: "1px solid rgba(47,35,35,0.12)",
                    borderBottom: "1px solid rgba(47,35,35,0.12)",
                  }}
                  aria-hidden={isOpen ? undefined : "true"}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
                  >
                    {a.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-14 gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("areas_of_work")}
            className="btn-primary"
            data-testid="areas-book-btn"
            style={{ textDecoration: "none" }}
          >
            Book a Session →
          </a>
          <p className="text-sm" style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-dark-brown)", opacity: 0.55, letterSpacing: "0.03em" }}>
            No pressure. Just a message to begin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;
