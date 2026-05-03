import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section
      id="areas"
      data-testid="areas-of-work-section"
      className="relative py-32 md:py-48"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(221, 154, 137, 0.15), transparent 65%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-12 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-8">What we cover</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.0, delay: (i % 2) * 0.12, ease: "easeOut" }}
              className="py-10 md:py-12 group"
              style={{ borderTop: "1px solid rgba(47, 35, 35, 0.14)" }}
              data-testid={`area-of-work-${i}`}
            >
              <div className="flex items-start gap-8">
                <span
                  className="font-display italic mt-2"
                  style={{ color: "var(--tbe-dusty-coral)", fontSize: "1.1rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3
                    className="font-display text-2xl md:text-3xl mb-4 transition-colors duration-500"
                    style={{ color: "var(--tbe-dark-wine)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tbe-deep-maroon)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--tbe-dark-wine)")}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed max-w-md"
                    style={{ color: "var(--tbe-dark-brown)", opacity: 0.82 }}
                  >
                    {a.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;
