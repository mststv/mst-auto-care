import { ImageResponse } from "next/og";

export const alt = "MST Auto Care | Premium Automotive Wraps & Detailing in PA / NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 75% 70%, rgba(227,24,40,0.45), #050505 55%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
          <div style={{ fontSize: 150, fontWeight: 900, fontStyle: "italic", letterSpacing: -6, lineHeight: 1 }}>MST</div>
          <div style={{ width: 70, height: 14, background: "#E31828", marginBottom: 28, transform: "skewX(-20deg)" }} />
        </div>
        <div style={{ fontSize: 34, letterSpacing: 22, color: "#E31828", marginTop: 8 }}>AUTO CARE</div>
        <div style={{ fontSize: 46, fontWeight: 800, marginTop: 70 }}>TRANSFORM YOUR RIDE.</div>
        <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 12 }}>Premium Automotive Wraps & Detailing in PA / NJ</div>
      </div>
    ),
    size,
  );
}
