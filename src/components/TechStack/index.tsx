import { techGroups } from "@/lib/portfolio";
export default function TechStack() {
  return (
    <section
      id="tech"
      className="section-shell section-space"
      aria-labelledby="tech-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Tecnologias</p>
          <h2 id="tech-title">
            A stack que eu
            <br />
            uso todo dia.
          </h2>
        </div>
        <p>
          Do front-end ao tempo real, do design system à infraestrutura — as
          ferramentas por trás dos projetos no ar.
        </p>
      </div>
      <div className="tech-grid">
        {techGroups.map((group) => (
          <div className="tech-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tags" aria-label={group.title}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
