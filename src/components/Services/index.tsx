import { Globe, PanelsTopLeft, Smartphone } from "lucide-react";
const services = [
  {
    icon: Globe,
    name: "Sites & landing pages",
    description:
      "Presença digital com uma mensagem clara, navegação simples e um caminho direto para o contato.",
    scope: "Sites institucionais · páginas de serviços · portfólios",
  },
  {
    icon: PanelsTopLeft,
    name: "Aplicações web",
    description:
      "Interfaces para transformar processos em fluxos compreensíveis, com componentes reutilizáveis e integração com APIs.",
    scope: "Dashboards · catálogos · agendamentos",
  },
  {
    icon: Smartphone,
    name: "Experiências mobile",
    description:
      "Aplicações com React Native e Expo, considerando os gestos, as telas e o contexto de quem usa o celular.",
    scope: "Apps · adaptação mobile · evolução de interfaces",
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
          <p className="eyebrow">Como posso ajudar</p>
          <h2 id="services-title">
            Do primeiro site
            <br />à próxima versão.
          </h2>
        </div>
        <p>
          Uma entrega começa com a necessidade do negócio. A tecnologia
          acompanha esse objetivo.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, ...s }) => (
          <article className="service-card" key={s.name}>
            <Icon size={26} aria-hidden="true" />
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <span>{s.scope}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
