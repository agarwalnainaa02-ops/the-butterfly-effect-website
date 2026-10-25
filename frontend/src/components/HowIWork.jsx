import React, { useState } from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Curious before directive",
    body: "I tend to ask about the pattern before I name it. I'm more interested in your why than in fixing your what.",
  },
  {
    title: "Integrative, not fixed",
    body: "My approach is eclectic. I draw on CBT, DBT, ACT and IFS-informed work, and I keep learning so I can support the people I work with better.",
  },
  {
    title: "Person-centred at the core",
    body: "You are the expert on your own experience. I'm here to help you hear yourself more clearly. Not become someone else.",
  },
];

const HowIWork = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="approach"
      data-testid="how-i-work-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <p className="eyebrow mb-8">How I work</p>
        <h2
          className="h-display"
          style={{
            fontSize: "clamp(1.8rem, 4.6vw, 3.6rem)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
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
      </div>

      <div
        className="max-w-4xl mx-auto"
        style={{ borderTop: "1px solid rgba(47,35,35,0.14)" }}
      >
        {principles.map((p, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={p.title}
              style={{ borderBottom: "1px solid rgba(47,35,35,0.14)" }}
              data-testid={`approach-principle-${i}`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`principle-body-${i}`}
                className="w-full text-left flex items-center justify-between gap-6 py-6 md:py-7"
                style={{ background: "transparent", border: "none", cursor: "pointer" }}
              >
                <div className="flex items-center gap-5">
                  <span
                    className="font-display italic shrink-0"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "1.75rem", width: "2.75rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-xl md:text-2xl transition-colors duration-500"
                    style={{ color: isOpen ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <span
                  className="font-display text-2xl shrink-0"
                  style={{
                    color: "var(--tbe-warm-brown)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 500ms ease",
                    display: "block",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {/* Always in HTML (SSR), toggled visually */}
              <div
                id={`principle-body-${i}`}
                style={{ display: isOpen ? "" : "none" }}
                aria-hidden={isOpen ? undefined : "true"}
              >
                <p
                  className="pb-7 pl-[3.75rem] text-lg leading-relaxed max-w-2xl"
                  style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowIWork;
