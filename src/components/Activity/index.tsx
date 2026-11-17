import { activity } from "@/lib/portfolio";
export default function Activity() {
  return (
    <section
      id="activity"
      className="section-shell section-space"
      aria-labelledby="activity-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Movimentações</p>
          <h2 id="activity-title">
            Em movimento,
            <br />
            sem parar.
          </h2>
        </div>
        <p>
          Os projetos não ficam parados: lançamentos, domínios novos e
          rodadas de melhoria recentes.
        </p>
      </div>
      <ol className="activity-list">
        {activity.map((item) => (
          <li className="activity-item" key={item.title}>
            <span className="activity-date">{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
