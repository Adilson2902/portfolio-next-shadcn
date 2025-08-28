"use client";

import React from "react";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { Globe, TrendingUp, BadgeCheck } from "lucide-react";

type Project = {
  title: string;
  website: string;
  github?: string;
  cover: string; // imagem do projeto (print/hero)
  description: string; // resumo de 1–2 linhas
  whatIDid: string[]; // bullets do que você fez
  impact: string[]; // bullets de impacto (números se possível)
  stack: string[]; // tags de tecnologia
  year?: string;
};

const projects: Project[] = [
  {
    title: "Landing de Clínica • Next.js + SEO",
    website: "https://exemplo.com",
    github: "https://github.com/adilson2902/clinica-landing",
    cover:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1800&auto=format&fit=crop",
    description:
      "Landing page focada em conversão com SEO técnico e Core Web Vitals verdes.",
    whatIDid: [
      "Arquitetura Next.js com SSG + rotas limpas",
      "Componente de FAQ + Schema (FAQPage)",
      "Formulário integrado ao WhatsApp e e-mail",
    ],
    impact: [
      "↑ 57% nas conversões em 30 dias",
      "LCP ~1.4s / CLS 0.01 (mobile)",
      "Top 3 para 6 keywords locais",
    ],
    stack: ["Next.js", "React", "Tailwind", "shadcn/ui", "Vercel"],
    year: "2025",
  },
  {
    title: "E-commerce Minimal • Checkout enxuto",
    website: "https://loja-exemplo.com",
    github: "https://github.com/adilson2902/ecommerce-minimal",
    cover:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1800&auto=format&fit=crop",
    description:
      "Loja rápida, acessível e com rastreio de eventos para anúncios.",
    whatIDid: [
      "Catálogo com filtros por tag e preço",
      "Checkout simplificado + validações",
      "GA4 + eventos de AddToCart/BeginCheckout",
    ],
    impact: [
      "↑ 22% na taxa de compra",
      "CWV > 90 (mobile/desktop)",
      "Tempo de build/CI 35% menor",
    ],
    stack: ["Next.js", "React", "Stripe (mock)", "Tailwind", "GA4"],
    year: "2025",
  },
  {
    title: "App RN • Agenda de Serviços",
    website: "https://expo.dev/@adilson/app-agenda",
    github: "https://github.com/adilson2902/app-agenda",
    cover:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?q=80&w=1800&auto=format&fit=crop",
    description: "App React Native com login, agenda e notificações.",
    whatIDid: [
      "Stack RN + Expo + TypeScript",
      "Auth + push notifications",
      "Sincronização offline-first",
    ],
    impact: [
      "↓ 40% no no-show com lembretes",
      "Tempo médio de agendamento −25%",
      "Crash-free sessions > 99.5%",
    ],
    stack: ["React Native", "Expo", "Firebase", "Zustand"],
    year: "2024",
  },
];

function ProjectSpotlightCard(p: Project) {
  return (
    <CardSpotlight className="h-auto w-full max-w-[32rem] overflow-hidden">
      {/* COVER */}
      <div className="relative z-20">
        <img
          src={p.cover}
          alt={`${p.title} — captura do projeto`}
          className="w-full h-40 object-cover rounded-xl"
          loading="lazy"
        />
      </div>

      {/* TÍTULO + LINK PREVIEW */}
      <div className="relative z-20 mt-4">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <div className="mt-1 flex items-center gap-3 text-neutral-300">
          <Globe className="h-4 w-4" />
          <LinkPreview
            url={p.website}
            className="font-medium underline underline-offset-4 z-[9999]"
          >
            Visitar site
          </LinkPreview>

          {p.year && (
            <>
              <span className="opacity-50">•</span>
              <span className="text-neutral-400">{p.year}</span>
            </>
          )}
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <p className="relative z-20 mt-3 text-neutral-200">{p.description}</p>

      {/* O QUE EU FIZ */}
      <div className="relative z-20 mt-4">
        <p className="text-neutral-300 text-sm mb-2 inline-flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-blue-400" />O que eu fiz
        </p>
        <ul className="grid grid-cols-1 gap-1 list-disc pl-5 text-white/90">
          {p.whatIDid.map((w, i) => (
            <li key={i} className="marker:text-blue-400">
              {w}
            </li>
          ))}
        </ul>
      </div>

      {/* IMPACTO / RESULTADOS */}
      <div className="relative z-20 mt-4">
        <p className="text-neutral-300 text-sm mb-2 inline-flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          Impacto na carreira/projeto
        </p>
        <ul className="grid grid-cols-1 gap-1 list-disc pl-5 text-white/90">
          {p.impact.map((w, i) => (
            <li key={i} className="marker:text-emerald-400">
              {w}
            </li>
          ))}
        </ul>
      </div>

      {/* STACK TAGS */}
      <div className="relative z-20 mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-1 text-xs bg-white/10 text-white/90 ring-1 ring-white/15"
          >
            {t}
          </span>
        ))}
      </div>
    </CardSpotlight>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 w-full flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectSpotlightCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
