export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  accent: string;
  keywords: string[];
  stack: string[];
  takeaway: string;
  sections: ArticleSection[];
  whatsappPrompt: string;
}

export const articles: Article[] = [
  {
    slug: "site-profissional-que-gera-clientes-whatsapp",
    title:
      "O que um site profissional precisa ter para aparecer no Google e gerar orçamentos no WhatsApp",
    seoTitle:
      "Site Profissional para Empresas: Como Aparecer no Google e Gerar Orçamentos no WhatsApp",
    description:
      "Guia prático de arquitetura, SEO técnico, velocidade no celular e jornada de conversão para transformar visitantes em conversas qualificadas no WhatsApp.",
    category: "SEO & Conversão",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-18",
    readTime: "6 min",
    accent: "#8b5cf6",
    keywords: [
      "criação de sites profissionais",
      "site para gerar clientes",
      "landing page whatsapp",
      "SEO técnico Next.js",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    takeaway:
      "Um site que vende não é apenas um cartão de visitas bonito: ele responde à busca do cliente no Google, carrega rápido no 4G e oferece um caminho claro para o orçamento no WhatsApp com contexto já preenchido.",
    whatsappPrompt:
      "Olá, Adilson! Li seu artigo sobre sites profissionais que geram clientes no Google e WhatsApp e quero conversar sobre um site para meu negócio.",
    sections: [
      {
        heading: "1. Clareza imediata nos primeiros 5 segundos",
        paragraphs: [
          "Quando um empresário ou consumidor acessa um site vindo do Google, ele decide muito rápido se está no lugar certo. O título principal precisa dizer o que você resolve, para quem é e qual é o próximo passo — sem jargões vazios.",
          "Separar a proposta de valor, mostrar projetos ou entregas reais e posicionar o botão de WhatsApp logo na primeira dobra elimina atritos comuns em sites institucionais lentos.",
        ],
        bullets: [
          "Título objetivo orientado ao problema real do cliente",
          "Prova visual com projetos navegáveis ou demonstrações claras",
          "CTA de WhatsApp com mensagem pré-preenchida por serviço",
        ],
      },
      {
        heading: "2. SEO técnico e leitura por motores de IA",
        paragraphs: [
          "Aparecer apenas por indicação limita o crescimento. Um site moderno precisa combinar HTML semântico, metadados completos (título, descrição, canonical, OpenGraph), sitemap atualizado e dados estruturados em JSON-LD.",
          "Além da busca tradicional no Google, motores e assistentes baseados em IA — como ChatGPT, Claude e Perplexity — leem arquivos estruturados e FAQs objetivas para recomendar prestadores e soluções confiáveis.",
        ],
        bullets: [
          "Metadados únicos por página e URLs limpas",
          "Schema JSON-LD (ProfessionalService, Person, FAQPage)",
          "Arquivo /llms.txt organizado com serviços, projetos e canais",
        ],
      },
      {
        heading: "3. Experiência leve no celular antes de qualquer efeito",
        paragraphs: [
          "A maior parte do tráfego comercial chega pelo smartphone. Efeitos visuais em 3D e animações elevam a percepção de valor da marca, mas só funcionam a seu favor quando respeitam a bateria e a tela de quem está no 4G.",
          "Construir sobre Next.js com renderização estática/híbrida, otimização de imagens e carregamento progressivo garante visual marcante sem sacrificar velocidade.",
        ],
      },
    ],
  },
  {
    slug: "calculadoras-e-ferramentas-online-para-atrair-clientes",
    title:
      "Como calculadoras interativas e ferramentas gratuitas atraem clientes todos os dias pelo Google",
    seoTitle:
      "Calculadoras Online e Micro-SaaS: Como Ferramentas Gratuitas Atraem Leads Orgânicos",
    description:
      "Entenda por que utilitários online e calculadoras de nicho posicionam melhor no Google, qualificam interessados e criam oportunidades de renda extra e SaaS.",
    category: "Ferramentas & Renda Extra",
    publishedAt: "2026-11-14",
    updatedAt: "2026-11-18",
    readTime: "7 min",
    accent: "#06b6d4",
    keywords: [
      "calculadora online para site",
      "ferramentas online para atrair clientes",
      "criar micro-saas",
      "toolspace",
    ],
    stack: ["Next.js", "React", "Supabase", "TypeScript"],
    takeaway:
      "Ferramentas práticas resolvem uma dúvida imediata do usuário, geram compartilhamento orgânico e abrem uma ponte natural para contratar um serviço completo ou assinar um plano Pro.",
    whatsappPrompt:
      "Olá, Adilson! Li seu artigo sobre calculadoras interativas e Micro-SaaS e quero conversar sobre criar uma ferramenta para meu negócio ou projeto próprio.",
    sections: [
      {
        heading: "1. Por que ferramentas ranqueiam e retêm mais que páginas estáticas",
        paragraphs: [
          "Enquanto milhares de sites publicam apenas páginas genéricas dizendo 'fazemos orçamento', uma calculadora de orçamento, simulador de prazo ou utilitário específico entrega utilidade instantânea na tela.",
          "Na operação do Toolspace — que reúne mais de 300 ferramentas online gratuitas organizadas por temas e hubs dedicados — fica evidente como páginas específicas para cada necessidade captam buscas altamente intencionais.",
        ],
        bullets: [
          "O visitante interage ativamente em vez de fechar a aba em 10 segundos",
          "Cada utilitário atende uma palavra-chave exata buscada no Google",
          "O resultado calculado pode ser enviado direto para o WhatsApp como pré-briefing",
        ],
      },
      {
        heading: "2. Do captador de leads ao Micro-SaaS com renda recorrente",
        paragraphs: [
          "Para empresas locais e prestadores de serviço, uma calculadora funciona como filtro inteligente de leads. Já para criadores e empreendedores digitais, um conjunto focado de ferramentas pode virar um ativo próprio monetizado com planos, recursos premium ou patrocínios.",
          "Com Next.js, TypeScript e Supabase, é possível lançar a primeira versão enxuta com páginas indexáveis e evoluir gradualmente para contas de usuário, histórico salvo e cobrança.",
        ],
      },
    ],
  },
  {
    slug: "desenvolvimento-acelerado-ia-cursor-claude-gpt",
    title:
      "Engenharia assistida por IA (Cursor, Claude e GPT): como entregar sites e sistemas mais rápido com qualidade real",
    seoTitle:
      "Desenvolvimento Rápido com Cursor, Claude e ChatGPT: Velocidade Sem Perder Qualidade",
    description:
      "Como o uso estruturado de Cursor, Claude, ChatGPT e Google Gemini acelera protótipos, refatorações, testes e SEO — mantendo arquitetura limpa e código próprio.",
    category: "IA & Velocidade",
    publishedAt: "2026-11-16",
    updatedAt: "2026-11-18",
    readTime: "6 min",
    accent: "#ec4899",
    keywords: [
      "desenvolvimento com cursor",
      "claude e chatgpt programação",
      "entrega rápida de site",
      "engenharia assistida por IA",
    ],
    stack: ["Cursor", "Claude", "ChatGPT / OpenAI", "Google Gemini"],
    takeaway:
      "IA não substitui critério de engenharia: quando combinada a um design system próprio e testes automatizados, ela reduz drasticamente o tempo até o lançamento mantendo qualidade de produção.",
    whatsappPrompt:
      "Olá, Adilson! Vi seu artigo sobre engenharia rápida com Cursor, Claude e GPT e quero acelerar o lançamento do meu projeto.",
    sections: [
      {
        heading: "1. Onde os construtores lentos travam e onde a IA bem guiada brilha",
        paragraphs: [
          "Muita gente confunde agilidade com usar templates genéricos pesados ou gerar código solto sem revisão. O resultado costuma ser um site difícil de personalizar, lento no celular e fraco no Google.",
          "No fluxo profissional com Cursor, Claude, ChatGPT e Google Gemini, a velocidade vem de automatizar tarefas repetitivas — estruturação inicial, tipagem TypeScript, geração de variações responsivas e casos de teste — mantendo a arquitetura sob controle humano.",
        ],
        bullets: [
          "Escopo e protótipo navegável definidos em menos etapas",
          "Reaproveitamento de componentes 3D testados do Aura UI",
          "Revisão de acessibilidade, lint e suítes Jest antes de publicar",
        ],
      },
      {
        heading: "2. Código próprio que continua fácil de evoluir depois da entrega",
        paragraphs: [
          "Ao finalizar com TypeScript estrito, testes unitários e deploy contínuo na Vercel, o projeto não vira uma caixa-preta. Novas páginas, calculadoras, integrações com APIs de LLM ou um app mobile em Expo encaixam na mesma base.",
        ],
      },
    ],
  },
  {
    slug: "interfaces-3d-nextjs-rapidas-no-celular",
    title:
      "Interfaces 3D na web moderna: como unir impacto visual com carregamento rápido no celular",
    seoTitle:
      "Web 3D com Three.js e Next.js Sem Travar no Celular: Boas Práticas Reais",
    description:
      "Técnicas práticas para usar Three.js, React Three Fiber e cards 3D com carregamento progressivo, idle-mount e economia de GPU em smartphones.",
    category: "3D & Performance",
    publishedAt: "2026-11-18",
    updatedAt: "2026-11-18",
    readTime: "5 min",
    accent: "#22d3ee",
    keywords: [
      "three.js next.js performance",
      "site 3d rápido no celular",
      "react three fiber mobile",
      "interface 3d moderna",
    ],
    stack: ["Three.js", "WebGL", "Next.js", "Motion"],
    takeaway:
      "Um site memorável impressiona pelo 3D no primeiro contato, mas conquista pelo carregamento instantâneo no celular graças ao carregamento adiado do WebGL e animações leves na GPU.",
    whatsappPrompt:
      "Olá, Adilson! Li seu artigo sobre interfaces 3D leves no celular e quero conversar sobre um projeto com visual marcante e alta velocidade.",
    sections: [
      {
        heading: "1. Prioridade absoluta para conteúdo e CTA na primeira pintura",
        paragraphs: [
          "O visitante no celular precisa ler o título, entender o serviço e ver o botão de contato antes mesmo de o canvas WebGL inicializar. Por isso, carregar cenas Three.js via importação dinâmica fora do SSR e aguardar o momento ocioso (requestIdleCallback) evita travar a thread principal.",
        ],
        bullets: [
          "Importação dinâmica client-only sem bloquear a hidratação inicial",
          "Respeito automático a prefers-reduced-motion e economia de dados (Save-Data)",
          "Pausa do loop 3D via IntersectionObserver quando o Hero sai da tela",
        ],
      },
      {
        heading: "2. Substituindo filtros pesados por profundidade inteligente",
        paragraphs: [
          "Múltiplos elementos com desfoque de fundo e sombras animadas simultâneas derrubam a fluidez em aparelhos intermediários. Combinar perspectiva CSS pura (translateZ e transform3d), redução de partículas no modo compacto e content-visibility nas seções inferiores mantém o visual premium e a rolagem leve.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
