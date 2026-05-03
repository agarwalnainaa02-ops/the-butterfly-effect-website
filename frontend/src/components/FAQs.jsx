import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What happens in the first session?",
    a: "Mostly we just meet. I'll ask what brings you here, and we'll go at whatever pace feels manageable. You don't have to explain everything at once — or at all, if something isn't ready yet.",
  },
  {
    q: "What if I don't know what to talk about?",
    a: "That's more common than you'd think. A lot of people arrive with a feeling rather than a topic. Finding language together is part of the work — 'I don't know where to start' is genuinely a fine place to begin.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. I'll explain the limits of confidentiality clearly in our first conversation so there are no surprises.",
  },
  {
    q: "How often should we meet?",
    a: "Weekly tends to work best, especially early on — it keeps continuity. But we'll figure out what actually fits your life.",
  },
  {
    q: "What if things feel more intense in therapy?",
    a: "Feelings rising is part of the process, not a sign something's going wrong. We pace gently and never push past what feels manageable for you.",
  },
  {
    q: "What if it's not the right fit?",
    a: "Please bring it into the room. We can reshape the work — or part well, if that's what's needed. You're always in choice.",
  },
];

const FaqItem = ({ q, a, index, open, onToggle }) => {
  return (
    <div
      className="border-t"
      style={{ borderColor: "rgba(47, 35, 35, 0.14)" }}
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-8 py-8 md:py-10"
        aria-expanded={open}
        data-testid={`faq-toggle-${index}`}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        <h3
          className="font-display text-xl md:text-2xl leading-snug pr-6 transition-colors duration-500"
          style={{ color: open ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
        >
          {q}
        </h3>
        <span
          className="font-display text-2xl shrink-0"
          style={{
            color: "var(--tbe-warm-brown)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 700ms ease",
            display: "block",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-10 max-w-3xl text-lg leading-relaxed"
              style={{ color: "var(--tbe-dark-brown)", opacity: 0.88 }}
              data-testid={`faq-answer-${index}`}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faqs-section"
      className="relative max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-48"
    >
      <div className="text-center mb-16 md:mb-20">
        <p className="eyebrow mb-6">Quiet questions</p>
        <h2
          className="h-display"
          style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
          data-testid="faqs-headline"
        >
          The things people wonder
          <br />
          <em style={{ color: "var(--tbe-warm-brown)" }}>but don't always ask.</em>
        </h2>
      </div>
      <div className="border-b" style={{ borderColor: "rgba(47, 35, 35, 0.14)" }}>
        {faqs.map((f, i) => (
          <FaqItem
            key={f.q}
            q={f.q}
            a={f.a}
            index={i}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
