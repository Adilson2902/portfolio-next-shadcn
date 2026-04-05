"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TrendingUp, BadgeCheck, ExternalLink, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  website: string;
  cover: string;
  description: string;
  whatIDid: string[];
  impact: string[];
  stack: string[];
  year?: string;
};

const projects: Project[] = [
  {
    title: "Auto Escola Manager",
    website: "https://auto-escola-manager-uub5.vercel.app",
    cover: "/no-img.png",
    description:
      "Sistema completo de gestão para auto escola com controle de alunos, turmas, instrutores e agendamentos.",
    whatIDid: [
      "Dashboard administrativo em Next.js",
      "Sistema de gestão de alunos e turmas",
      "Controle de instrutores e veículos",
      "Agendamento de aulas práticas",
    ],
    impact: [
      "Gestão centralizada e eficiente",
      "Redução de tempo administrativo",
      "Interface intuitiva para operadores",
      "Relatórios e métricas em tempo real",
    ],
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    year: "2025",
  },
  {
    title: "Michelle Aleixo Fisioterapia",
    website: "https://site-michelle-aleixo.vercel.app",
    cover: "/no-img.png",
    description:
      "Site profissional para fisioterapeuta especializada em traumato-ortopedia, neurofuncional e geriatria.",
    whatIDid: [
      "Landing page moderna em Next.js",
      "Design responsivo e acessível",
      "Sistema de agendamento integrado",
      "SEO otimizado para buscas locais",
    ],
    impact: [
      "Interface profissional e confiável",
      "Aumento na captação de pacientes",
      "Experiência mobile otimizada",
      "Performance Lighthouse 95+",
    ],
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    year: "2025",
  },
  {
    title: "Invista no Chamado do Leo",
    website: "https://www.invistaleo.com.br",
    cover: "/no-img.png",
    description:
      "Plataforma de crowdfunding para apoio à formação ministerial com sistema de doações e acompanhamento.",
    whatIDid: [
      "Site institucional em Next.js",
      "Integração com sistema de pagamentos",
      "Design emocional e storytelling",
      "Painel de acompanhamento de metas",
    ],
    impact: [
      "Campanha de arrecadação bem-sucedida",
      "Interface intuitiva para doações",
      "Compartilhamento em redes sociais",
      "Transparência nas contribuições",
    ],
    stack: ["Next.js", "React", "Tailwind", "Stripe"],
    year: "2025",
  },
  {
    title: "Sites para Casamento",
    website: "https://www.sitesparacasamento.com.br",
    cover: "/no-img.png",
    description:
      "Plataforma para criação de sites personalizados de casamento com convites digitais e lista de presentes.",
    whatIDid: [
      "Site em Next.js com design elegante",
      "Sistema de convites digitais",
      "Integração com lista de presentes",
      "Galeria de fotos do casal",
    ],
    impact: [
      "Interface romântica e responsiva",
      "Fácil personalização pelos noivos",
      "Compartilhamento via redes sociais",
      "Performance otimizada",
    ],
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    year: "2025",
  },
  {
    title: "Veículos Maceió",
    website: "https://www.veiculosmaceio.com.br",
    cover: "/no-img.png",
    description:
      "Hub automotivo conectando compradores a vendedores de veículos e serviços automotivos em Maceió.",
    whatIDid: [
      "Site em Next.js com SSR e SEO local",
      "App React Native iOS/Android",
      "Sistema de leads via WhatsApp API",
      "Dashboard administrativo",
    ],
    impact: [
      "200% aumento no tráfego orgânico",
      "500+ leads qualificados/mês",
      "App com 4.8★ nas lojas",
      "Lighthouse 95+",
    ],
    stack: ["Next.js", "React Native", "TypeScript", "Tailwind"],
    year: "2024",
  },
  {
    title: "Estetico Masso",
    website: "https://www.esteticomasso.com.br",
    cover:
      "https://www.esteticomasso.com.br/_next/image?url=%2Fassets%2Fhome.png&q=75&w=1920",
    description:
      "Plataforma de agendamento para esteticistas com gestão de pacientes e serviços.",
    whatIDid: [
      "Plataforma web com agendamento em tempo real",
      "App React Native para clientes",
      "Notificações automáticas e-mail/SMS",
      "Painel administrativo completo",
    ],
    impact: [
      "35% mais conversões",
      "60% redução em no-shows",
      "Core Web Vitals 95+",
      "Destaque em buscas locais",
    ],
    stack: ["Next.js", "React Native", "Tailwind", "Firebase"],
    year: "2025",
  },
];

const stackGradients = [
  "from-purple-500 to-violet-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
];

function ProjectCard(p: Project) {
  return (
    <CardSpotlight className="h-full w-full flex flex-col overflow-hidden group p-0 rounded-2xl border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 bg-black/50">
      {/* Cover */}
      <div className="relative z-20 overflow-hidden rounded-t-2xl h-44 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <Image
          src={p.cover}
          alt={`${p.title} — captura do projeto`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {p.year && (
          <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white">
            {p.year}
          </div>
        )}
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg line-clamp-1">
            {p.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="relative z-20 flex flex-col flex-1 p-5 gap-4">
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{p.description}</p>

        {/* Desenvolvimento */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
              <BadgeCheck className="h-3 w-3 text-white" />
            </div>
            <p className="text-white font-semibold text-xs uppercase tracking-wide">Desenvolvimento</p>
          </div>
          <ul className="space-y-1">
            {p.whatIDid.slice(0, 3).map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span className="line-clamp-1">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resultados */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
              <TrendingUp className="h-3 w-3 text-white" />
            </div>
            <p className="text-white font-semibold text-xs uppercase tracking-wide">Resultados</p>
          </div>
          <ul className="space-y-1">
            {p.impact.slice(0, 3).map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span className="line-clamp-1">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((t, idx) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold bg-gradient-to-r ${stackGradients[idx % stackGradients.length]} text-white`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA button — sempre visível e em destaque */}
        <a
          href={p.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-500/40 transition-all duration-300 group/cta"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="h-4 w-4" />
          <span>Ver projeto</span>
          <ArrowUpRight className="h-4 w-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-200" />
        </a>
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">
            Portfólio
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Projetos</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trabalhos recentes que demonstram expertise em desenvolvimento front-end
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl w-full">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
