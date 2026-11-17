import { render, screen, within } from "@testing-library/react";
import TechStack from "../index";
import { Skills } from "@/components/Skills";
import { CORE_ORBIT_TECHS, TechIcon, getTechMeta } from "@/components/TechIcon";
import { projects, techGroups } from "@/lib/portfolio";

describe("TechStack", () => {
  it("renders every technology group with its items and SVG icons", () => {
    const { container } = render(<TechStack />);
    expect(
      screen.getByRole("heading", { level: 2, name: /stack/i }),
    ).toBeInTheDocument();

    techGroups.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
      const list = screen.getByRole("list", { name: group.title });
      group.items.forEach((item) => {
        const element = screen.getByText(item);
        expect(element).toBeInTheDocument();
        expect(list).toContainElement(element);
        const svg = element.querySelector("svg");
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute("aria-hidden", "true");
      });
    });

    const orbitShowcase = container.querySelector(".tech-orbit-showcase");
    expect(orbitShowcase).not.toBeNull();
    expect(orbitShowcase).toHaveAttribute("aria-hidden", "true");
    expect(orbitShowcase?.textContent).toBe("");
    const orbitSvgs = orbitShowcase?.querySelectorAll("svg") ?? [];
    expect(orbitSvgs.length).toBe(CORE_ORBIT_TECHS.length + 1);
  });

  it("resolves icons and brand colors for every project stack, tech group, and fallback", () => {
    const allNames = new Set<string>([
      ...CORE_ORBIT_TECHS,
      ...techGroups.flatMap((g) => g.items),
      ...projects.flatMap((p) => p.stack),
      "OpenAI",
      "Design System",
      "Framer Motion",
      "  next.js  ",
    ]);

    allNames.forEach((name) => {
      const meta = getTechMeta(name);
      expect(meta.color).toMatch(/^#[0-9a-f]{6}$/i);
      const { container } = render(<TechIcon name={name} size={20} />);
      const svg = container.querySelector("svg");
      expect(svg).not.toBeNull();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    const fallbackMeta = getTechMeta("Unknown Custom Tech");
    expect(fallbackMeta.color).toMatch(/^#[0-9a-f]{6}$/i);
    const { container: fallbackContainer } = render(
      <TechIcon name="Unknown Custom Tech" className="custom-icon" />,
    );
    const fallbackSvg = fallbackContainer.querySelector("svg");
    expect(fallbackSvg).not.toBeNull();
    expect(fallbackSvg).toHaveClass("custom-icon");
  });

  it("renders the Skills section with delivery pillars and icon-backed tags", () => {
    const { container } = render(<Skills />);
    const section = container.querySelector("section#about");
    expect(section).not.toBeNull();
    expect(
      screen.getByRole("heading", { level: 2, name: /engenharia web/i }),
    ).toBeInTheDocument();

    const tagsList = screen.getByRole("list", {
      name: /tecnologias utilizadas/i,
    });
    const listItems = within(tagsList).getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThanOrEqual(6);
    listItems.forEach((item) => {
      const svg = item.querySelector("svg");
      expect(svg).not.toBeNull();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    expect(container.querySelectorAll(".about-pillar-card").length).toBe(3);
  });
});
