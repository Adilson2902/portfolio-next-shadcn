import { ArrowUpRight } from "lucide-react";
import { Button } from "aura-ui-components";
import { projects } from "@/lib/portfolio";
export default function Projects() {
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
          Uma seleção de projetos: o problema, o escopo desenvolvido e as
          tecnologias por trás de cada experiência.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-top">
              <span className="project-number" aria-hidden="true">
                {p.number}
              </span>
              <span className="project-category">{p.category}</span>
            </div>
            <h3>{p.name}</h3>
            <p className="project-description">{p.description}</p>
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
                <li key={t}>{t}</li>
              ))}
            </ul>
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
          </article>
        ))}
        <aside className="project-invitation">
          <p className="eyebrow">Seu próximo projeto</p>
          <h3>Uma boa ideia merece uma interface à altura.</h3>
          <p>
            Conte o que você precisa construir ou melhorar. Podemos começar pelo
            objetivo e definir um escopo viável.
          </p>
          <Button asChild variant="outline">
            <a href="#contact">Vamos conversar</a>
          </Button>
        </aside>
      </div>
    </section>
  );
}
