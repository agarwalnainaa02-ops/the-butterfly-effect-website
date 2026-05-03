import React from "react";
import { Mail, Instagram } from "lucide-react";

/* WhatsApp official mark as a minimal inline SVG */
const WhatsAppIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative pt-32 pb-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #49050c 0%, #2f2323 100%)",
        color: "#f3e7d1",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 0%, rgba(221, 154, 137, 0.18), transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="mb-6">
              <img
                src="/logo.svg"
                alt="The Butterfly Effect"
                style={{
                  height: "52px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  /* Invert the dark logo to cream for the dark footer */
                  filter: "brightness(0) invert(1)",
                  opacity: 0.88,
                }}
              />
            </div>
            <p
              className="font-display italic text-2xl md:text-3xl leading-snug max-w-md"
              style={{ color: "rgba(243, 231, 209, 0.92)" }}
            >
              understanding your patterns,
              <br />
              without judgment.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p
              className="text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "rgba(243, 231, 209, 0.55)" }}
            >
              Connect
            </p>
            <ul
              className="space-y-3 text-base md:text-lg list-none p-0"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              <li>
                <a
                  href="mailto:agarwalnainaa02@gmail.com"
                  className="hover:underline underline-offset-4 transition-colors duration-500"
                  style={{ color: "rgba(243, 231, 209, 0.92)", display: "flex", alignItems: "center", gap: "0.55rem" }}
                  data-testid="footer-email-link"
                >
                  <Mail size={16} style={{ flexShrink: 0, opacity: 0.85 }} />
                  agarwalnainaa02@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919989640090"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-4 transition-colors duration-500"
                  style={{ color: "rgba(243, 231, 209, 0.92)", display: "flex", alignItems: "center", gap: "0.55rem" }}
                  data-testid="footer-whatsapp-link"
                >
                  <WhatsAppIcon size={16} color="rgba(243, 231, 209, 0.85)" />
                  WhatsApp · +91 99896 40090
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/thebutterflyeffect_with.nainaa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-4 transition-colors duration-500"
                  style={{ color: "rgba(243, 231, 209, 0.92)", display: "flex", alignItems: "center", gap: "0.55rem" }}
                  data-testid="footer-instagram-link"
                >
                  <Instagram size={16} style={{ flexShrink: 0, opacity: 0.85 }} />
                  @thebutterflyeffect_with.nainaa
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <p
              className="text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "rgba(243, 231, 209, 0.55)" }}
            >
              Practice
            </p>
            <ul
              className="space-y-3 text-base md:text-lg list-none p-0"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              <li>
                <a href="#about" style={{ color: "rgba(243, 231, 209, 0.92)" }} className="hover:underline underline-offset-4">
                  About Naina
                </a>
              </li>
              <li>
                <a href="#approach" style={{ color: "rgba(243, 231, 209, 0.92)" }} className="hover:underline underline-offset-4">
                  How I Work
                </a>
              </li>
              <li>
                <a href="#areas" style={{ color: "rgba(243, 231, 209, 0.92)" }} className="hover:underline underline-offset-4">
                  Areas of Work
                </a>
              </li>
              <li>
                <a href="#faq" style={{ color: "rgba(243, 231, 209, 0.92)" }} className="hover:underline underline-offset-4">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(243, 231, 209, 0.18)" }}
        >
          <p
            className="text-xs tracking-[0.28em] uppercase"
            style={{ color: "rgba(243, 231, 209, 0.55)" }}
          >
            © {new Date().getFullYear()} The Butterfly Effect — Naina Agarwal
          </p>
          <p className="font-hand text-xl" style={{ color: "rgba(243, 231, 209, 0.85)" }}>
            be gentle with yourself today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
