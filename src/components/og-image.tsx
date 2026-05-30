import { ImageResponse } from "next/og";

// Shared 1200×630 social-share card, generated from brand colours/text.
// Used by both app/opengraph-image.tsx and app/twitter-image.tsx so the two
// can never drift apart.

export const ogSize = { width: 1200, height: 630 };
export const ogAlt =
  "Gratis Bücher Abholung — Bücher, CDs, DVDs & Schallplatten gratis abholen lassen in der Schweiz";
export const ogContentType = "image/png";

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #2D6A4F 0%, #1E4D38 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D4A054",
          }}
        >
          Gratis Abholservice · Schweiz
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Bücher, CDs, DVDs &amp; Schallplatten gratis abholen lassen.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Statt wegwerfen – weitergeben. Wir holen kostenlos bei Ihnen ab.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
            Basel · Zürich · Aargau · Solothurn
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#D4A054" }}>
            gratisbuecherabholung.ch
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
