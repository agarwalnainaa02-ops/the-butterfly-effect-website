import React, { useEffect, useRef, useState } from "react";
import Butterfly from "./Butterfly";

/**
 * Spawns a single drifting butterfly when a watched section scrolls into view.
 * Uses IntersectionObserver — no setInterval, no timers that repeat.
 * Each section trigger fires at most once per page load.
 */

const WATCH_SECTIONS = ["#approach", "#areas", "#faq"];

const makeButterfly = (id) => ({
  id,
  top: 22 + Math.random() * 52,
  duration: 30 + Math.random() * 14,
  size: 18 + Math.random() * 12,
  delay: 0,
  opacity: 0.3 + Math.random() * 0.22,
});

const ButterflyDrift = () => {
  const [butterflies, setButterflies] = useState([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const observers = [];

    const spawnOne = () => {
      const id = ++counterRef.current;
      const b = makeButterfly(id);
      setButterflies((prev) => [...prev, b]);
      // Remove after the CSS animation finishes — no repeat
      const cleanup = setTimeout(() => {
        setButterflies((prev) => prev.filter((x) => x.id !== id));
      }, (b.duration + b.delay + 1) * 1000);
      return cleanup;
    };

    const cleanups = [];

    WATCH_SECTIONS.forEach((selector) => {
      const el = document.querySelector(selector);
      if (!el) return;

      let fired = false;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !fired) {
              fired = true; // fire once only, then stop observing
              observer.unobserve(el);
              cleanups.push(spawnOne());
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      cleanups.forEach((t) => clearTimeout(t));
    };
  }, []); // runs once on mount

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      data-testid="butterfly-drift-layer"
    >
      {butterflies.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            top: `${b.top}%`,
            left: 0,
            opacity: b.opacity,
            animation: `drift-across ${b.duration}s linear ${b.delay}s 1 forwards`,
            willChange: "transform, opacity",
          }}
        >
          <Butterfly size={b.size} color="var(--tbe-warm-brown)" />
        </div>
      ))}
    </div>
  );
};

export default ButterflyDrift;
