import { ImageResponse } from "next/og";

export const config = { runtime: "edge" };

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get("title") || "Therapy that follows you, not a script.";
  const sub =
    searchParams.get("sub") || "Naina Agarwal · Counselling Psychologist";

  // Scale title font down for longer strings
  const titleSize = title.length > 55 ? 46 : title.length > 38 ? 56 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          background: "#f3e7d1",
        }}
      >
        {/* Warm coral glow — top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "520px",
            height: "380px",
            background:
              "radial-gradient(ellipse at top right, rgba(221,154,137,0.55), transparent 65%)",
            display: "flex",
          }}
        />

        {/* Sage glow — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "380px",
            height: "240px",
            background:
              "radial-gradient(ellipse at bottom left, rgba(111,143,136,0.22), transparent 65%)",
            display: "flex",
          }}
        />

        {/* Content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 96px",
            width: "100%",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#7c5c4a",
              marginBottom: 44,
              fontFamily: "serif",
              opacity: 0.75,
            }}
          >
            The Butterfly Effect
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              color: "#2f2323",
              lineHeight: 1.12,
              marginBottom: 36,
              fontFamily: "serif",
              fontStyle: "italic",
              maxWidth: "940px",
            }}
          >
            {title}
          </div>

          {/* Accent rule */}
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "1px",
              background: "rgba(124, 92, 74, 0.5)",
              marginBottom: "28px",
            }}
          />

          {/* Sub-line */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#7c5c4a",
              fontFamily: "serif",
              opacity: 0.88,
            }}
          >
            {sub}
          </div>
        </div>

        {/* URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "96px",
            display: "flex",
            fontSize: 15,
            color: "#2f2323",
            letterSpacing: "0.1em",
            fontFamily: "serif",
            opacity: 0.38,
          }}
        >
          thebutterflyeffecttherapy.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
