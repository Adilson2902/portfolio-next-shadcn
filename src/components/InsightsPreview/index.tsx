import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { Card3D } from "aura-ui-effects";
import { TechIcon } from "@/components/TechIcon";
import { articles } from "@/lib/articles";

export default function InsightsPreview() {
  return (
    <section
      id="insights"
      className="section-shell section-space"
      aria-labelledby="insights-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Conteúdo &amp; SEO estratégico</p>
          <h2 id="insights-title">
            Guias práticos sobre sites,
            <br />
            ferramentas e entrega com IA.
          </h2>
        </div>
        <div className="insights-heading-aside">
          <p>
            Artigos escritos para ajudar empresas e criadores a escolherem a
            melhor arquitetura para ranquear no Google, converter no WhatsApp e
            lançar produtos digitais mais rápido.
          </p>
          <Link href="/blog" className="insights-all-link">
            <span>Explorar todos os guias</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="insights-grid">
        {articles.map((article) => (
          <Card3D
            key={article.slug}
            maxTilt={7}
            scale={1.015}
            className="insight-card-wrap !p-0"
          >
            <article
              className="insight-card"
              style={{ "--insight-accent": article.accent } as CSSProperties}
            >
              <div className="insight-card-meta">
                <span className="insight-category">{article.category}</span>
                <span className="insight-readtime">
                  <Clock size={12} aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>

              <h3>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h3>

              <p className="insight-description">{article.description}</p>

              <ul className="tags insight-tags" aria-label={`Temas de ${article.title}`}>
                {article.stack.map((tech) => (
                  <li key={tech}>
                    <TechIcon name={tech} size={13} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/blog/${article.slug}`} className="insight-read-link">
                <BookOpen size={14} aria-hidden="true" />
                <span>Ler guia completo</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          </Card3D>
        ))}
      </div>
    </section>
  );
}
