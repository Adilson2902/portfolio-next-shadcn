"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Globe, TrendingUp, BadgeCheck, ExternalLink } from "lucide-react";

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
    website: "https://www.esteticomasso.com.br",
    cover:
      "https://www.esteticomasso.com.br/_next/image?url=%2Fassets%2Fhome.png&q=75&w=1920",
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
    cover: "https://www.toolspace.com.br/image.png",
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
    website: "https://futuriza.io",
    cover: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffuturiza.io?w=1600",
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
    <CardSpotlight className="h-auto w-full max-w-[32rem] overflow-hidden group modern-hover">
      {/* COVER com overlay gradiente */}
      <div className="relative z-20 overflow-hidden rounded-2xl h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <Image
          src={p.cover}
          alt={`${p.title} — captura do projeto`}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge de ano flutuante */}
        {p.year && (
          <div className="absolute top-4 right-4 z-20 glass-effect px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
            {p.year}
          </div>
        )}
      </div>

      {/* TÍTULO + LINK PREVIEW */}
      <div className="relative z-20 mt-6">
        <h3 className="text-2xl font-bold text-white mb-3 gradient-text">{p.title}</h3>
        <a
          href={p.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group/link"
        >
          <Globe className="h-4 w-4" />
          <span className="underline underline-offset-4">Visitar site</span>
          <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* DESCRIÇÃO */}
      <p className="relative z-20 mt-4 text-gray-300 leading-relaxed">{p.description}</p>

      {/* O QUE EU FIZ */}
      <div className="relative z-20 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <BadgeCheck className="h-5 w-5 text-white" />
          </div>
          <p className="text-white font-semibold">O que eu fiz</p>
        </div>
        <ul className="space-y-2">
          {p.whatIDid.map((w, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 shrink-0"></div>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMPACTO / RESULTADOS */}
      <div className="relative z-20 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <p className="text-white font-semibold">Impacto e Resultados</p>
        </div>
        <ul className="space-y-2">
          {p.impact.map((w, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 mt-2 shrink-0"></div>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* STACK TAGS com gradientes */}
      <div className="relative z-20 mt-6 flex flex-wrap gap-2">
        {p.stack.map((t, idx) => {
          const gradients = [
            "from-purple-500 to-violet-500",
            "from-pink-500 to-rose-500",
            "from-cyan-500 to-blue-500",
            "from-emerald-500 to-teal-500",
            "from-amber-500 to-orange-500",
          ];
          const gradient = gradients[idx % gradients.length];
          
          return (
            <span
              key={t}
              className={`rounded-full px-4 py-2 text-xs font-semibold bg-gradient-to-r ${gradient} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              {t}
            </span>
          );
        })}
      </div>
    </CardSpotlight>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 w-full flex flex-col items-center overflow-hidden"
    >
      {/* Gradientes de fundo */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
          Projetos
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Trabalhos recentes que demonstram minha expertise em desenvolvimento front-end
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <ProjectSpotlightCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
