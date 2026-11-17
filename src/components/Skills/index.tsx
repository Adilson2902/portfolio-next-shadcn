import type { CSSProperties } from "react";
import { Card3D } from "aura-ui-effects";
import { TechIcon, getTechMeta } from "@/components/TechIcon";

const CORE_SKILLS = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Expo",
  "Three.js",
  "Aura UI",
  "Supabase",
  "Google Gemini",
];

const DELIVERY_PILLARS = [
  {
    title: "Sites e funis comerciais",
    description:
      "Páginas rápidas, responsivas e estruturadas para aparecer no Google e conduzir visitantes ao contato no WhatsApp.",
  },
  {
    title: "Ferramentas e Micro-SaaS",
    description:
      "Calculadoras interativas e utilitários — na linha das +300 ferramentas do Toolspace — para gerar leads e produtos digitais próprios.",
  },
  {
    title: "Interfaces 3D e Design System",
    description:
      "Camadas interativas com Three.js, Motion e Aura UI para elevar a percepção da marca sem abrir mão da leveza no mobile.",
  },
];

export function Skills() {
  return (
    <section
      id="about"
      className="section-shell section-space about-section"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">Sobre o meu trabalho</p>
        <h2 id="about-title">
          Engenharia web, 3D e
          <br />
          produto digital no ar.
        </h2>
      </div>
      <div>
        <p className="about-intro">
          Sou Adilson Adriano, desenvolvedor front-end e criador de produtos
          digitais. Transformo objetivos de negócio em sites, sistemas web,
          ferramentas online e aplicativos mobile com foco em clareza e
          resultado.
        </p>
        <p>
          Da operação do Toolspace com mais de 300 ferramentas gratuitas à
          publicação do design system Aura UI, cada entrega une arquitetura
          organizada, SEO técnico, estética 3D e manutenção simples para crescer
          com o seu projeto.
        </p>

        <div className="about-pillars">
          {DELIVERY_PILLARS.map((pillar) => (
            <Card3D key={pillar.title} maxTilt={8} scale={1.015}>
              <article className="about-pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            </Card3D>
          ))}
        </div>

        <ul className="tags skills-tags" aria-label="Tecnologias utilizadas">
          {CORE_SKILLS.map((t) => {
            const { color } = getTechMeta(t);
            return (
              <li
                key={t}
                className="tech-tag-item"
                style={
                  {
                    "--tech-color": color,
                    borderColor: `${color}44`,
                  } as CSSProperties
                }
              >
                <TechIcon name={t} size={15} className="tech-tag-icon" />
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
