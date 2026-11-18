import type { ComponentType } from "react";
import {
  SiClaude,
  SiEslint,
  SiExpo,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPerplexity,
  SiPnpm,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiRender,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiWebgl,
} from "react-icons/si";
import {
  BrainCircuit,
  Code2,
  Layers,
  ScanEye,
  Sparkles,
  WandSparkles,
} from "lucide-react";

type SvgIconComponent = ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

interface TechEntry {
  icon: SvgIconComponent;
  color: string;
}

function CursorBrandIcon({
  size = 16,
  color = "#38bdf8",
  className,
  "aria-hidden": ariaHidden = true,
}: {
  size?: number | string;
  color?: string;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        d="M12 2.25 20.5 7.15v9.7L12 21.75 3.5 16.85v-9.7L12 2.25Z"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="m9.25 7.75 8.1 3.35-3.45 1.4-1.4 3.45-3.25-8.2Z"
        fill={color}
      />
    </svg>
  );
}

const TECH_REGISTRY: Record<string, TechEntry> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  React: { icon: SiReact, color: "#61dafb" },
  "React Native": { icon: SiReact, color: "#38bdf8" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  "Tailwind v4": { icon: SiTailwindcss, color: "#38bdf8" },
  Vite: { icon: SiVite, color: "#9c6bff" },
  "shadcn/ui": { icon: SiShadcnui, color: "#f8fafc" },
  Expo: { icon: SiExpo, color: "#e2e8f0" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  NestJS: { icon: SiNestjs, color: "#e0234e" },
  Express: { icon: SiExpress, color: "#cbd5e1" },
  "Socket.io": { icon: SiSocketdotio, color: "#f8fafc" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Cursor: { icon: CursorBrandIcon, color: "#38bdf8" },
  Claude: { icon: SiClaude, color: "#d97757" },
  "ChatGPT / OpenAI": { icon: SiOpenai, color: "#10a37f" },
  ChatGPT: { icon: SiOpenai, color: "#10a37f" },
  "Google Gemini": { icon: SiGooglegemini, color: "#8e75ff" },
  "GitHub Copilot": { icon: SiGithubcopilot, color: "#e2e8f0" },
  Perplexity: { icon: SiPerplexity, color: "#20b8cd" },
  OpenAI: { icon: SiOpenai, color: "#10a37f" },
  "APIs de LLM (Groq & OpenRouter)": {
    icon: BrainCircuit,
    color: "#c084fc",
  },
  "Visão computacional": { icon: ScanEye, color: "#22d3ee" },
  "Prompt engineering": { icon: WandSparkles, color: "#f472b6" },
  "Aura UI": { icon: Sparkles, color: "#a855f7" },
  "Design System": { icon: Layers, color: "#a855f7" },
  "Three.js": { icon: SiThreedotjs, color: "#f4f2fa" },
  WebGL: { icon: SiWebgl, color: "#f87171" },
  Motion: { icon: SiFramer, color: "#e879f9" },
  "Framer Motion": { icon: SiFramer, color: "#e879f9" },
  "Radix UI": { icon: SiRadixui, color: "#e2e8f0" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Render: { icon: SiRender, color: "#46e3b7" },
  GitHub: { icon: SiGithub, color: "#e2e8f0" },
  Git: { icon: SiGit, color: "#f05032" },
  pnpm: { icon: SiPnpm, color: "#f69220" },
  Jest: { icon: SiJest, color: "#e1495b" },
  "Testing Library": { icon: SiTestinglibrary, color: "#e33332" },
  Vitest: { icon: SiVitest, color: "#95c93d" },
  ESLint: { icon: SiEslint, color: "#818cf8" },
};

const NORMALIZED_REGISTRY: Record<string, TechEntry> = Object.fromEntries(
  Object.entries(TECH_REGISTRY).map(([key, value]) => [
    key.trim().toLowerCase(),
    value,
  ]),
);

const FALLBACK_TECH: TechEntry = {
  icon: Code2,
  color: "#a78bfa",
};

export const CORE_ORBIT_TECHS: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Node.js",
  "Supabase",
  "Expo",
  "Cursor",
  "Claude",
  "ChatGPT / OpenAI",
  "Google Gemini",
];

function resolveTechEntry(name: string): TechEntry {
  return (
    TECH_REGISTRY[name] ??
    NORMALIZED_REGISTRY[name.trim().toLowerCase()] ??
    FALLBACK_TECH
  );
}

export function getTechMeta(name: string): { color: string } {
  const { color } = resolveTechEntry(name);
  return { color };
}

export function TechIcon({
  name,
  size = 16,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const { icon: Icon, color } = resolveTechEntry(name);
  return (
    <Icon
      size={size}
      color={color}
      className={className}
      aria-hidden="true"
    />
  );
}
