import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Butterfly from "./Butterfly";
import { WA_URL, trackWhatsApp } from "../utils/booking";

const HERO_IMG = "https://images.pexels.com/photos/32550977/pexels-photo-32550977.jpeg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative w-full"
      style={{ minHeight: "115vh" }}
    >
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ y: yBg, opacity }}
      >
        <div
          className="absolute inset-0 painterly fade-edges"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            opacity: 0.55,
            filter: "blur(0.5px) saturate(0.7) brightness(1.04) contrast(0.92)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(243, 231, 209, 0.15) 0%, rgba(243, 231, 209, 0.55) 55%, rgba(243, 231, 209, 1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 animate-haze"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 75% 30%, rgba(221, 154, 137, 0.28), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-32 md:pb-56"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="eyebrow-body mb-10"
          data-testid="hero-eyebrow"
        >
          Mental Health Practitioner — Naina Agarwal
        </motion.p>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="h-display max-w-4xl"
          style={{
            fontSize: "clamp(2rem, 6.4vw, 5.5rem)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
          data-testid="hero-headline"
        >
          Therapy that follows you,
          <br />
          <em className="font-display italic" style={{ color: "var(--tbe-warm-brown)" }}>
            not a script.
          </em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-14 max-w-xl"
        >
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--tbe-dark-brown)", opacity: 0.85 }}
            data-testid="hero-subheading"
          >
            For the stuff that keeps repeating. The patterns you understand but can't
            seem to move. The things you carry without quite knowing how to put them down.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-14 flex items-center gap-10 flex-wrap"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-10 flex-wrap">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("hero")}
                className="btn-primary"
                data-testid="hero-book-session-btn"
                style={{ textDecoration: "none" }}
              >
                Book a Session →
              </a>
              <a href="#about" className="btn-ghost" data-testid="hero-learn-more-link">
                Read about Naina
              </a>
            </div>
            <p
              className="text-sm"
              style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-warm-brown)", letterSpacing: "0.03em" }}
            >
              No pressure. Just a message to begin.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 2.2 }}
          className="font-hand text-2xl md:text-3xl mt-16 max-w-sm"
          style={{ color: "var(--tbe-warm-brown)", opacity: 0.75 }}
        >
          people don't unfold in identical ways.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20, y: 40 }}
          animate={{ opacity: 0.55, x: 180, y: -50 }}
          transition={{ duration: 14, delay: 3.5, ease: "easeInOut" }}
          className="absolute right-[18%] top-[42%] hidden md:block"
        >
          <Butterfly size={26} color="var(--tbe-warm-brown)" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.8, delay: 2.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] tracking-[0.45em] uppercase animate-breathe"
          style={{ fontFamily: "'EB Garamond', serif", color: "var(--tbe-warm-brown)" }}
        >
          Scroll
        </span>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--tbe-warm-brown), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default Hero;
