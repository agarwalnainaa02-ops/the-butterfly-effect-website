import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Curious before directive",
    body: "I tend to ask about the pattern before I name it. I'm more interested in your why than in fixing your what.",
  },
  {
    title: "Integrative, not fixed",
    body: "My work is primarily informed by CBT, DBT, and somatic approaches — while continuing to learn from other modalities too.",
  },
  {
    title: "Person-centred at the core",
    body: "You are the expert on your own experience. I'm here to help you hear yourself more clearly. Not become someone else.",
  },
];

const HowIWork = () => {
  return (
    <section
      id="approach"
      data-testid="how-i-work-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48"
    >
      <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
        <p className="eyebrow mb-8">How I work</p>
        <h2
          className="h-display"
          style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}
          data-testid="approach-headline"
        >
          I work integratively — which means I don't choose one framework
          <br />
          <em style={{ color: "var(--tbe-warm-brown)" }}>and fit you into it.</em>
        </h2>
        <p
          className="mt-8 text-lg md:text-xl"
          style={{ color: "var(--tbe-dark-brown)", opacity: 0.75 }}
        >
          I work with what you bring. Session to session.
        </p>
        <p
          className="mt-6 font-hand text-2xl md:text-3xl"
          style={{ color: "var(--tbe-warm-brown)", opacity: 0.85 }}
        >
          both matter — the therapist and the person.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-6xl mx-auto">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: i * 0.18, ease: "easeOut" }}
            className="relative"
            data-testid={`approach-principle-${i}`}
          >
            <span
              className="font-display italic"
              style={{ color: "var(--tbe-dusty-coral)", fontSize: "3rem", lineHeight: 1 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="font-display text-2xl md:text-3xl mt-6 mb-5"
              style={{ color: "var(--tbe-dark-wine)" }}
            >
              {p.title}
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
            >
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowIWork;
