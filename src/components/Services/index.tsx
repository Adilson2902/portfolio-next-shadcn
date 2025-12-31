"use client";

import React from "react";
import { motion } from "motion/react";
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
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-purple-600/30 via-indigo-500/20 to-transparent",
    },
    {
      title: "Loja virtual — checkout enxuto que converte",
      icon: <ShoppingCart className="h-8 w-8 text-emerald-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-emerald-600/30 via-teal-500/20 to-transparent",
    },
    {
      title: "Landing de campanha — CRO + testes A/B",
      icon: <Target className="h-8 w-8 text-pink-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-pink-600/30 via-rose-500/20 to-transparent",
    },
    {
      title: "App mobile React Native — iOS e Android",
      icon: <Smartphone className="h-8 w-8 text-violet-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-transparent",
    },
    {
      title: "Dashboard/Admin — auth, RBAC e tabelas pró",
      icon: <LayoutDashboard className="h-8 w-8 text-amber-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-amber-600/30 via-orange-500/20 to-transparent",
    },
    {
      title: "Otimização de performance — Core Web Vitals",
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      backgroundClassName:
        "bg-gradient-to-br from-cyan-600/30 via-blue-500/20 to-transparent",
    },
  ];

  const items = [
    {
      icon: <Gauge className="h-6 w-6" />,
      label: "Velocidade",
      desc: "Meta CWV/Lighthouse > 90 quando tecnicamente viável.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      label: "SEO técnico",
      desc: "Meta tags, sitemap, robots, schema e links internos.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      label: "Fluxos prontos",
      desc: "Formulários, e-mail/Whats, integrações essenciais.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      label: "Métricas",
      desc: "GA4, Pixel/Tags e eventos de conversão configurados.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      label: "Qualidade",
      desc: "Acessibilidade, responsivo e testes básicos de regressão.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      label: "Handoff",
      desc: "Deploy (Vercel/Store), manual de uso e 30 dias de suporte.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="relative w-full flex flex-col items-center py-20 overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
          Serviços
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto px-4">
          Soluções modernas e performáticas para elevar sua presença digital
        </p>
      </motion.div>

      {/* Cards focados no produto/resultado */}
      <div className="w-full relative z-10">
        <FocusCards cards={cards} />
      </div>

      {/* O que você recebe */}
      <div id="win" className="mt-24 w-full max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            <span className="gradient-text">O que você recebe</span>
          </h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Em qualquer projeto, garantimos qualidade e profissionalismo
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.li 
              key={i} 
              className="flex justify-center w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CardContainer containerClassName="py-0 w-full">
                <CardBody className={`group/card w-full h-auto rounded-2xl p-6 glass-effect border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300`}>
                  <div className="flex items-start gap-4 mb-4">
                    <CardItem
                      translateZ={100}
                      className={`shrink-0 rounded-xl p-3 bg-gradient-to-br ${it.gradient} shadow-lg`}
                    >
                      {it.icon}
                    </CardItem>
                    <CardItem translateZ={70} className="font-bold text-lg text-white">
                      {it.label}
                    </CardItem>
                  </div>
                  <CardItem
                    as="p"
                    translateZ={50}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    {it.desc}
                  </CardItem>
                  
                  {/* Efeito de brilho no hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${it.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                </CardBody>
              </CardContainer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
