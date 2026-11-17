import {
  ArrowUpRight,
  Bot,
  Calculator,
  Check,
  Globe,
  Layers,
  MessageCircle,
  PanelsTopLeft,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Card3D, Spotlight } from "aura-ui-effects";
import { profile } from "@/lib/portfolio";

interface ServiceItem {
  number: string;
  badge: string;
  icon: LucideIcon;
  name: string;
  description: string;
  deliverables: string[];
  tags: string[];
  whatsappText: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    badge: "Presença & Google",
    icon: Globe,
    name: "Sites & Landing Pages p/ Negócios",
    description:
      "Páginas profissionais planejadas para aparecer no Google, carregar rápido no celular e transformar visitas em pedidos de orçamento no WhatsApp.",
    deliverables: [
      "Arquitetura clara focada em contato e conversão",
      "Experiência rápida e legível em qualquer tela",
      "SEO técnico e integração direta com WhatsApp",
    ],
    tags: ["Google / SEO", "Mobile-first", "Alta conversão", "WhatsApp"],
    whatsappText:
      "Olá, Adilson! Quero um Site ou Landing Page comercial para o meu negócio. Gostaria de solicitar um orçamento.",
  },
  {
    number: "02",
    badge: "Produtos & Leads",
    icon: Calculator,
    name: "Ferramentas Online, Calculadoras & Micro-SaaS",
    description:
      "Calculadoras interativas, simuladores e utilitários próprios para atrair visitantes e gerar leads — com a experiência do Toolspace (+300 ferramentas no ar).",
    deliverables: [
      "Calculadoras e simuladores sob medida para seu nicho",
      "Páginas indexáveis para captar tráfego orgânico",
      "Estrutura preparada para evoluir em Micro-SaaS",
    ],
    tags: ["Calculadoras", "Simuladores", "Micro-SaaS", "+300 no Toolspace"],
    whatsappText:
      "Olá, Adilson! Tenho interesse em criar uma ferramenta online, calculadora interativa ou Micro-SaaS. Podemos conversar sobre escopo e orçamento?",
  },
  {
    number: "03",
    badge: "Operação & Vendas",
    icon: PanelsTopLeft,
    name: "Sistemas Web, Catálogos & Agendamentos",
    description:
      "Painéis administrativos, catálogos filtráveis, agendas online e áreas de clientes para organizar atendimentos, pedidos e rotinas em um só lugar.",
    deliverables: [
      "Catálogos com busca, filtros e pedido no WhatsApp",
      "Agendas online para serviços, horários e equipes",
      "Painéis de gestão com banco de dados seguro",
    ],
    tags: ["Painéis web", "Catálogos", "Agendamentos", "Áreas de cliente"],
    whatsappText:
      "Olá, Adilson! Preciso de um sistema web, catálogo filtrável ou agenda online para minha empresa. Gostaria de solicitar um orçamento.",
  },
  {
    number: "04",
    badge: "IA Aplicada",
    icon: Bot,
    name: "Automações & Assistentes com IA",
    description:
      "Atendimento inteligente, triagem inicial de interessados e fluxos conectados a Google Gemini e APIs de LLMs integrados ao seu site ou produto.",
    deliverables: [
      "Assistentes orientados ao contexto dos seus serviços",
      "Triagem automática antes do atendimento humano",
      "Integrações com Google Gemini, Groq e OpenRouter",
    ],
    tags: ["Google Gemini", "LLMs", "Triagem", "Automação"],
    whatsappText:
      "Olá, Adilson! Gostaria de integrar um assistente ou automação com IA no meu site ou sistema. Vamos alinhar um orçamento?",
  },
  {
    number: "05",
    badge: "Android & iOS",
    icon: Smartphone,
    name: "Aplicativos Mobile (Android & iOS)",
    description:
      "Aplicativos com React Native e Expo desenhados para o uso diário no celular e conectados à mesma base de dados do seu site ou painel web.",
    deliverables: [
      "Aplicativo Android e iOS em base única com Expo",
      "Sincronização em tempo real com APIs e painel web",
      "Navegação fluida pensada para gestos e uso móvel",
    ],
    tags: ["React Native", "Expo", "Android & iOS", "Conectado à web"],
    whatsappText:
      "Olá, Adilson! Quero desenvolver um aplicativo mobile em React Native / Expo conectado à web. Gostaria de pedir um orçamento.",
  },
  {
    number: "06",
    badge: "Lançamento Ágil",
    icon: Layers,
    name: "Modelos Prontos Personalizáveis",
    description:
      "Estruturas testadas para clínicas e estética, veículos, cursos/autoescolas e eventos, adaptadas à identidade visual, textos e ofertas da sua marca.",
    deliverables: [
      "Base funcional adaptada rapidamente ao seu segmento",
      "Identidade visual, cores, domínio e catálogo próprios",
      "Formatos para clínicas, veículos, cursos e eventos",
    ],
    tags: ["Clínicas & Estética", "Veículos", "Cursos", "Eventos"],
    whatsappText:
      "Olá, Adilson! Quero conhecer os modelos prontos personalizáveis para adaptar à minha marca. Como funciona o orçamento?",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-shell section-space"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Soluções sob medida</p>
          <h2 id="services-title">
            Do site que gera clientes
            <br />
            à sua própria ferramenta online.
          </h2>
        </div>
        <p>
          Cada entrega parte de um objetivo concreto: atrair contatos qualificados,
          organizar a operação ou lançar um produto digital pronto para uso.
        </p>
      </div>

      <div className="service-grid">
        {services.map(({ icon: Icon, ...s }) => {
          const whatsappHref = `${profile.whatsapp}?text=${encodeURIComponent(s.whatsappText)}`;

          return (
            <Card3D
              key={s.name}
              maxTilt={9}
              scale={1.015}
              className="service-card-wrap !p-0"
            >
              <Spotlight size={340} intensity={0.14} className="service-spotlight">
                <article className="service-card service-card-3d">
                  <div className="service-card-top">
                    <span className="service-icon-badge" aria-hidden="true">
                      <Icon size={22} />
                    </span>
                    <div className="service-meta">
                      <span className="service-number">{s.number}</span>
                      <span className="service-badge">{s.badge}</span>
                    </div>
                  </div>

                  <h3>{s.name}</h3>
                  <p className="service-description">{s.description}</p>

                  <ul
                    className="service-deliverables"
                    aria-label={`Entregas de ${s.name}`}
                  >
                    {s.deliverables.map((item) => (
                      <li key={item}>
                        <Check size={14} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="tags service-tags" aria-label="Destaques">
                    {s.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <a
                    className="service-cta"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>Solicitar orçamento no WhatsApp</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">
                      {" "}
                      sobre {s.name} (abre em nova aba)
                    </span>
                  </a>
                </article>
              </Spotlight>
            </Card3D>
          );
        })}
      </div>
    </section>
  );
}
