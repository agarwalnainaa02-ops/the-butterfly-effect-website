import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "tbe-intro-played";

// ─── Timing ───────────────────────────────────────────────────────────────────
//  t = 0 ms   : logo + text start fading/scaling in  (1 200 ms)
//  t = 2 500 ms: start exit — overlay fades out + slides upward  (700 ms)
//  t = 3 200 ms: phase → "done", node removed from DOM
// ─────────────────────────────────────────────────────────────────────────────

const LogoEntrance = ({ onComplete }) => {
  const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";
  const [phase, setPhase] = useState(alreadyPlayed ? "done" : "visible");

  // Stable ref so the effect never needs onComplete in its dep array
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    if (alreadyPlayed) {
      onCompleteRef.current?.();
      return;
    }

    const tExit = setTimeout(() => setPhase("exit"), 2500);
    const tDone = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem(STORAGE_KEY, "1");
      onCompleteRef.current?.();
    }, 3200);

    return () => {
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, []); // empty — fires once on mount, never again

  const exiting = phase === "exit";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          data-testid="logo-entrance-overlay"
          // Overlay: cream screen sits on top of everything.
          // On exit it fades AND lifts upward to reveal the hero below.
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: exiting ? 0 : 1,
            y: exiting ? "-6%" : "0%",
          }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3e7d1",
            pointerEvents: exiting ? "none" : "all",
          }}
        >
          {/* ── Logo ── */}
          <motion.img
            src="/logo.svg"
            alt="The Butterfly Effect"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              height: "180px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />

          {/* ── Brand name ── */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            style={{
              marginTop: "1.5rem",
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2f2323",
            }}
          >
            The Butterfly Effect
          </motion.p>

          {/* ── Practitioner name ── */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            style={{
              marginTop: "0.55rem",
              fontFamily: "'EB Garamond', serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              color: "#2f2323",
              opacity: 0.55,
            }}
          >
            Naina Agarwal
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoEntrance;
