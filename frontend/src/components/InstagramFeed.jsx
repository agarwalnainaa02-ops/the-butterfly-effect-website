import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const blockquoteStyle = {
    background: "#FFF",
    border: 0,
    borderRadius: "3px",
    boxShadow:
      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
    margin: "1px",
    maxWidth: "540px",
    minWidth: "326px",
    padding: 0,
    width: "99.375%",
  };

  const innerDivStyle = { padding: "16px" };

  const anchorStyle = {
    background: "#FFFFFF",
    lineHeight: 0,
    padding: 0,
    textAlign: "center",
    textDecoration: "none",
    width: "100%",
  };

  return (
    <section
      id="instagram"
      data-testid="instagram-feed-section"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48"
    >
      {/* ── Eyebrow + headline ── */}
      <div className="mb-16 md:mb-20">
        <p className="eyebrow mb-8">From the archive</p>
        <h2
          className="h-display"
          style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
          data-testid="instagram-headline"
        >
          <em style={{ color: "var(--tbe-warm-brown)" }}>
            @thebutterflyeffect_with.nainaa
          </em>
        </h2>
      </div>

      {/* ── Posts grid — 1 col mobile / 2 col tablet / 3 col desktop ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

        {/* Post 1 */}
        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DXs3M49E8-f/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={blockquoteStyle}
          >
            <div style={innerDivStyle}>
              <a
                href="https://www.instagram.com/p/DXs3M49E8-f/?utm_source=ig_embed&utm_campaign=loading"
                style={anchorStyle}
                target="_blank"
                rel="noreferrer"
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* Post 2 */}
        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DXvgCKnk6hO/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={blockquoteStyle}
          >
            <div style={innerDivStyle}>
              <a
                href="https://www.instagram.com/p/DXvgCKnk6hO/?utm_source=ig_embed&utm_campaign=loading"
                style={anchorStyle}
                target="_blank"
                rel="noreferrer"
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* Post 3 */}
        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DXx1ez0Ez0f/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={blockquoteStyle}
          >
            <div style={innerDivStyle}>
              <a
                href="https://www.instagram.com/p/DXx1ez0Ez0f/?utm_source=ig_embed&utm_campaign=loading"
                style={anchorStyle}
                target="_blank"
                rel="noreferrer"
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </div>

      </div>

      {/* ── Follow link — centred below posts ── */}
      <div className="flex justify-center mt-14">
        <a
          href="https://www.instagram.com/thebutterflyeffect_with.nainaa"
          target="_blank"
          rel="noreferrer"
          data-testid="instagram-follow-link"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--tbe-warm-brown)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            opacity: 0.85,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
        >
          Follow on Instagram →
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;
