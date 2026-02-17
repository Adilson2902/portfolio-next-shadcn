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

function ProjectSpotlightCard(p: Project) {
  return (
    <CardSpotlight className="h-full w-full flex flex-col overflow-hidden group modern-hover bg-black/40 backdrop-blur-sm">
      {/* COVER com overlay gradiente */}
      <div className="relative z-20 overflow-hidden rounded-t-2xl h-48 shrink-0">
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

      {/* CONTEÚDO com padding consistente e fundo escuro */}
      <div className="relative z-20 p-6 flex flex-col flex-1 bg-gradient-to-b from-black/60 to-black/80">
        {/* TÍTULO + LINK */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 gradient-text line-clamp-1">{p.title}</h3>
          <a
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group/link"
          >
            <Globe className="h-4 w-4" />
            <span className="underline underline-offset-4">Visitar site</span>
            <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* DESCRIÇÃO */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>

        {/* O QUE EU FIZ */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
              <BadgeCheck className="h-4 w-4 text-white" />
            </div>
            <p className="text-white font-semibold text-sm">Desenvolvimento</p>
          </div>
          <ul className="space-y-1.5">
            {p.whatIDid.slice(0, 4).map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-1.5 shrink-0"></div>
                <span className="line-clamp-1">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMPACTO / RESULTADOS */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <p className="text-white font-semibold text-sm">Resultados</p>
          </div>
          <ul className="space-y-1.5">
            {p.impact.slice(0, 4).map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 mt-1.5 shrink-0"></div>
                <span className="line-clamp-1">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* STACK TAGS com gradientes - sempre no final */}
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((t, idx) => {
              const gradients = [
                "from-purple-500 to-violet-500",
                "from-pink-500 to-rose-500",
                "from-cyan-500 to-blue-500",
                "from-emerald-500 to-teal-500",
              ];
              const gradient = gradients[idx % gradients.length];
              
              return (
                <span
                  key={t}
                  className={`rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r ${gradient} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
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
