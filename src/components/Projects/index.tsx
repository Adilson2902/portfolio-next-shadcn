"use client";

import { useState, type CSSProperties } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Card3D, Spotlight } from "aura-ui-effects";
import { Button } from "aura-ui-components";
import { TechIcon } from "@/components/TechIcon";
import { profile, projects, type Project } from "@/lib/portfolio";
import { ProjectPreview3D } from "./ProjectPreview3D";

type ProjectFilter = "all" | "live" | "business";

interface FilterOption {
  id: ProjectFilter;
  label: string;
  count: number;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "Todos", count: projects.length },
  {
    id: "live",
    label: "Em produção",
    count: projects.filter((p) => p.status === "live").length,
  },
  {
    id: "business",
    label: "Modelos p/ Negócios",
    count: projects.filter((p) => p.audience === "business").length,
  },
];

function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "live") {
    return project.status === "live";
  }
  if (filter === "business") {
    return project.audience === "business";
  }
  return true;
}

function buildSimilarProjectHref(project: Project): string {
  const message = `Olá, Adilson! Vi o projeto ${project.name} (${project.nicheLabel}) no seu portfólio e quero algo nesse estilo para o meu negócio.`;
  return `${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = projects.filter((p) => matchesFilter(p, filter));

  return (
    <section
      id="projects"
      className="section-shell section-space"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Portfólio selecionado</p>
          <h2 id="projects-title">Código com contexto.</h2>
        </div>
        <p>
          Produtos próprios em operação e soluções prontas para adaptar a
          diferentes nichos: o problema, o escopo e a tecnologia por trás de
          cada entrega.
        </p>
      </div>

      <div
        className="project-filter-bar"
        role="group"
        aria-label="Filtrar projetos"
      >
        {FILTER_OPTIONS.map((option) => {
          const isActive = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              className={`project-filter-btn${isActive ? " active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setFilter(option.id)}
            >
              <span>{option.label}</span>
              <span className="project-filter-count" aria-hidden="true">
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      <MotionConfig reducedMotion="user">
        <div className="project-grid">
          <AnimatePresence initial={false}>
            {visibleProjects.map((p) => (
              <motion.div
                key={`${filter}-${p.name}`}
                className="project-motion-item"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
              >
                <Card3D
                  maxTilt={8}
                  scale={1.015}
                  className="project-card-wrap"
                >
                  <article
                    className="project-card"
                    style={
                      { "--project-accent": p.accent } as CSSProperties
                    }
                  >
                    <ProjectPreview3D project={p} />
                    <div className="project-top">
                      <span className="project-number" aria-hidden="true">
                        {p.number}
                      </span>
                      <div className="project-badges">
                        <span className="project-category">{p.category}</span>
                        <span
                          className={`status-badge ${p.status}`}
                          aria-label={
                            p.status === "live"
                              ? "Projeto no ar"
                              : "Deploy pausado"
                          }
                        >
                          {p.status === "live" ? "No ar" : "Pausado"}
                        </span>
                      </div>
                    </div>
                    <p className="project-niche">{p.nicheLabel}</p>
                    <h3>{p.name}</h3>
                    <p className="project-description">{p.description}</p>
                    <p className="project-commercial-pitch">
                      {p.commercialPitch}
                    </p>
                    <dl>
                      <div>
                        <dt>O desafio</dt>
                        <dd>{p.challenge}</dd>
                      </div>
                      <div>
                        <dt>O desenvolvimento</dt>
                        <dd>{p.delivery}</dd>
                      </div>
                    </dl>
                    <ul className="tags" aria-label={`Tecnologias de ${p.name}`}>
                      {p.stack.map((t) => (
                        <li key={t}>
                          <TechIcon name={t} size={14} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="project-footer">
                      {p.status === "live" ? (
                        <a
                          className="project-link"
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visitar {p.name}
                          <ArrowUpRight size={18} aria-hidden="true" />
                          <span className="sr-only"> (abre em nova aba)</span>
                        </a>
                      ) : (
                        <span className="project-link paused">
                          Deploy pausado
                        </span>
                      )}
                      <a
                        className="project-similar-link"
                        href={buildSimilarProjectHref(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={14} aria-hidden="true" />
                        Quero algo nesse estilo ↗
                        <span className="sr-only">
                          {" "}
                          sobre {p.name} (abre em nova aba)
                        </span>
                      </a>
                    </div>
                  </article>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>

          <Spotlight
            className="project-invitation-spotlight"
            size={460}
            intensity={0.14}
          >
            <aside className="project-invitation">
              <p className="eyebrow">Seu próximo projeto</p>
              <h3>
                Sites, ferramentas online e SaaS sob medida para o seu negócio.
              </h3>
              <p>
                Da página comercial que direciona clientes ao WhatsApp a
                calculadoras interativas, plataformas próprias ou sistemas com
                agenda e painel — definimos o escopo ideal para tirar sua ideia do
                papel.
              </p>
              <div className="project-invitation-actions">
                <Button asChild>
                  <a
                    href={`${profile.whatsapp}?text=${encodeURIComponent(
                      "Olá, Adilson! Vi seus projetos e quero orçar um site, ferramenta online ou sistema sob medida.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Solicitar orçamento no WhatsApp
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#solutions">
                    Simular escopo em 30s
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </aside>
          </Spotlight>
        </div>
      </MotionConfig>
    </section>
  );
}
