import { ImageResponse } from "next/og";

export const alt =
  "Adilson Adriano — Sites, Sistemas Web, Ferramentas Online & Interfaces 3D";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#080412",
          backgroundImage:
            "radial-gradient(circle at 85% 18%, rgba(139, 92, 246, 0.38), transparent 45%), radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.28), transparent 42%)",
          color: "#f5f2ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          border: "2px solid rgba(167, 139, 250, 0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(139, 92, 246, 0.2)",
              border: "1px solid rgba(196, 181, 253, 0.4)",
              fontSize: 20,
              color: "#d8cbff",
              letterSpacing: 2,
              fontWeight: 700,
            }}
          >
            ADILSON ADRIANO · ENGENHARIA WEB, IA &amp; 3D
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6ee7b7",
              fontWeight: 700,
            }}
          >
            +300 ferramentas no ar
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            Sites, Sistemas &amp; Ferramentas
          </div>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#c4b5fd",
            }}
          >
            Feitos para Atrair Clientes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(167, 139, 250, 0.24)",
            paddingTop: 26,
          }}
        >
          <div style={{ fontSize: 24, color: "#cbd5e1" }}>
            Next.js · Three.js · Cursor &amp; Claude · Supabase · React Native
          </div>
          <div style={{ fontSize: 24, color: "#a78bfa", fontWeight: 700 }}>
            adilson.toolspace.com.br
          </div>
        </div>
      </div>
    ),
    size,
  );
}
