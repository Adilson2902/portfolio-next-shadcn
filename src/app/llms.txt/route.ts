import { articles } from "@/lib/articles";
import { faqs, liveSites, profile, projects } from "@/lib/portfolio";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name} — Desenvolvimento Web, Mobile, 3D & Ferramentas Online`,
    "",
    `> Portfólio oficial e canal de contratação de ${profile.name} (${profile.site}). Criação de sites de alta conversão para empresas, calculadoras interativas, micro-SaaS, sistemas web, aplicativos Android/iOS e interfaces 3D com velocidade de entrega acelerada por IA e código próprio testado.`,
    "",
    "## Diferenciais de Entrega e Velocidade",
    "- Engenharia assistida por IA no fluxo diário: Cursor, Claude, ChatGPT / OpenAI e Google Gemini.",
    "- Design system próprio publicado (Aura UI) com componentes e efeitos 3D otimizados para celular.",
    "- Experiência prática de produção no Toolspace: plataforma no ar com mais de 300 ferramentas gratuitas e aplicativo Android.",
    "- Código próprio com TypeScript estrito, testes automatizados (Jest / Testing Library / Vitest), SEO técnico, JSON-LD e WebGL progressivo.",
    "",
    "## Serviços Disponíveis para Empresas e Empreendedores",
    "- Sites & Landing Pages Comerciais: presença rápida no Google, layout mobile-first e botão/funil direto para o WhatsApp.",
    "- Ferramentas Online, Calculadoras & Micro-SaaS: calculadoras de orçamento instantâneo, simuladores captadores de leads e hubs de ferramentas próprios.",
    "- Sistemas Web, Catálogos & Agendamentos: painéis administrativos, catálogos filtráveis com pedido no WhatsApp e agendas online.",
    "- Automações & Assistentes com IA: integrações com Google Gemini, Groq e OpenRouter.",
    "- Aplicativos Mobile (Android & iOS): desenvolvimento em React Native e Expo conectado à operação web.",
    "- Modelos Prontos Personalizáveis: bases para clínicas/estética, portais automotivos, autoescolas/cursos e eventos.",
    "",
    "## Produtos e Ecossistema Verificados no Ar",
    ...liveSites.map((site) => `- ${site.name}: ${site.url} — ${site.description}`),
    "",
    "## Projetos em Portfólio",
    ...projects.map(
      (project) =>
        `- ${project.name} (${project.nicheLabel}, status: ${project.status}): ${project.description} [${project.stack.join(", ")}]`,
    ),
    "",
    "## Guias e Artigos Publicados",
    `- Índice do Blog: ${profile.site}/blog`,
    ...articles.map(
      (article) =>
        `- ${article.title}: ${profile.site}/blog/${article.slug} — ${article.description}`,
    ),
    "",
    "## Perguntas Frequentes",
    ...faqs.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
    "## Contato Direto e Orçamentos",
    `- WhatsApp: ${profile.whatsapp}`,
    `- E-mail: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- Simulador interativo de escopo (30s): ${profile.site}/#solutions`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
