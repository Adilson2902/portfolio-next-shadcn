"use client";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatedShinyText, LayeredCard, PerspectiveGrid } from "aura-ui-effects";
import { Button } from "aura-ui-components";
import { HeroBackdrop } from "./HeroBackdrop";
import { TechIcon } from "@/components/TechIcon";
import { profile } from "@/lib/portfolio";

const HERO_TECHS = [
  "Next.js",
  "React",
  "TypeScript",
  "Three.js",
  "Cursor",
  "Claude",
];

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá, Adilson! Vi seu portfólio e quero conversar sobre um orçamento.",
  );

  return (
    <section
      id="home"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="hero-aurora-beam" aria-hidden="true" />
      <PerspectiveGrid className="hero-perspective-grid" aria-hidden="true" />
      <HeroBackdrop />
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />{" "}
          <AnimatedShinyText>
            Sites comerciais · Ferramentas SaaS · Entrega ágil com IA &amp; 3D
          </AnimatedShinyText>
        </p>
        <h1 id="hero-title">
          <span>Adilson Adriano</span>Sites, sistemas e ferramentas{" "}
          <em>feitos para vender e escalar.</em>
        </h1>
        <p className="hero-description">
          Desenvolvo sites de alta conversão para empresas, sistemas web sob
          medida, calculadoras interativas e aplicativos mobile com experiência
          3D. Criador do <strong>Toolspace</strong> — no ar com mais de 400
          ferramentas gratuitas e app Android.
        </p>
        <div className="hero-velocity-strip">
          <Zap size={14} aria-hidden="true" />
          <TechIcon name="Cursor" size={14} />
          <TechIcon name="Claude" size={14} />
          <TechIcon name="ChatGPT / OpenAI" size={14} />
          <span>
            Fluxo acelerado com Cursor, Claude &amp; GPT · Código próprio testado
          </span>
        </div>
        <div className="actions">
          <Button asChild size="lg" variant="gradient">
            <a href="#projects">
              Conhecer os projetos <ArrowDownRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="lg" variant="glow">
            <a
              href={`${profile.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-cta"
            >
              <MessageCircle aria-hidden="true" /> Orçamento no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              Conversar sobre um projeto{" "}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="hero-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <button type="button" onClick={() => window.print()}>
            <Download size={15} aria-hidden="true" /> Salvar currículo em PDF
          </button>
        </div>
      </div>
      <div className="portrait-panel">
        <LayeredCard className="portrait-3d-card" maxTilt={10} depth={24}>
          <div className="portrait-frame" data-depth="2">
            <Image
              src="/myphoto.jpeg"
              alt="Adilson Adriano"
              fill
              priority
              sizes="(max-width: 760px) 85vw, 400px"
              className="portrait"
            />
          </div>
          <div
            className="portrait-badge portrait-badge-availability"
            data-depth="5"
          >
            <span className="portrait-badge-dot" aria-hidden="true" />
            <span>Disponível p/ novos projetos</span>
          </div>
          <div className="portrait-badge portrait-badge-tools" data-depth="6">
            <Sparkles size={13} aria-hidden="true" />
            <span>400+ ferramentas no ar</span>
          </div>
          <div className="portrait-tech-strip" data-depth="5">
            {HERO_TECHS.map((tech) => (
              <span key={tech} className="portrait-tech-pill" title={tech}>
                <TechIcon name={tech} size={15} />
                <span className="sr-only">{tech}</span>
              </span>
            ))}
          </div>
        </LayeredCard>
        <div className="portrait-caption">
          <span>Do conceito à interface 3D em produção.</span>
          <span>Next.js · Three.js · Cursor &amp; Claude · React Native</span>
        </div>
      </div>
    </section>
  );
}
