"use client";

import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { BorderBeam, LayeredCard } from "aura-ui-effects";
import { TechIcon } from "@/components/TechIcon";
import { profile } from "@/lib/portfolio";

interface WorkflowStage {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  accent: string;
  tools: string[];
  clientInput: string;
  clientOutput: string;
  advantage: string;
  codeSnippet: string[];
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "scope",
    step: "01",
    title: "Escopo & Protótipo Rápido",
    shortDesc:
      "Estrutura de oferta, copy comercial e jornada para WhatsApp/Google sem semanas de espera.",
    icon: Sparkles,
    accent: "#38bdf8",
    tools: ["Claude", "ChatGPT / OpenAI", "Google Gemini", "Perplexity"],
    clientInput:
      "Objetivo do negócio, serviços prioritários e referências visuais.",
    clientOutput:
      "Arquitetura das páginas, hierarquia de SEO e fluxo de conversão pronto para validar.",
    advantage:
      "Claude e ChatGPT aceleram modelagem de copy, casos de uso e estrutura sem travar em reuniões infinitas.",
    codeSnippet: [
      "$ cursor-plan --goal 'site-comercial-e-funil-whatsapp'",
      "✓ Mapeando intenção de busca local + palavras-chave",
      "✓ Definindo CTA WhatsApp contextual e simulador de leads",
      "→ Protótipo navegável validado antes do build final",
    ],
  },
  {
    id: "build",
    step: "02",
    title: "Construção Acelerada em Código Real",
    shortDesc:
      "Componentes 3D próprios em Next.js, TypeScript e Aura UI gerados e refinados em alta velocidade.",
    icon: Cpu,
    accent: "#a855f7",
    tools: ["Cursor", "Next.js", "TypeScript", "Aura UI", "Three.js"],
    clientInput: "Aprovação do layout inicial e materiais da marca.",
    clientOutput:
      "Interface 3D rápida no celular, código limpo próprio e componentes reutilizáveis.",
    advantage:
      "No Cursor, cada componente nasce sobre a base testada do Aura UI e do Toolspace — evitando templates pesados.",
    codeSnippet: [
      "$ cursor-build --stack next16,ts,aura-ui,three",
      "✓ Gerando componentes 3D + Preview isométrico",
      "✓ Otimizando WebGL mobile (idle-mount + low-power)",
      "→ Interface 100% personalizada sem bloqueio de plataforma",
    ],
  },
  {
    id: "quality",
    step: "03",
    title: "Qualidade, SEO & Testes Automatizados",
    shortDesc:
      "Código auditado, responsivo no celular, dados estruturados e suítes automatizadas.",
    icon: ShieldCheck,
    accent: "#34d399",
    tools: ["Jest", "Testing Library", "ESLint", "TypeScript"],
    clientInput: "Revisão rápida nos dispositivos reais (celular e desktop).",
    clientOutput:
      "Build limpo com TypeScript estrito, testes automatizados, JSON-LD e Core Web Vitals em dia.",
    advantage:
      "Velocidade sem gambiarra: a IA auxilia na cobertura de bordas e revisão, e os testes garantem estabilidade.",
    codeSnippet: [
      "$ npm run typecheck && npm test && npm run lint",
      "✓ TypeScript strict: 0 erros",
      "✓ Jest + Testing Library: fluxos de conversão validados",
      "→ Pronto para indexação no Google, ChatGPT, Claude e Perplexity",
    ],
  },
  {
    id: "deploy",
    step: "04",
    title: "Deploy Contínuo & Escala",
    shortDesc:
      "Publicação com HTTPS, sitemap, llms.txt e base pronta para crescer em ferramentas ou SaaS.",
    icon: Rocket,
    accent: "#f472b6",
    tools: ["Vercel", "Supabase", "Expo", "GitHub"],
    clientInput: "Domínio próprio e WhatsApp oficial para atendimento.",
    clientOutput:
      "Site ou ferramenta no ar com SSL, OpenGraph, sitemap.xml, llms.txt e autonomia para evoluir.",
    advantage:
      "Seu site não fica preso a mensalidades de construtores limitados — você tem código real pronto para escalar.",
    codeSnippet: [
      "$ vercel --prod --domain adilson.toolspace.com.br",
      "✓ Sitemap XML, robots.txt & /llms.txt publicados",
      "✓ OpenGraph dinâmico + Schema JSON-LD ativos",
      "→ Ecossistema pronto para captar clientes e evoluir",
    ],
  },
];

const AI_BADGES = ["Cursor", "Claude", "ChatGPT / OpenAI", "Google Gemini"];

export default function DeliveryVelocity() {
  const [activeStageId, setActiveStageId] = useState<string>("build");
  const activeStage =
    WORKFLOW_STAGES.find((stage) => stage.id === activeStageId) ??
    WORKFLOW_STAGES[0];

  const whatsappMessage = encodeURIComponent(
    `Olá, Adilson! Vi como você usa Cursor, Claude e GPT na etapa "${activeStage.title}" para entregar rápido com qualidade. Quero acelerar meu projeto!`,
  );
  const whatsappHref = `${profile.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="velocity"
      className="section-shell section-space velocity-section"
      aria-labelledby="velocity-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Engenharia acelerada por IA</p>
          <h2 id="velocity-title">
            Velocidade de IA.
            <br />
            Rigor de engenharia.
          </h2>
        </div>
        <p>
          Uso <strong>Cursor</strong>, <strong>Claude</strong>,{" "}
          <strong>ChatGPT</strong> e <strong>Google Gemini</strong> combinados
          ao design system próprio <strong>Aura UI</strong> e à experiência do{" "}
          <strong>Toolspace</strong> (+300 ferramentas no ar) para transformar
          sua ideia em produto publicado mais rápido — sem abrir mão de código
          limpo, SEO e testes.
        </p>
      </div>

      <div className="velocity-bento">
        <div
          className="velocity-pipeline"
          role="group"
          aria-label="Etapas de entrega acelerada por IA"
        >
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                type="button"
                aria-pressed={isActive}
                data-selected={isActive ? "true" : "false"}
                className={`velocity-step-card${isActive ? " is-selected" : ""}`}
                style={{ "--stage-accent": stage.accent } as CSSProperties}
                onClick={() => setActiveStageId(stage.id)}
              >
                <div className="velocity-step-head">
                  <span className="velocity-step-num">{stage.step}</span>
                  <span className="velocity-step-icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                </div>
                <div className="velocity-step-body">
                  <h3>{stage.title}</h3>
                  <p>{stage.shortDesc}</p>
                  <div className="velocity-step-tools">
                    {stage.tools.map((tool) => (
                      <span key={tool} className="velocity-mini-pill">
                        <TechIcon name={tool} size={13} />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <LayeredCard
          className="velocity-cockpit-3d !p-0"
          maxTilt={8}
          depth={18}
        >
          <BorderBeam duration={8} color="accent" borderWidth={1.5}>
            <div className="velocity-cockpit-inner">
              <div className="velocity-cockpit-chrome" data-depth="2">
                <div className="velocity-chrome-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="velocity-chrome-path">
                  <Terminal size={12} aria-hidden="true" />
                  cursor://workflow-producao
                </span>
                <span className="velocity-chrome-status">
                  Etapa {activeStage.step}
                </span>
              </div>

              <div className="velocity-ai-badges" data-depth="3">
                {AI_BADGES.map((badge) => (
                  <span key={badge} className="velocity-ai-badge">
                    <TechIcon name={badge} size={14} />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>

              <div className="velocity-cockpit-header" data-depth="3">
                <h3>{activeStage.title}</h3>
                <p>{activeStage.advantage}</p>
              </div>

              <div className="velocity-terminal" data-depth="4">
                {activeStage.codeSnippet.map((line) => (
                  <div key={line} className="velocity-terminal-line">
                    {line}
                  </div>
                ))}
              </div>

              <div className="velocity-io-grid" data-depth="3">
                <div className="velocity-io-box">
                  <span>O que entra</span>
                  <p>{activeStage.clientInput}</p>
                </div>
                <div className="velocity-io-box">
                  <span>O que você recebe</span>
                  <p>{activeStage.clientOutput}</p>
                </div>
              </div>

              <div className="velocity-cockpit-footer" data-depth="5">
                <p className="velocity-guarantee">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>
                    Entrega ágil com código próprio, SEO e zero dependência de
                    construtores lentos.
                  </span>
                </p>
                <a
                  className="button primary velocity-cta-btn"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  <span>Acelerar meu projeto no WhatsApp</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </div>
          </BorderBeam>
        </LayeredCard>
      </div>
    </section>
  );
}
