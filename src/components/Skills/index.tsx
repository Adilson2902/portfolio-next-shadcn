export function Skills() {
  return (
    <section
      id="about"
      className="section-shell section-space about-section"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">Sobre o meu trabalho</p>
        <h2 id="about-title">
          A interface é onde
          <br />
          tudo se encontra.
        </h2>
      </div>
      <div>
        <p className="about-intro">
          Sou Adilson, desenvolvedor front-end. Meu trabalho combina construção
          de interfaces, organização de componentes e integração com serviços
          para web e mobile.
        </p>
        <p>
          Nos projetos selecionados, trabalho com ferramentas, gestão, serviços
          e catálogos. Meu foco é tornar cada fluxo mais claro para quem vai
          usá-lo e mais simples de manter.
        </p>
        <ul className="tags skills-tags" aria-label="Tecnologias utilizadas">
          {[
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "Tailwind CSS",
            "Expo",
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
