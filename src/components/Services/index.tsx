"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  CheckCircle2,
  Gauge,
  Rocket,
  ShieldCheck,
  BarChart3,
  Workflow,
} from "lucide-react";

export default function Services() {
  const cards = [
    {
      title: "Site institucional Next.js — rápido e indexável",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Loja virtual — checkout enxuto que converte",
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Landing de campanha — CRO + testes A/B",
      src: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "App mobile React Native — iOS e Android",
      src: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Dashboard/Admin — auth, RBAC e tabelas pro",
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Otimização de performance — Core Web Vitals",
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=3000&auto=format&fit=crop",
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
      <h2 className="text-3xl font-bold mb-10 text-primary">Serviços</h2>

      {/* Cards focados no produto/resultado (sem repetir a promessa da Home) */}
      <div className="w-full">
        <FocusCards cards={cards} />
      </div>

      {/* O que você recebe (evita repetir copy da Home) */}
      <div className="mt-10 w-full max-w-5xl px-4">
        <h3 className="text-xl font-semibold mb-4">
          O que você recebe em qualquer projeto
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <li
              key={i}
              className="rounded-2xl p-4 bg-primary/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg p-2 bg-primary/10 text-primary">
                  {it.icon}
                </div>
                <div>
                  <p className="font-medium">{it.label}</p>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
