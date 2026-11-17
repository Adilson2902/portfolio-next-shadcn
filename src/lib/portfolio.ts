// Contacts and domain corroborated by Documents/Adilson2902/README.md.
export const profile = {
  name: "Adilson Adriano",
  email: "nunojraa3@gmail.com",
  phone: "+55 (81) 98264-4557",
  whatsapp: "https://wa.me/5581982644557",
  linkedin: "https://www.linkedin.com/in/adilson-adriano-062018197",
  site: "https://adilson.toolspace.com.br",
};

export type ProjectStatus = "live" | "paused";

export interface Project {
  name: string;
  category: string;
  number: string;
  description: string;
  challenge: string;
  delivery: string;
  stack: string[];
  url: string;
  status: ProjectStatus;
}

// Describe scope, never substitute objectives for measured commercial results.
export const projects: Project[] = [
  {
    name: "Toolspace",
    category: "Produto próprio",
    number: "01",
    description:
      "Plataforma com mais de 300 ferramentas online gratuitas, organizadas por temas, com hubs dedicados e aplicativo Android.",
    challenge:
      "Organizar ferramentas de diferentes áreas e facilitar o acesso à utilidade certa.",
    delivery:
      "Catálogo por temas, hubs de ENEM, Medicina e Residência, interfaces de ferramentas e app Expo conectado à plataforma.",
    stack: ["Next.js", "TypeScript", "Supabase", "Expo"],
    url: "https://www.toolspace.com.br",
    status: "live",
  },
  {
    name: "Aura UI",
    category: "Design system",
    number: "02",
    description:
      "Design system próprio em monorepo, com pacotes npm publicados e documentação pública.",
    challenge:
      "Padronizar componentes, efeitos e temas entre os projetos sem abrir mão da identidade visual de cada um.",
    delivery:
      "Pacotes aura-ui-* versionados, tema claro/escuro por hub e documentação interativa.",
    stack: ["TypeScript", "React", "Tailwind CSS", "pnpm"],
    url: "https://aura.toolspace.com.br",
    status: "live",
  },
  {
    name: "Sintonia",
    category: "Aplicação web",
    number: "03",
    description:
      "Aplicativo de compatibilidade amorosa com matching, chat em tempo real e recursos locais de privacidade.",
    challenge:
      "Criar uma experiência de conexão que funcione em tempo real e respeite a privacidade dos usuários.",
    delivery:
      "Matching por afinidade, chat via WebSocket, quizzes e ferramentas privadas salvas apenas no dispositivo.",
    stack: ["Vite", "React", "TypeScript", "Express", "Socket.io"],
    url: "https://sintonia.toolspace.com.br",
    status: "live",
  },
  {
    name: "Auto Escola Manager",
    category: "Aplicação em desenvolvimento",
    number: "04",
    description:
      "Interface de gestão para alunos, instrutores, veículos e aulas práticas de uma autoescola.",
    challenge:
      "Dar uma visão clara da agenda e das rotinas administrativas em uma mesma interface.",
    delivery:
      "Dashboard, telas de cadastro e fluxos de agendamento. A demonstração inclui dados de exemplo.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://auto-escola-manager-uub5.vercel.app",
    status: "paused",
  },
  {
    name: "Veículos Maceió",
    category: "Projeto web e mobile",
    number: "05",
    description:
      "Hub automotivo voltado a anúncios de veículos e serviços em Maceió e Alagoas.",
    challenge:
      "Aproximar a busca por veículos do contato com empresas e vendedores locais.",
    delivery:
      "Catálogo, filtros, páginas locais e painel para empresas, com estrutura de aplicativo mobile.",
    stack: ["Next.js", "React Native", "Supabase"],
    url: "https://www.veiculosmaceio.com.br",
    status: "paused",
  },
  {
    name: "Estetico Masso",
    category: "Projeto de serviços",
    number: "06",
    description:
      "Experiência digital para apresentar serviços de estética e massagem e organizar agendamentos.",
    challenge:
      "Conectar a apresentação dos tratamentos à jornada de quem quer agendar um atendimento.",
    delivery:
      "Site, catálogo de serviços, fluxo de agendamento e interfaces administrativas e mobile.",
    stack: ["Next.js", "React Native", "TypeScript"],
    url: "https://www.esteticomasso.com.br",
    status: "paused",
  },
  {
    name: "Sites para Casamento",
    category: "Projeto web e mobile",
    number: "07",
    description:
      "Projeto digital para casais, com apresentação do casamento e organização de presentes.",
    challenge:
      "Reunir informações do evento e a experiência de convidados em um fluxo acessível.",
    delivery: "Interfaces web e mobile e API para listas de presentes.",
    stack: ["Next.js", "Expo", "NestJS"],
    url: "https://www.sitesparacasamento.com.br",
    status: "paused",
  },
];

export interface LiveSite {
  name: string;
  url: string;
  description: string;
}

// Products verified live at build time — keep in sync with real deployments.
export const liveSites: LiveSite[] = [
  {
    name: "Toolspace",
    url: "https://www.toolspace.com.br",
    description:
      "Hub central com mais de 300 ferramentas gratuitas, organizadas por temas.",
  },
  {
    name: "ENEM",
    url: "https://enem.toolspace.com.br",
    description:
      "Hub de estudos para o ENEM com calculadoras, exercícios e simulados.",
  },
  {
    name: "Medicina",
    url: "https://medicina.toolspace.com.br",
    description:
      "Hub de Medicina com MedSynapse: flashcards, simulados e MedBot com IA.",
  },
  {
    name: "Residência",
    url: "https://residencia.toolspace.com.br",
    description:
      "Hub de Residência Médica com ferramentas e materiais de estudo.",
  },
  {
    name: "Sintonia",
    url: "https://sintonia.toolspace.com.br",
    description:
      "Aplicativo de compatibilidade e conversas em tempo real.",
  },
  {
    name: "Aura UI",
    url: "https://aura.toolspace.com.br",
    description:
      "Documentação do design system Aura UI, com componentes e temas.",
  },
  {
    name: "Portfólio",
    url: "https://adilson.toolspace.com.br",
    description: "Este site — portfólio, projetos e currículo.",
  },
];

export interface TechGroup {
  title: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    title: "Front-end web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    title: "Back-end & tempo real",
    items: ["Node.js", "Express", "Socket.io", "Supabase"],
  },
  {
    title: "IA aplicada",
    items: [
      "APIs de LLM (Gemini, Groq, OpenRouter)",
      "Visão computacional",
      "Prompt engineering",
    ],
  },
  {
    title: "Design system",
    items: ["Aura UI", "Radix UI", "Motion", "Tailwind v4"],
  },
  {
    title: "Infra & qualidade",
    items: ["Vercel", "Render", "GitHub", "pnpm", "Vitest", "ESLint", "Three.js"],
  },
];

export interface ActivityItem {
  period: string;
  title: string;
  description: string;
}

// Recent, verifiable movements — newest first.
export const activity: ActivityItem[] = [
  {
    period: "Nov 2026",
    title: "Portfólio no ar em adilson.toolspace.com.br",
    description:
      "Domínio próprio configurado na Vercel com DNS na Hostinger; site reconstruído sobre o design system Aura UI.",
  },
  {
    period: "Nov 2026",
    title: "Ecossistema de subdomínios no ar",
    description:
      "ENEM, Medicina, Residência, Sintonia e a documentação do Aura UI operando em subdomínios próprios.",
  },
  {
    period: "Nov 2026",
    title: "Rodadas de evolução do Toolspace",
    description:
      "Centenas de novas ferramentas e calculadoras nos hubs ENEM e Medicina, todas cobertas por testes automatizados.",
  },
  {
    period: "2026",
    title: "Aura UI publicado",
    description:
      "Design system próprio em monorepo, com pacotes npm (aura-ui-*) e documentação pública.",
  },
  {
    period: "2026",
    title: "Toolspace em escala",
    description:
      "Mais de 300 ferramentas gratuitas, hubs temáticos, SEO e aplicativo Android na mesma plataforma.",
  },
  {
    period: "2025",
    title: "Produto próprio em operação",
    description:
      "Lançamento e evolução contínua do Toolspace: catálogo, monetização e melhoria de performance.",
  },
];
