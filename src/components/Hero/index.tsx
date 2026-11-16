"use client";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { AnimatedShinyText } from "aura-ui-effects";
import { Button } from "aura-ui-components";
import { profile } from "@/lib/portfolio";
export function Hero() {
  return (
    <section
      id="home"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />{" "}
          <AnimatedShinyText>Desenvolvimento web & mobile</AnimatedShinyText>
        </p>
        <h1 id="hero-title">
          <span>Adilson Adriano</span>Interfaces que conectam{" "}
          <em>ideias e pessoas.</em>
        </h1>
        <p className="hero-description">
          Desenvolvedor Front-end. Crio sites e aplicações com React, Next.js e
          React Native, com atenção à clareza, acessibilidade e experiência de
          uso.
        </p>
        <div className="actions">
          <Button asChild size="lg">
            <a href="#projects">
              Conhecer os projetos <ArrowDownRight aria-hidden="true" />
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
          <button onClick={() => window.print()}>
            <Download size={15} aria-hidden="true" /> Salvar currículo em PDF
          </button>
        </div>
      </div>
      <div className="portrait-panel">
        <div className="portrait-frame">
          <Image
            src="/myphoto.jpeg"
            alt="Adilson Adriano"
            fill
            priority
            sizes="(max-width: 760px) 85vw, 400px"
            className="portrait"
          />
        </div>
        <div className="portrait-caption">
          <span>Do conceito à interface.</span>
          <span>React · Next.js · React Native</span>
        </div>
      </div>
    </section>
  );
}
