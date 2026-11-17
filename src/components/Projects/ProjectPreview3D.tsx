import type { CSSProperties } from "react";
import type { Project, ProjectPreviewType } from "@/lib/portfolio";

interface PreviewSceneConfig {
  label: string;
}

const SCENE_CONFIG: Record<ProjectPreviewType, PreviewSceneConfig> = {
  hub: { label: "hub://tools" },
  "design-system": { label: "tokens://3d" },
  realtime: { label: "ws://live" },
  dashboard: { label: "panel://agenda" },
  marketplace: { label: "catalog://auto" },
  booking: { label: "studio://horarios" },
  event: { label: "event://rsvp" },
};

function renderPreviewBody(previewType: ProjectPreviewType, accent: string) {
  switch (previewType) {
    case "hub":
      return (
        <div
          className="preview-scene-hub"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-search-bar"
            style={{
              transform: "translateZ(16px)",
              borderColor: `${accent}66`,
            }}
          >
            <span
              className="preview-search-dot"
              style={{ background: accent }}
            />
            <span className="preview-line-short" />
          </div>
          <div
            className="preview-mini-grid"
            style={{ transform: "translateZ(24px)" }}
          >
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                className="preview-tool-tile"
                style={{
                  borderColor: idx % 2 === 0 ? `${accent}70` : undefined,
                  background: idx === 1 ? `${accent}2b` : undefined,
                }}
              />
            ))}
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(38px)",
              borderColor: `${accent}99`,
              boxShadow: `0 10px 24px -8px ${accent}66`,
            }}
          >
            +300
          </div>
        </div>
      );

    case "design-system":
      return (
        <div
          className="preview-scene-ds"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-token-stack"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="preview-token-cube preview-cube-back"
              style={{
                transform: "translateZ(16px) rotateZ(-6deg)",
                borderColor: `${accent}55`,
              }}
            />
            <div
              className="preview-token-cube preview-cube-mid"
              style={{
                transform: "translateZ(26px) rotateZ(4deg)",
                borderColor: `${accent}88`,
                background: `${accent}24`,
              }}
            />
            <div
              className="preview-token-cube preview-cube-front"
              style={{
                transform: "translateZ(38px)",
                borderColor: accent,
                boxShadow: `0 12px 26px -10px ${accent}80`,
              }}
            >
              <span
                className="preview-swatch-dot"
                style={{ background: accent }}
              />
              <span className="preview-swatch-dot preview-swatch-cyan" />
              <span className="preview-swatch-dot preview-swatch-pink" />
            </div>
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(42px)",
              borderColor: `${accent}99`,
            }}
          >
            Tokens 3D
          </div>
        </div>
      );

    case "realtime":
      return (
        <div
          className="preview-scene-realtime"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-chat-bubble preview-chat-left"
            style={{
              transform: "translateZ(20px)",
              borderColor: `${accent}66`,
            }}
          >
            <span className="preview-line-med" />
          </div>
          <div
            className="preview-chat-bubble preview-chat-right"
            style={{
              transform: "translateZ(30px)",
              background: `${accent}30`,
              borderColor: `${accent}aa`,
            }}
          >
            <span className="preview-line-short" />
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(40px)",
              borderColor: `${accent}99`,
              boxShadow: `0 10px 24px -8px ${accent}77`,
            }}
          >
            WebSocket
          </div>
        </div>
      );

    case "dashboard":
      return (
        <div
          className="preview-scene-dashboard"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-chart-bars"
            style={{ transform: "translateZ(22px)" }}
          >
            {[42, 68, 54, 88, 72].map((height, idx) => (
              <span
                key={idx}
                className="preview-chart-bar"
                style={{
                  height: `${height}%`,
                  background:
                    idx === 3
                      ? accent
                      : `linear-gradient(180deg, ${accent}aa, ${accent}33)`,
                }}
              />
            ))}
          </div>
          <div
            className="preview-agenda-rows"
            style={{ transform: "translateZ(30px)" }}
          >
            <span className="preview-line-med" />
            <span className="preview-line-short" />
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(38px)",
              borderColor: `${accent}99`,
            }}
          >
            Agenda
          </div>
        </div>
      );

    case "marketplace":
      return (
        <div
          className="preview-scene-marketplace"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-filter-pills"
            style={{ transform: "translateZ(16px)" }}
          >
            <span
              className="preview-pill-dot"
              style={{ background: accent }}
            />
            <span className="preview-pill-dot" />
            <span className="preview-pill-dot" />
          </div>
          <div
            className="preview-catalog-cards"
            style={{ transform: "translateZ(26px)" }}
          >
            <div
              className="preview-catalog-card"
              style={{ borderColor: `${accent}88` }}
            >
              <span
                className="preview-catalog-thumb"
                style={{ background: `${accent}33` }}
              />
              <span className="preview-line-short" />
            </div>
            <div className="preview-catalog-card">
              <span className="preview-catalog-thumb" />
              <span className="preview-line-short" />
            </div>
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(38px)",
              borderColor: `${accent}99`,
            }}
          >
            Catálogo
          </div>
        </div>
      );

    case "booking":
      return (
        <div
          className="preview-scene-booking"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-calendar-grid"
            style={{ transform: "translateZ(20px)" }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
              <span
                key={day}
                className="preview-calendar-cell"
                style={{
                  background: day === 4 || day === 7 ? accent : undefined,
                  opacity: day === 4 || day === 7 ? 0.9 : 0.4,
                }}
              />
            ))}
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(38px)",
              borderColor: `${accent}99`,
              boxShadow: `0 10px 24px -8px ${accent}77`,
            }}
          >
            14:30
          </div>
        </div>
      );

    case "event":
      return (
        <div
          className="preview-scene-event"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="preview-invite-arch"
            style={{
              transform: "translateZ(22px)",
              borderColor: `${accent}88`,
              background: `linear-gradient(160deg, ${accent}22, rgba(16, 16, 28, 0.7))`,
            }}
          >
            <span
              className="preview-invite-crest"
              style={{ borderColor: accent }}
            />
            <span className="preview-line-short" />
          </div>
          <div
            className="preview-float-pill"
            style={{
              transform: "translateZ(38px)",
              borderColor: `${accent}99`,
            }}
          >
            RSVP
          </div>
        </div>
      );
  }
}

/**
 * Isometric layered 3D preview showcase for a portfolio project card.
 */
export function ProjectPreview3D({ project }: { project: Project }) {
  const { label } = SCENE_CONFIG[project.previewType];
  const accentStyle = {
    "--preview-accent": project.accent,
  } as CSSProperties;

  return (
    <div
      className="project-preview-3d"
      data-preview-type={project.previewType}
      aria-hidden="true"
      style={accentStyle}
    >
      <div
        className="preview-3d-glow"
        style={{
          background: `radial-gradient(circle at 75% 20%, ${project.accent}3d, transparent 68%)`,
        }}
      />
      <div
        className="preview-3d-stage"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(760px) rotateX(11deg) rotateY(-11deg)",
        }}
      >
        <div
          className="preview-3d-window"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(8px)",
            borderColor: `${project.accent}4d`,
          }}
        >
          <div className="preview-3d-chrome">
            <span className="preview-chrome-dots">
              <span />
              <span />
              <span />
            </span>
            <span className="preview-chrome-label">{label}</span>
          </div>
          <div
            className="preview-3d-canvas"
            style={{ transformStyle: "preserve-3d" }}
          >
            {renderPreviewBody(project.previewType, project.accent)}
          </div>
        </div>
      </div>
    </div>
  );
}
