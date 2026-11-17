"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Calculator,
  CalendarCheck,
  Check,
  Clock,
  Globe,
  Layers,
  MessageCircle,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { BorderBeam, Card3D, LayeredCard } from "aura-ui-effects";
import { profile } from "@/lib/portfolio";
import { TechIcon } from "@/components/TechIcon";

type ProjectTypeId = "site" | "tool" | "system" | "mobile-ai";
type TimelineId = "fast" | "weeks" | "validate";

interface ProjectTypeOption {
  id: ProjectTypeId;
  label: string;
  shortDesc: string;
  icon: LucideIcon;
  architecture: string;
  summary: string;
  baseStack: string[];
  baseScope: string[];
}

interface FeatureOption {
  id: string;
  label: string;
  addedStack: string[];
  addedScope: string;
}

interface TimelineOption {
  id: TimelineId;
  label: string;
  hint: string;
}

interface ToolShowcaseItem {
  title: string;
  badge: string;
  icon: LucideIcon;
  description: string;
  highlight: string;
  whatsappText: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "site",
    label: "Site ou Landing Page Comercial",
    shortDesc: "Presença no Google, carregamento ágil e foco em orçamentos",
    icon: Globe,
    architecture: "Site / Landing Page Comercial de Alta Conversão",
    summary:
      "Estrutura enxuta e persuasiva para apresentar seus serviços com clareza e levar o visitante direto ao WhatsApp.",
    baseStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    baseScope: [
      "Páginas responsivas otimizadas para leitura no celular",
      "Estrutura semântica preparada para indexação no Google",
      "Fluxo de contato direto com mensagens contextuais no WhatsApp",
    ],
  },
  {
    id: "tool",
    label: "Ferramenta Online / Calculadora / SaaS",
    shortDesc: "Calculadoras, geradores de leads e produtos digitais próprios",
    icon: Calculator,
    architecture: "Ferramenta Interativa / Micro-SaaS (padrão Toolspace)",
    summary:
      "Aplicação interativa desenhada para resolver uma dor específica, atrair tráfego orgânico e converter ou monetizar.",
    baseStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    baseScope: [
      "Motor de cálculo ou utilitário interativo com resposta imediata",
      "Páginas prontas para buscas no Google e compartilhamento",
      "Base preparada para evolução com contas, histórico ou planos",
    ],
  },
  {
    id: "system",
    label: "Sistema, Catálogo ou Agenda",
    shortDesc: "Painéis administrativos, catálogos filtráveis e agendamentos",
    icon: PanelsTopLeft,
    architecture: "Sistema Web Full-Stack com Painel & Banco de Dados",
    summary:
      "Organização de serviços, pedidos ou horários em uma interface única para equipe e clientes.",
    baseStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    baseScope: [
      "Catálogo filtrável ou agenda organizada por atendimento e horário",
      "Painel administrativo para editar itens e acompanhar pedidos",
      "Banco de dados estruturado com autenticação e controle de acesso",
    ],
  },
  {
    id: "mobile-ai",
    label: "App Mobile ou IA Aplicada",
    shortDesc: "Aplicativo Android/iOS com Expo ou fluxos inteligentes com LLMs",
    icon: Smartphone,
    architecture: "Plataforma Multiplataforma (Mobile + IA / APIs)",
    summary:
      "Experiência móvel dedicada ou automação inteligente conectada ao atendimento e à operação da empresa.",
    baseStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Google Gemini",
      "Supabase",
    ],
    baseScope: [
      "Aplicativo Android e iOS compartilhando dados com a web",
      "Integrações de atendimento ou análise com Google Gemini e LLMs",
      "Camada de API segura para conectar aplicativo, site e painel",
    ],
  },
];

const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: "whatsapp-funnel",
    label: "Botão & Funil de WhatsApp",
    addedStack: [],
    addedScope:
      "Mensagens pré-preenchidas por tipo de pedido para acelerar o primeiro contato",
  },
  {
    id: "seo-google",
    label: "SEO p/ Google",
    addedStack: ["Next.js"],
    addedScope:
      "Metadados completos, URLs limpas e hierarquia voltada a buscas locais",
  },
  {
    id: "lead-calculator",
    label: "Calculadora Captadora de Leads",
    addedStack: ["React"],
    addedScope:
      "Simulador interativo onde o cliente estima valores e envia os dados no WhatsApp",
  },
  {
    id: "admin-panel",
    label: "Painel Administrativo",
    addedStack: ["Supabase", "PostgreSQL"],
    addedScope:
      "Área restrita para atualizar conteúdos, serviços, preços ou cadastros",
  },
  {
    id: "payments",
    label: "Pagamentos / Assinaturas",
    addedStack: ["Node.js", "NestJS"],
    addedScope:
      "Fluxo de cobrança avulsa ou recorrente integrado ao acesso do sistema",
  },
  {
    id: "ai-assistant",
    label: "Assistente com IA",
    addedStack: ["Google Gemini"],
    addedScope:
      "Triagem inteligente e respostas contextuais conectadas a LLMs",
  },
];

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: "fast",
    label: "Preciso lançar rápido",
    hint: "Foco no escopo essencial para ir ao ar em menos tempo",
  },
  {
    id: "weeks",
    label: "Planejando para as próximas semanas",
    hint: "Cronograma em etapas para entregas completas e revisões",
  },
  {
    id: "validate",
    label: "Quero validar a ideia e escopo",
    hint: "Alinhamento técnico para definir prioridades antes de investir",
  },
];

const TOOL_SHOWCASE: ToolShowcaseItem[] = [
  {
    title: "Calculadora de Orçamento Instantâneo",
    badge: "Captação de Leads",
    icon: Calculator,
    description:
      "Seu cliente escolhe medidas, serviços ou plano, visualiza uma prévia na tela e já envia o pedido detalhado direto para o seu WhatsApp.",
    highlight: "Menos perguntas repetitivas e pedidos mais claros",
    whatsappText:
      "Olá, Adilson! Quero encomendar uma Calculadora de Orçamento Instantâneo para gerar leads no meu negócio.",
  },
  {
    title: "Catálogo Digital com Pedido no WhatsApp",
    badge: "Vendas & Atendimento",
    icon: ShoppingBag,
    description:
      "Vitrine organizada por categorias, busca e filtros onde o cliente seleciona os itens desejados e finaliza o contato direto no seu WhatsApp.",
    highlight: "Ideal para lojas, concessionárias e catálogos locais",
    whatsappText:
      "Olá, Adilson! Tenho interesse em um Catálogo Digital com Pedido no WhatsApp para apresentar meus produtos.",
  },
  {
    title: "Agenda Online p/ Clínicas e Estúdios",
    badge: "Serviços & Reservas",
    icon: CalendarCheck,
    description:
      "Apresentação dos procedimentos, dúvidas frequentes e solicitação de horário organizada para o cliente agendar direto pelo celular.",
    highlight: "Pensado para clínicas, estética, massoterapia e estúdios",
    whatsappText:
      "Olá, Adilson! Gostaria de solicitar um orçamento para uma Agenda Online para minha clínica ou estúdio.",
  },
  {
    title: "Hub de Ferramentas / Micro-SaaS de Nicho",
    badge: "Produto & Renda Extra",
    icon: Layers,
    description:
      "Plataforma temática com calculadoras e utilitários online (no formato do Toolspace com +300 ferramentas) para atrair audiência e monetizar.",
    highlight: "Ativo digital próprio para assinaturas ou anúncios",
    whatsappText:
      "Olá, Adilson! Quero conversar sobre criar um Hub de Ferramentas ou Micro-SaaS de nicho.",
  },
];

const PROJECT_TYPES_BY_ID: Record<ProjectTypeId, ProjectTypeOption> =
  Object.fromEntries(
    PROJECT_TYPES.map((option) => [option.id, option]),
  ) as Record<ProjectTypeId, ProjectTypeOption>;

const TIMELINE_BY_ID: Record<TimelineId, TimelineOption> = Object.fromEntries(
  TIMELINE_OPTIONS.map((option) => [option.id, option]),
) as Record<TimelineId, TimelineOption>;

export default function SolutionsConfigurator() {
  const [selectedTypeId, setSelectedTypeId] = useState<ProjectTypeId>("site");
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    "whatsapp-funnel",
    "seo-google",
  ]);
  const [selectedTimelineId, setSelectedTimelineId] =
    useState<TimelineId>("fast");

  const activeType = PROJECT_TYPES_BY_ID[selectedTypeId];
  const activeFeatures = FEATURE_OPTIONS.filter((feature) =>
    selectedFeatureIds.includes(feature.id),
  );
  const activeTimeline = TIMELINE_BY_ID[selectedTimelineId];

  function toggleFeature(featureId: string) {
    setSelectedFeatureIds((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  }

  const recommendedStack = Array.from(
    new Set([
      ...activeType.baseStack,
      ...activeFeatures.flatMap((feature) => feature.addedStack),
    ]),
  );

  const recommendedScope = [
    ...activeType.baseScope,
    ...activeFeatures.map((feature) => feature.addedScope),
  ];

  const selectedFeaturesSummary =
    activeFeatures.length > 0
      ? activeFeatures.map((feature) => feature.label).join(", ")
      : "Escopo essencial sob consulta";

  const whatsappSummary = [
    "Olá, Adilson! Montei meu projeto pelo simulador do seu portfólio:",
    `• Tipo: ${activeType.label}`,
    `• Arquitetura sugerida: ${activeType.architecture}`,
    `• Recursos desejados: ${selectedFeaturesSummary}`,
    `• Stack sugerida: ${recommendedStack.join(", ")}`,
    `• Momento/Prazo: ${activeTimeline.label}`,
    "Podemos conversar sobre a proposta e os próximos passos?",
  ].join("\n");

  const whatsappHref = `${profile.whatsapp}?text=${encodeURIComponent(whatsappSummary)}`;

  return (
    <section
      id="solutions"
      className="section-shell section-space solutions-configurator"
      aria-labelledby="solutions-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Simulador interativo 3D</p>
          <h2 id="solutions-title">Monte seu Projeto ou Ferramenta em 30s</h2>
        </div>
        <p>
          Escolha o formato, marque os recursos que fazem sentido e envie um
          resumo técnico já pronto para receber uma proposta objetiva.
        </p>
      </div>

      <div className="configurator-layout">
        <div className="configurator-steps">
          <div className="configurator-step-block">
            <p className="configurator-step-label" id="step-type-label">
              <span>01</span> Qual é o tipo de projeto?
            </p>
            <div
              className="option-grid"
              role="group"
              aria-labelledby="step-type-label"
            >
              {PROJECT_TYPES.map((option) => {
                const Icon = option.icon;
                const isSelected = option.id === activeType.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isSelected}
                    data-selected={isSelected ? "true" : "false"}
                    className={`option-card ${isSelected ? "is-selected active" : ""}`}
                    onClick={() => setSelectedTypeId(option.id)}
                  >
                    <span className="option-card-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span className="option-card-content">
                      <strong>{option.label}</strong>
                      <span>{option.shortDesc}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="configurator-step-block">
            <p className="configurator-step-label" id="step-features-label">
              <span>02</span> Recursos desejados (pode marcar vários)
            </p>
            <div
              className="feature-chips"
              role="group"
              aria-labelledby="step-features-label"
            >
              {FEATURE_OPTIONS.map((feature) => {
                const isSelected = selectedFeatureIds.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    type="button"
                    aria-pressed={isSelected}
                    data-selected={isSelected ? "true" : "false"}
                    className={`feature-chip ${isSelected ? "is-selected active" : ""}`}
                    onClick={() => toggleFeature(feature.id)}
                  >
                    <Check size={14} aria-hidden="true" />
                    <span>{feature.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="configurator-step-block">
            <p className="configurator-step-label" id="step-timeline-label">
              <span>03</span> Prazo ou momento atual
            </p>
            <div
              className="feature-chips timeline-chips"
              role="group"
              aria-labelledby="step-timeline-label"
            >
              {TIMELINE_OPTIONS.map((timeline) => {
                const isSelected = timeline.id === activeTimeline.id;
                return (
                  <button
                    key={timeline.id}
                    type="button"
                    aria-pressed={isSelected}
                    data-selected={isSelected ? "true" : "false"}
                    className={`feature-chip timeline-chip ${isSelected ? "is-selected active" : ""}`}
                    onClick={() => setSelectedTimelineId(timeline.id)}
                  >
                    <Clock size={14} aria-hidden="true" />
                    <span>{timeline.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <LayeredCard
          className="proposal-preview-3d !p-0"
          maxTilt={9}
          depth={20}
        >
          <BorderBeam duration={7} color="primary" borderWidth={1.5}>
            <div className="proposal-preview-inner">
              <div className="proposal-preview-header" data-depth="2">
                <div className="proposal-preview-badges">
                  <span className="proposal-badge">Arquitetura sugerida</span>
                  <span className="proposal-timeline-pill">
                    {activeTimeline.label}
                  </span>
                </div>
                <h3>{activeType.architecture}</h3>
                <p>{activeType.summary}</p>
              </div>

              <div className="proposal-block" data-depth="3">
                <h4>Escopo sugerido</h4>
                <ul className="proposal-scope-list">
                  {recommendedScope.map((scopeItem) => (
                    <li key={scopeItem}>
                      <Check size={14} aria-hidden="true" />
                      <span>{scopeItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="proposal-block" data-depth="4">
                <h4>Stack recomendada</h4>
                <ul
                  className="proposal-stack"
                  aria-label="Stack recomendada para a configuração"
                >
                  {recommendedStack.map((tech) => (
                    <li key={tech} className="proposal-stack-item">
                      <TechIcon name={tech} size={16} />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="proposal-summary-meta" data-depth="2">
                <p>
                  <strong>Recursos marcados:</strong> {selectedFeaturesSummary}
                </p>
                <p>
                  <strong>Estratégia:</strong> {activeTimeline.hint}
                </p>
              </div>

              <div className="proposal-actions" data-depth="5">
                <a
                  className="button primary proposal-whatsapp-btn"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  <span>Enviar resumo no WhatsApp</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
          </BorderBeam>
        </LayeredCard>
      </div>

      <div className="tools-showcase-section">
        <div className="tools-showcase-heading">
          <p className="eyebrow">Modelos de produto & geração de leads</p>
          <h3 id="tools-showcase-title">
            Ferramentas &amp; Sistemas que Geram Clientes
          </h3>
          <p>
            Além de sites institucionais, você pode encomendar ferramentas
            práticas para atrair interessados pelo Google, agilizar orçamentos ou
            lançar um produto digital próprio.
          </p>
        </div>

        <div className="tools-showcase-grid">
          {TOOL_SHOWCASE.map(({ icon: Icon, ...tool }) => {
            const toolHref = `${profile.whatsapp}?text=${encodeURIComponent(tool.whatsappText)}`;

            return (
              <Card3D
                key={tool.title}
                maxTilt={8}
                scale={1.015}
                className="tool-card-wrap !p-0"
              >
                <article className="tool-showcase-card">
                  <div className="tool-showcase-top">
                    <span className="service-icon-badge" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="tool-showcase-badge">{tool.badge}</span>
                  </div>

                  <h4>{tool.title}</h4>
                  <p className="tool-showcase-desc">{tool.description}</p>
                  <p className="tool-showcase-highlight">
                    <Bot size={14} aria-hidden="true" />
                    <span>{tool.highlight}</span>
                  </p>

                  <a
                    className="service-cta"
                    href={toolHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>Solicitar orçamento no WhatsApp</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">
                      {" "}
                      sobre {tool.title} (abre em nova aba)
                    </span>
                  </a>
                </article>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
