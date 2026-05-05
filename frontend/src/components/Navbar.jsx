import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How I Work", href: "#approach" },
  { label: "What We Cover", href: "#areas" },
  { label: "Sessions", href: "#expect" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

const Navbar = ({ onBookClick, visible = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);
  const handleBookClick = () => { setMenuOpen(false); onBookClick(); };

  return (
    <>
      {/* Skip to main content — visible only on keyboard focus */}
      <a
        href="#top"
        style={{
          position: "fixed",
          top: "-100%",
          left: "1rem",
          zIndex: 9999,
          padding: "0.75rem 1.25rem",
          backgroundColor: "var(--tbe-deep-maroon)",
          color: "#f3e7d1",
          fontFamily: "'EB Garamond', serif",
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          textDecoration: "none",
          transition: "top 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.top = "1rem")}
        onBlur={(e) => (e.currentTarget.style.top = "-100%")}
      >
        Skip to content
      </a>

      {/* ── Desktop + mobile bar ── */}
      <nav
        data-testid="primary-navbar"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
        style={{
          backgroundColor: scrolled || menuOpen
            ? "rgba(243, 231, 209, 0.72)"
            : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(47, 35, 35, 0.08)"
              : "1px solid transparent",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition:
            "opacity 0.8s ease, background-color 700ms, border-color 700ms, backdrop-filter 700ms",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            data-testid="nav-logo-link"
            onClick={handleNavClick}
            className="flex items-center group"
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <img
              src="/logo.svg"
              alt="The Butterfly Effect"
              style={{
                height: "38px",
                width: "auto",
                display: "block",
                objectFit: "contain",
                maxWidth: "200px",
              }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const linkStyle = {
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.72,
                textDecoration: "none",
              };
              const className =
                "text-[13px] tracking-[0.28em] uppercase transition-colors duration-500";
              const handlers = {
                onMouseEnter: (e) => (e.currentTarget.style.opacity = "1"),
                onMouseLeave: (e) => (e.currentTarget.style.opacity = "0.72"),
              };
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className={className}
                    style={linkStyle}
                    {...handlers}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className={className}
                  style={linkStyle}
                  {...handlers}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side: book button + hamburger */}
          <div className="flex items-center gap-5">
            <button
              onClick={onBookClick}
              data-testid="nav-book-session-btn"
              className="text-[12px] tracking-[0.3em] uppercase pb-1 transition-all duration-500"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-deep-maroon)",
                borderBottom: "1px solid rgba(121, 2, 8, 0.45)",
                background: "transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.36em")}
              onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0.3em")}
            >
              Book a Session
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--tbe-dark-brown)",
                  transformOrigin: "center",
                }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--tbe-dark-brown)",
                }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--tbe-dark-brown)",
                  transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 flex flex-col md:hidden"
            style={{
              background: "linear-gradient(160deg, #49050c 0%, #2f2323 100%)",
              paddingTop: "100px",
            }}
          >
            {/* Warm glow blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 30% 10%, rgba(221,154,137,0.18), transparent 65%)",
              }}
            />

            <nav
              className="relative flex flex-col px-8 flex-1"
              aria-label="Mobile navigation"
            >
              <ul className="list-none p-0 m-0 flex flex-col gap-1 flex-1 justify-center">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                  >
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(1.7rem, 7vw, 2.4rem)",
                          color: "rgba(243, 231, 209, 0.88)",
                          textDecoration: "none",
                          display: "block",
                          paddingBlock: "0.55rem",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={handleNavClick}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(1.7rem, 7vw, 2.4rem)",
                          color: "rgba(243, 231, 209, 0.88)",
                          textDecoration: "none",
                          display: "block",
                          paddingBlock: "0.55rem",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.48 }}
                className="pb-14"
              >
                <button
                  onClick={handleBookClick}
                  className="btn-primary w-full justify-center"
                  style={{ background: "var(--tbe-deep-maroon)" }}
                >
                  Book a Session →
                </button>
                <p
                  className="font-hand text-xl mt-6 text-center"
                  style={{ color: "rgba(243,231,209,0.55)" }}
                >
                  you don't need the perfect words first.
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
