import { profile, projects } from "@/lib/portfolio";
export function Resume() {
  return (
    <article className="print-resume">
      <header>
        <h1>{profile.name}</h1>
        <h2>Desenvolvedor Front-end | React, Next.js e React Native</h2>
        <p>
          {profile.email} · {profile.phone}
        </p>
        <p>
          <a href={profile.linkedin}>
            {profile.linkedin.replace("https://www.", "")}
          </a>
        </p>
        <p>
          <a href={profile.site}>{profile.site}</a>
        </p>
      </header>
      <section>
        <h2>Perfil profissional</h2>
        <p>
          Desenvolvimento de interfaces web e mobile com React, Next.js, React
          Native e TypeScript. Construção de componentes reutilizáveis,
          integração com APIs e atenção à acessibilidade e ao design responsivo.
        </p>
      </section>
      <section>
        <h2>Projetos selecionados</h2>
        {projects.map((p) => (
          <div className="resume-project" key={p.name}>
            <h3>
              {p.name} · {p.category}
            </h3>
            <p>{p.delivery}</p>
            <p>{p.stack.join(" · ")}</p>
            <a href={p.url}>{p.url}</a>
          </div>
        ))}
      </section>
      <section>
        <h2>Tecnologias</h2>
        <p>React · Next.js · React Native · TypeScript · Tailwind CSS · Expo</p>
      </section>
    </article>
  );
}
