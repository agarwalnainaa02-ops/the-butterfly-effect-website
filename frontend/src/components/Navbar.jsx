import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How I Work", href: "#approach" },
  { label: "What We Cover", href: "#areas" },
  { label: "Sessions", href: "#expect" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = ({ onBookClick, visible = true }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="primary-navbar"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-700"
      style={{
        backgroundColor: scrolled ? "rgba(243, 231, 209, 0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(47, 35, 35, 0.08)" : "1px solid transparent",
        // Hide navbar during logo entrance; fade in once intro completes
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.8s ease, background-color 700ms, border-color 700ms, backdrop-filter 700ms",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo-link"
          className="flex items-center group"
          style={{ textDecoration: "none" }}
        >
          <img
            src="/logo.svg"
            alt="The Butterfly Effect"
            style={{
              height: "38px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-[13px] tracking-[0.28em] uppercase transition-colors duration-500"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.72,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.72")}
            >
              {link.label}
            </a>
          ))}
        </div>

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
          }}
          onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.36em")}
          onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0.3em")}
        >
          Book a Session
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
