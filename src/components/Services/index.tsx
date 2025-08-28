"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  CheckCircle2,
  Gauge,
  Rocket,
  ShieldCheck,
  BarChart3,
  Workflow,
  Globe,
  ShoppingCart,
  Target,
  Smartphone,
  LayoutDashboard,
  Zap,
} from "lucide-react";

export default function Services() {
  const cards = [
    {
      title: "Site institucional Next.js — rápido e indexável",
      icon: <Globe className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-transparent dark:from-indigo-500/25 dark:via-sky-400/15",
    },
    {
      title: "Loja virtual — checkout enxuto que converte",
      icon: <ShoppingCart className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-transparent dark:from-emerald-500/25 dark:via-teal-400/15",
    },
    {
      title: "Landing de campanha — CRO + testes A/B",
      icon: <Target className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-pink-500/20 via-rose-400/10 to-transparent dark:from-pink-500/25 dark:via-rose-400/15",
    },
    {
      title: "App mobile React Native — iOS e Android",
      icon: <Smartphone className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-transparent dark:from-violet-500/25 dark:via-fuchsia-400/15",
    },
    {
      title: "Dashboard/Admin — auth, RBAC e tabelas pró",
      icon: <LayoutDashboard className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-amber-500/20 via-orange-400/10 to-transparent dark:from-amber-500/25 dark:via-orange-400/15",
    },
    {
      title: "Otimização de performance — Core Web Vitals",
      icon: <Zap className="h-8 w-8" />,
      backgroundClassName:
        "bg-gradient-to-br from-cyan-500/20 via-blue-400/10 to-transparent dark:from-cyan-500/25 dark:via-blue-400/15",
    },
  ];

  const items = [
    {
      icon: <Gauge className="h-5 w-5" />,
      label: "Velocidade",
      desc: "Meta CWV/Lighthouse > 90 quando tecnicamente viável.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      label: "SEO técnico",
      desc: "Meta tags, sitemap, robots, schema e links internos.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      label: "Fluxos prontos",
      desc: "Formulários, e-mail/Whats, integrações essenciais.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Métricas",
      desc: "GA4, Pixel/Tags e eventos de conversão configurados.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      label: "Qualidade",
      desc: "Acessibilidade, responsivo e testes básicos de regressão.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      label: "Handoff",
      desc: "Deploy (Vercel/Store), manual de uso e 30 dias de suporte.",
    },
  ];

  return (
    <section id="services" className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 mt-10 text-primary">Serviços</h2>

      {/* Cards focados no produto/resultado (sem repetir a promessa da Home) */}
      <div className="w-full">
        <FocusCards cards={cards} />
      </div>

      {/* O que você recebe (evita repetir copy da Home) */}
      <div id="win" className="mt-20 w-full max-w-5xl px-4">
        <h3 className="text-xl text-primary font-semibold mb-10">
          O que você recebe em qualquer projeto
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {items.map((it, i) => (
            <li key={i} className="flex justify-center w-full">
              <CardContainer containerClassName="py-0 w-full">
                <CardBody className="group/card w-52 sm:w-60 h-28 sm:h-32 rounded-xl p-3 border border-primary/40 bg-primary text-primary-foreground shadow-sm">
                  <div className="flex items-center gap-3">
                    <CardItem
                      translateZ={100}
                      className="shrink-0 rounded-lg p-2 bg-white/15 text-primary-foreground"
                    >
                      {it.icon}
                    </CardItem>
                    <CardItem translateZ={70} className="font-medium">
                      {it.label}
                    </CardItem>
                  </div>
                  <CardItem
                    as="p"
                    translateZ={50}
                    className="mt-3 text-sm text-primary-foreground/80 leading-snug"
                  >
                    {it.desc}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
