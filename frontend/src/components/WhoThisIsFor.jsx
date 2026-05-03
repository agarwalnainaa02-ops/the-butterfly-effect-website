import React from "react";
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

const WhoThisIsFor = () => {
  return (
    <section
      id="who"
      data-testid="who-this-is-for-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48"
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

        <motion.ul
          className="col-span-12 md:col-span-7 md:col-start-6 space-y-8 list-none p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {lines.map((line, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-start gap-6 group"
              data-testid={`who-line-${i}`}
            >
              <span
                className="font-display italic mt-1 select-none"
                style={{
                  color: "var(--tbe-dusty-coral)",
                  fontSize: "1.5rem",
                  minWidth: "2.5rem",
                }}
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
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="font-hand text-3xl md:text-4xl mt-24 md:mt-32 max-w-2xl mx-auto text-center"
        style={{ color: "var(--tbe-warm-brown)", opacity: 0.85 }}
      >
        you don't need to have it figured out before you reach out.
      </motion.p>
    </section>
  );
};

export default WhoThisIsFor;
