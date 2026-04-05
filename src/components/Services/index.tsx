"use client";

import React from "react";
import { motion } from "motion/react";
import { FocusCards, FocusCard } from "@/components/ui/focus-cards";
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
  const cards: FocusCard[] = [
    {
      title: "Site Institucional Next.js",
      description: "Websites corporativos rápidos, indexáveis e otimizados para SEO com SSR/SSG.",
      src: "/services/institutional.png",
      icon: <Globe className="h-5 w-5 text-purple-400" />,
    },
    {
      title: "E-commerce Completo",
      description: "Loja virtual com carrinho, checkout, pagamento integrado e painel admin.",
      src: "/services/ecommerce.png",
      icon: <ShoppingCart className="h-5 w-5 text-emerald-400" />,
    },
    {
      title: "Landing Pages de Alta Conversão",
      description: "Páginas focadas em CRO, testes A/B e funis de conversão otimizados.",
      src: "/services/landing.png",
      icon: <Target className="h-5 w-5 text-pink-400" />,
    },
    {
      title: "Apps Mobile React Native",
      description: "Aplicativos nativos para iOS e Android com uma única base de código.",
      src: "/services/mobile.png",
      icon: <Smartphone className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Dashboards & Painéis Admin",
      description: "Interfaces administrativas com autenticação, permissões RBAC e analytics.",
      src: "/services/dashboard.png",
      icon: <LayoutDashboard className="h-5 w-5 text-amber-400" />,
    },
    {
      title: "Otimização de Performance",
      description: "Core Web Vitals, Lighthouse 90+, bundle optimization e lazy loading.",
      src: "/services/performance.png",
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "PWA — Apps Web Progressivos",
      description: "Aplicações offline-first com service workers, push notifications e instalação.",
      src: "/services/pwa.png",
      icon: <Rocket className="h-5 w-5 text-blue-400" />,
    },
    {
      title: "SPA — Single Page Applications",
      description: "Aplicações dinâmicas e interativas com React, state management e routing.",
      src: "/services/spa.png",
      icon: <Workflow className="h-5 w-5 text-rose-400" />,
    },
    {
      title: "Portais & Plataformas",
      description: "Soluções multi-tenant escaláveis com arquitetura modular e APIs robustas.",
      src: "/services/portal.png",
      icon: <Globe className="h-5 w-5 text-teal-400" />,
    },
    {
      title: "Blogs & CMS Headless",
      description: "Integração com Contentful, Strapi ou Sanity para gestão de conteúdo.",
      src: "/services/blog.png",
      icon: <CheckCircle2 className="h-5 w-5 text-lime-400" />,
    },
    {
      title: "Design Systems",
      description: "Componentes reutilizáveis, tokens de design e documentação interativa.",
      src: "/services/designsystem.png",
      icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
    },
    {
      title: "Migração & Refatoração",
      description: "Modernização de código legado, migração de frameworks e otimização de bundles.",
      src: "/services/migration.png",
      icon: <BarChart3 className="h-5 w-5 text-orange-400" />,
    },
  ];

  const items = [
    {
      icon: <Gauge className="h-6 w-6" />,
      label: "Performance",
      desc: "Core Web Vitals otimizados, carregamento < 2s, Lighthouse score 90+.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      label: "SEO Técnico",
      desc: "Meta tags estruturadas, sitemap XML, robots.txt, schema markup e links internos otimizados.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      label: "Integrações",
      desc: "APIs REST/GraphQL, webhooks, pagamentos (Stripe/Mercado Pago), e-mail/SMS, WhatsApp Business.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      label: "Analytics",
      desc: "Google Analytics 4, Meta Pixel, Tag Manager, eventos customizados e dashboards de conversão.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      label: "Qualidade",
      desc: "WCAG 2.1 AA, design responsivo mobile-first, testes automatizados e code review.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      label: "Deploy & Suporte",
      desc: "CI/CD automatizado, hospedagem (Vercel/AWS), documentação completa e 30 dias de suporte.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="relative w-full flex flex-col items-center py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-14"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">
            O que eu faço
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
          Serviços
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto px-4">
          Soluções modernas e performáticas para elevar sua presença digital
        </p>
      </motion.div>

      {/* Service cards with images */}
      <div className="w-full relative z-10">
        <FocusCards cards={cards} />
      </div>

      {/* What you receive section */}
      <div id="win" className="mt-28 w-full max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">
              Garantia de qualidade
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center">
            <span className="gradient-text">O que você recebe</span>
          </h3>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
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
                <CardBody className="group/card w-full h-auto rounded-2xl p-6 glass-effect border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
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
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${it.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </CardBody>
              </CardContainer>
            </motion.li>
          ))}
        </ul>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-500/40 transition-all duration-300 text-base"
          >
            Solicitar orçamento grátis
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-gray-300 border border-white/20 hover:border-purple-500/50 hover:text-white glass-effect transition-all duration-300 text-base"
          >
            Ver projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
