import { articles } from "@/lib/articles";
import { faqs, liveSites, profile, projects } from "@/lib/portfolio";

export function JsonLd() {
  const liveProducts = projects.filter((project) => project.status === "live");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${profile.site}/#website`,
        url: profile.site,
        name: "Adilson Adriano — Sites, Sistemas Web, Ferramentas Online & 3D",
        inLanguage: "pt-BR",
        description:
          "Portfólio e estúdio de desenvolvimento de Adilson Adriano: sites comerciais para empresas, calculadoras e micro-SaaS, aplicativos mobile e interfaces 3D com entrega ágil assistida por IA.",
      },
      {
        "@type": "Person",
        "@id": `${profile.site}/#person`,
        name: profile.name,
        url: profile.site,
        email: profile.email,
        jobTitle: "Desenvolvedor Front-end, Web 3D & Criador de Produtos Digitais",
        sameAs: [
          profile.linkedin,
          ...liveSites
            .map((site) => site.url)
            .filter((url) => url !== profile.site),
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "React Native",
          "Expo",
          "TypeScript",
          "Three.js",
          "WebGL",
          "Tailwind CSS",
          "Aura UI Design System",
          "Cursor",
          "Claude",
          "ChatGPT",
          "Google Gemini",
          "SEO Técnico",
          "Micro-SaaS",
          "Calculadoras Interativas",
          "Supabase",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${profile.site}/#service`,
        name: "Adilson Adriano — Criação de Sites, Sistemas Web, Ferramentas Online & Apps",
        url: profile.site,
        email: profile.email,
        telephone: profile.phone,
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
        provider: { "@id": `${profile.site}/#person` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções digitais sob medida",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sites & Landing Pages Comerciais para Empresas",
                description:
                  "Sites rápidos no celular, preparados para o Google (SEO) e com funil direto para orçamento no WhatsApp.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ferramentas Online, Calculadoras Interativas & Micro-SaaS",
                description:
                  "Utilitários e calculadoras sob medida para captar leads orgânicos ou lançar produtos digitais próprios.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sistemas Web, Catálogos, Agendas & Apps Mobile",
                description:
                  "Painéis administrativos, catálogos filtráveis, agendas online e aplicativos Android/iOS em React Native e Expo.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interfaces 3D & Automações com IA",
                description:
                  "Experiências interativas com Three.js/WebGL e assistentes conectados a Google Gemini, Claude e LLMs.",
              },
            },
          ],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${profile.site}/#products`,
        name: "Produtos e ecossistema em produção",
        itemListElement: liveProducts.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: project.url,
          description: project.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${profile.site}/#guides`,
        name: "Guias sobre SEO, Ferramentas Online, IA e 3D",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: article.title,
          url: `${profile.site}/blog/${article.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${profile.site}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
