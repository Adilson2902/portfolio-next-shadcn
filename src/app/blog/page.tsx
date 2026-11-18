import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar, Clock, MessageCircle } from "lucide-react";
import { Card3D, Spotlight } from "aura-ui-effects";
import { TechIcon } from "@/components/TechIcon";
import { articles } from "@/lib/articles";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Guias & Artigos | Sites, Ferramentas Online, 3D e IA",
  description:
    "Artigos práticos de Adilson Adriano sobre SEO para empresas, calculadoras que geram leads, engenharia rápida com Cursor/Claude/GPT e interfaces 3D leves no celular.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${profile.site}/blog`,
    title: "Guias & Artigos | Adilson Adriano",
    description:
      "Estratégias reais de SEO, desenvolvimento com IA, web 3D e ferramentas online para atrair clientes e criar produtos digitais.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const whatsappHref = `${profile.whatsapp}?text=${encodeURIComponent(
    "Olá, Adilson! Li os guias do seu blog e quero conversar sobre um projeto para o meu negócio.",
  )}`;

  return (
    <div className="section-shell blog-shell">
      <div className="blog-topbar">
        <Link href="/" className="blog-back-link">
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Voltar ao portfólio</span>
        </Link>
        <span className="blog-topbar-pill">Guias técnicos &amp; estratégicos</span>
      </div>

      <header className="blog-hero">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Blog &amp; Arquitetura Digital
        </p>
        <h1>
          Conteúdo para atrair clientes,
          <span> escalar ferramentas e entregar rápido.</span>
        </h1>
        <p className="blog-hero-lead">
          Notas práticas baseadas na construção do Toolspace (+300 ferramentas no
          ar), do Aura UI e de projetos comerciais com Next.js, Three.js, Cursor,
          Claude e ChatGPT.
        </p>
      </header>

      <div className="blog-grid">
        {articles.map((article) => (
          <Card3D
            key={article.slug}
            maxTilt={7}
            scale={1.015}
            className="insight-card-wrap !p-0"
          >
            <article
              className="insight-card blog-article-card"
              style={{ "--insight-accent": article.accent } as CSSProperties}
            >
              <div className="insight-card-meta">
                <span className="insight-category">{article.category}</span>
                <div className="blog-card-dates">
                  <span>
                    <Calendar size={12} aria-hidden="true" />
                    {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                  </span>
                  <span>
                    <Clock size={12} aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h2>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className="insight-description">{article.description}</p>

              <p className="blog-takeaway-snippet">{article.takeaway}</p>

              <ul className="tags insight-tags" aria-label={`Tecnologias em ${article.title}`}>
                {article.stack.map((tech) => (
                  <li key={tech}>
                    <TechIcon name={tech} size={13} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/blog/${article.slug}`} className="insight-read-link">
                <BookOpen size={14} aria-hidden="true" />
                <span>Ler artigo completo</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          </Card3D>
        ))}
      </div>

      <Spotlight className="article-cta-box" size={440} intensity={0.12}>
        <p className="eyebrow">Aplicar no seu projeto</p>
        <h2>Quer tirar um site, ferramenta ou sistema do papel?</h2>
        <p>
          Simule o escopo ideal em 30 segundos ou envie uma mensagem direta para
          discutirmos a melhor solução para o seu momento.
        </p>
        <div className="actions">
          <a
            className="button primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Conversar no WhatsApp</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <Link className="button secondary" href="/#solutions">
            <span>Abrir Simulador de Projeto</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </Spotlight>
    </div>
  );
}
