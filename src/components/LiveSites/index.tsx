import { ArrowUpRight } from "lucide-react";
import { liveSites } from "@/lib/portfolio";
export default function LiveSites() {
  return (
    <section
      id="live"
      className="section-shell section-space"
      aria-labelledby="live-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">No ar agora</p>
          <h2 id="live-title">
            Um ecossistema,
            <br />
            vários endereços.
          </h2>
        </div>
        <p>
          Projetos próprios em produção, cada um com domínio e deploy
          independentes — todos verificados e no ar.
        </p>
      </div>
      <div className="live-grid">
        {liveSites.map((site) => (
          <a
            className="live-card"
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            key={site.url}
          >
            <h3>
              <span className="live-dot" aria-hidden="true" />
              {site.name}
            </h3>
            <span className="live-domain">{site.url.replace("https://", "")}</span>
            <p>{site.description}</p>
            <span className="live-cta">
              Abrir <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> {site.name} (abre em nova aba)</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
