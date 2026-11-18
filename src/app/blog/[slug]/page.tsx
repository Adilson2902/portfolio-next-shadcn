import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Lightbulb,
  MessageCircle,
  Tag,
} from "lucide-react";
import { Spotlight } from "aura-ui-effects";
import { TechIcon } from "@/components/TechIcon";
import { articles, getArticleBySlug } from "@/lib/articles";
import { profile } from "@/lib/portfolio";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      type: "article",
      locale: "pt_BR",
      url: `${profile.site}/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [profile.name],
      tags: article.keywords,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((item) => item.slug !== article.slug);
  const whatsappHref = `${profile.whatsapp}?text=${encodeURIComponent(article.whatsappPrompt)}`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        inLanguage: "pt-BR",
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        mainEntityOfPage: `${profile.site}/blog/${article.slug}`,
        keywords: article.keywords.join(", "),
        author: {
          "@type": "Person",
          name: profile.name,
          url: profile.site,
        },
        publisher: {
          "@type": "Person",
          name: profile.name,
          url: profile.site,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: profile.site,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${profile.site}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${profile.site}/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="section-shell article-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <div className="blog-topbar">
        <Link href="/blog" className="blog-back-link">
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Todos os artigos</span>
        </Link>
        <Link href="/" className="blog-back-link">
          <span>Portfólio principal</span>
        </Link>
      </div>

      <article className="article-container">
        <header className="article-header">
          <div className="insight-card-meta">
            <span className="insight-category">{article.category}</span>
            <div className="blog-card-dates">
              <span>
                <Calendar size={13} aria-hidden="true" />
                {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
              </span>
              <span>
                <Clock size={13} aria-hidden="true" />
                {article.readTime} de leitura
              </span>
            </div>
          </div>

          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>

          <ul className="tags article-stack" aria-label="Tecnologias relacionadas">
            {article.stack.map((tech) => (
              <li key={tech}>
                <TechIcon name={tech} size={14} />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </header>

        <aside className="article-takeaway" aria-label="Resumo estratégico">
          <div className="article-takeaway-head">
            <Lightbulb size={16} aria-hidden="true" />
            <span>Em resumo</span>
          </div>
          <p>{article.takeaway}</p>
        </aside>

        <div className="article-prose">
          {article.sections.map((section) => (
            <section key={section.heading} className="article-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="article-footer-tags">
          {article.keywords.map((keyword) => (
            <span key={keyword} className="article-keyword-chip">
              <Tag size={12} aria-hidden="true" />
              {keyword}
            </span>
          ))}
        </footer>
      </article>

      <Spotlight className="article-cta-box" size={440} intensity={0.12}>
        <p className="eyebrow">Próximo passo</p>
        <h2>Quer aplicar essa estratégia no seu site ou ferramenta?</h2>
        <p>
          Converse comigo no WhatsApp ou use o simulador interativo para montar
          o escopo ideal do seu projeto.
        </p>
        <div className="actions">
          <a
            className="button primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Orçar pelo WhatsApp</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <Link className="button secondary" href="/#solutions">
            <span>Simular escopo em 30s</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </Spotlight>

      <section className="article-related" aria-labelledby="related-heading">
        <h2 id="related-heading">Continue explorando</h2>
        <div className="article-related-grid">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="article-related-card"
            >
              <span className="insight-category">{item.category}</span>
              <h3>{item.title}</h3>
              <span className="insight-read-link">
                <span>Ler guia</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
