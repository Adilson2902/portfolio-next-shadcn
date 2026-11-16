import { ImageResponse } from "next/og";
export const alt = "Adilson Adriano — Desenvolvimento web e mobile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#101017",
          color: "#f5f3ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
        }}
      >
        <div style={{ fontSize: 26, color: "#c4b5fd", marginBottom: 34 }}>
          ADILSON ADRIANO · FRONT-END
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Interfaces que conectam
        </div>
        <div style={{ fontSize: 76, color: "#c4b5fd", fontWeight: 700 }}>
          ideias e pessoas.
        </div>
        <div style={{ fontSize: 28, marginTop: 42 }}>
          React · Next.js · React Native
        </div>
      </div>
    ),
    size,
  );
}
