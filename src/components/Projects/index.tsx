"use client";

import React from "react";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { Globe, TrendingUp, BadgeCheck } from "lucide-react";

type Project = {
  title: string;
  website: string;
  cover: string; // imagem do projeto (print/hero)
  description: string; // resumo de 1–2 linhas
  whatIDid: string[]; // bullets do que você fez
  impact: string[]; // bullets de impacto (números se possível)
  stack: string[]; // tags de tecnologia
  year?: string;
};

const projects: Project[] = [
  {
    title: "Estetico Masso • Plataforma de Agendamento",
    website: "https://www.esteticomasso.com",
    cover:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1800&auto=format&fit=crop",
    description:
      "Plataforma voltada para esteticistas e profissionais da saúde, oferecendo serviços de massoterapia, agendamento de sessões e pacotes de serviços.",
    whatIDid: [
      "Desenvolvimento de plataforma com agendamento online.",
      "Otimização para performance e acessibilidade com foco em SEO local.",
    ],
    impact: [
      "↑ 35% nas conversões de agendamentos.",
      "Core Web Vitals otimizados para uma navegação ágil.",
      "SEO focado nas regiões de Recife, Olinda e Jaboatão, com presença destacada nas buscas locais.",
    ],
    stack: ["Next.js", "React", "TailwindCSS", "SEO Local"],
    year: "2025",
  },
  {
    title: "ToolSpace • Conversores e Utilitários",
    website: "https://www.toolspace.com.br",
    cover:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1800&auto=format&fit=crop",
    description:
      "Ferramenta completa para conversões e utilitários de produtividade, com opções de conversão de arquivos e geração de QR Codes.",
    whatIDid: [
      "Implementação de múltiplos conversores de formatos de arquivo.",
      "Integração de geração de QR Code e visualização de 3D.",
      "Foco em uma UI responsiva e acessível para dispositivos móveis.",
    ],
    impact: [
      "Tempo de resposta otimizado para menos de 500ms por requisição.",
      "Crescimento de 50% no tráfego orgânico com SEO otimizado.",
    ],
    stack: ["Next.js", "TailwindCSS", "shadcn/ui", "Firebase", "WebGL"],
    year: "2025",
  },
  {
    title: "Futuriza • Soluções de Inteligência Artificial",
    website: "https://www.futuriza.io",
    cover:
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?q=80&w=1800&auto=format&fit=crop",
    description:
      "Plataforma inovadora com soluções para o mercado de inteligência artificial e automação de processos.",
    whatIDid: ["Design responsivo com foco em escalabilidade."],
    impact: ["Melhor visualização de todos os processos e produtos"],
    stack: ["React", "Next.js", "Tailwind"],
    year: "2025",
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
