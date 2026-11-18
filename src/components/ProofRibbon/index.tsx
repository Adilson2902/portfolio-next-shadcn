"use client";

import { Marquee } from "aura-ui-effects";
import { TechIcon } from "@/components/TechIcon";

interface ProofPill {
  iconName: string;
  label: string;
  accent: string;
}

const PROOF_PILLS: ProofPill[] = [
  { iconName: "Cursor", label: "Cursor AI Workflow", accent: "#38bdf8" },
  { iconName: "Claude", label: "Claude & ChatGPT", accent: "#d97757" },
  { iconName: "Google Gemini", label: "Google Gemini", accent: "#8e75ff" },
  { iconName: "Next.js", label: "Next.js 16 & React 19", accent: "#f8fafc" },
  { iconName: "Aura UI", label: "Aura UI 3D", accent: "#a855f7" },
  {
    iconName: "Supabase",
    label: "Toolspace · +300 ferramentas no ar",
    accent: "#3ecf8e",
  },
  {
    iconName: "Vercel",
    label: "SEO Técnico & Google Ready",
    accent: "#22d3ee",
  },
  {
    iconName: "Three.js",
    label: "Mobile-first & WebGL",
    accent: "#f472b6",
  },
  {
    iconName: "Jest",
    label: "Testes Automatizados",
    accent: "#e1495b",
  },
];

export function ProofRibbon() {
  return (
    <div className="proof-ribbon" aria-label="Destaques de engenharia e entrega">
      <div className="proof-ribbon-inner">
        <Marquee
          duration={34}
          pauseOnHover
          fadeEdges
          gap="1.25rem"
          className="proof-marquee"
        >
          {PROOF_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="proof-pill"
              style={{ borderColor: `${pill.accent}38` }}
            >
              <TechIcon name={pill.iconName} size={15} />
              <span>{pill.label}</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
