import React from "react";
import { motion } from "framer-motion";

const ABOUT_IMG = "https://images.pexels.com/photos/14714578/pexels-photo-14714578.jpeg";

const AboutNaina = () => {
  return (
    <section
      id="about"
      data-testid="about-naina-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48"
    >
      <div
        className="pointer-events-none absolute -top-40 left-0 right-0 h-80 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 30% 50%, rgba(111, 143, 136, 0.16), transparent 70%)",
        }}
      />

      <div className="grid grid-cols-12 gap-y-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="col-span-12 md:col-span-5 relative"
        >
          <div className="relative">
            <div
              className="aspect-[4/5] w-full painterly fade-edges"
              style={{
                backgroundImage: `url(${ABOUT_IMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.85,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(243, 231, 209, 0.55) 100%)",
              }}
            />
            <p
              className="font-hand absolute -bottom-6 -right-2 text-3xl md:text-4xl"
              style={{
                color: "var(--tbe-warm-brown)",
                opacity: 0.85,
                transform: "rotate(-2deg)",
              }}
            >
              it's okay if your thoughts arrive messy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="col-span-12 md:col-span-7"
        >
          <p className="eyebrow mb-8">About Naina</p>
          <h2
            className="h-display mb-10"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            data-testid="about-headline"
          >
            The therapist
            <br />
            <em style={{ color: "var(--tbe-warm-brown)" }}>and the person.</em>
          </h2>

          <div
            className="space-y-7 text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--tbe-dark-brown)", opacity: 0.92 }}
          >
            <p>
              I didn't come to psychology to help people. I came because I couldn't stop
              trying to understand them — not in a clinical way. In a can't-stop-thinking-about-it way.
            </p>
            <p>
              I have an MSc in Counselling Psychology. I've also spent years on the other
              side of therapy, as a client — so I know how vulnerable it can feel to sit
              across from someone and try to explain what's happening inside you. I know
              how intimidating starting can be.
            </p>
            <p>
              Outside of sessions, I'm probably at the gym, experiencing post-coffee
              jitters, laughing during emotional conversations, or waving at random dogs
              on the street. I'm more person than profile.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 items-center">
            <div>
              <p className="eyebrow mb-2">Education</p>
              <p className="font-display text-lg" style={{ color: "var(--tbe-dark-wine)" }}>
                MSc Counselling Psychology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNaina;
