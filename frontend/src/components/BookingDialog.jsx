import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Butterfly from "./Butterfly";

const BookingDialog = ({ open, onClose }) => {
  const closeButtonRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Move focus to close button when dialog opens
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="booking-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-dialog-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: "rgba(47, 35, 35, 0.5)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative w-full max-w-lg"
            style={{
              backgroundColor: "var(--tbe-cream)",
              boxShadow: "0 30px 80px rgba(47, 35, 35, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close booking dialog"
              data-testid="booking-dialog-close"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.5rem",
                fontSize: "1.4rem",
                lineHeight: 1,
                color: "var(--tbe-warm-brown)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                opacity: 0.6,
              }}
            >
              ×
            </button>

            <div className="px-10 md:px-14 py-14 md:py-16 flex flex-col items-center text-center">
              <Butterfly size={24} color="var(--tbe-deep-maroon)" className="mb-8 animate-flutter-slow" />

              <h2
                id="booking-dialog-title"
                className="h-display mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)" }}
                data-testid="booking-modal-headline"
              >
                Ready when you are.
              </h2>

              <p
                className="mb-12 text-lg"
                style={{ color: "var(--tbe-dark-brown)", opacity: 0.78 }}
                data-testid="booking-modal-subtext"
              >
                You don't need the perfect words. Just say hello.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="https://wa.me/919989640090"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary flex-1 justify-center"
                  data-testid="booking-whatsapp-btn"
                  style={{ textDecoration: "none" }}
                >
                  Message on WhatsApp →
                </a>
                <a
                  href="https://instagram.com/thebutterflyeffect_with.nainaa"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="booking-instagram-btn"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.85rem",
                    border: "1px solid rgba(121, 2, 8, 0.45)",
                    color: "var(--tbe-deep-maroon)",
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "0.95rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    padding: "1rem 1.5rem",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background 600ms ease, color 600ms ease",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--tbe-deep-maroon)";
                    e.currentTarget.style.color = "var(--tbe-cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--tbe-deep-maroon)";
                  }}
                >
                  DM on Instagram →
                </a>
              </div>

              <p
                className="font-hand text-xl mt-10"
                style={{ color: "var(--tbe-warm-brown)", opacity: 0.75 }}
                data-testid="booking-modal-accent"
              >
                both work. neither requires a script.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingDialog;
