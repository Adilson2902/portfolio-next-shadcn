import type { CSSProperties } from "react";
import { Card3D, OrbitingCircles } from "aura-ui-effects";
import { techGroups } from "@/lib/portfolio";
import { CORE_ORBIT_TECHS, TechIcon, getTechMeta } from "@/components/TechIcon";

const INNER_ORBIT_TECHS = CORE_ORBIT_TECHS.slice(0, 5);
const OUTER_ORBIT_TECHS = CORE_ORBIT_TECHS.slice(5);

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
          Do front-end ao tempo real, do 3D e IA aplicada à infraestrutura — as
          tecnologias por trás dos projetos e ferramentas no ar.
        </p>
      </div>

      <div
        className="tech-orbit-showcase"
        aria-hidden="true"
        style={{ position: "relative" }}
      >
        <div className="tech-orbit-track tech-orbit-track-outer" />
        <div className="tech-orbit-track tech-orbit-track-inner" />
        <div className="tech-orbit-core">
          <TechIcon name="Aura UI" size={26} />
        </div>
        <OrbitingCircles
          className="tech-orbit-ring tech-orbit-inner"
          radius="clamp(62px, 16vw, 82px)"
          duration={22}
          stagger={0}
          style={{ position: "absolute", inset: 0, minHeight: "100%" }}
        >
          {INNER_ORBIT_TECHS.map((tech) => {
            const { color } = getTechMeta(tech);
            return (
              <span
                key={tech}
                className="orbit-medallion"
                style={
                  {
                    "--tech-color": color,
                    borderColor: `${color}55`,
                  } as CSSProperties
                }
              >
                <TechIcon name={tech} size={22} />
              </span>
            );
          })}
        </OrbitingCircles>
        <OrbitingCircles
          className="tech-orbit-ring tech-orbit-outer"
          radius="clamp(108px, 30vw, 146px)"
          duration={32}
          reverse
          stagger={0}
        >
          {OUTER_ORBIT_TECHS.map((tech) => {
            const { color } = getTechMeta(tech);
            return (
              <span
                key={tech}
                className="orbit-medallion"
                style={
                  {
                    "--tech-color": color,
                    borderColor: `${color}55`,
                  } as CSSProperties
                }
              >
                <TechIcon name={tech} size={22} />
              </span>
            );
          })}
        </OrbitingCircles>
      </div>

      <div className="tech-grid">
        {techGroups.map((group) => (
          <Card3D key={group.title} maxTilt={8} scale={1.015}>
            <div className="tech-group tech-group-3d">
              <h3>{group.title}</h3>
              <ul className="tags" aria-label={group.title}>
                {group.items.map((item) => {
                  const { color } = getTechMeta(item);
                  return (
                    <li
                      key={item}
                      className="tech-tag-item"
                      style={
                        {
                          "--tech-color": color,
                          borderColor: `${color}44`,
                        } as CSSProperties
                      }
                    >
                      <TechIcon name={item} size={16} className="tech-tag-icon" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  );
}
