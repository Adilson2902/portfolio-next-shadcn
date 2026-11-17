import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "../index";
import { profile, projects } from "@/lib/portfolio";

describe("Projects", () => {
  it("links only live projects and marks paused ones without a link", () => {
    render(<Projects />);
    const paused = projects.filter((p) => p.status === "paused");
    const live = projects.filter((p) => p.status === "live");

    live.forEach((p) => {
      expect(
        screen.getByRole("link", { name: new RegExp(`Visitar ${p.name}`) }),
      ).toHaveAttribute("href", p.url);
    });
    paused.forEach((p) => {
      expect(
        screen.queryByRole("link", { name: new RegExp(`Visitar ${p.name}`) }),
      ).toBeNull();
    });

    expect(screen.getAllByText("Deploy pausado")).toHaveLength(paused.length);
    expect(screen.getAllByText("No ar")).toHaveLength(live.length);
    expect(screen.getAllByText("Pausado")).toHaveLength(paused.length);
  });

  it("renders niche labels, commercial pitch, and WhatsApp links per project", () => {
    render(<Projects />);

    projects.forEach((p) => {
      expect(screen.getByText(p.nicheLabel)).toBeInTheDocument();
      expect(screen.getByText(p.commercialPitch)).toBeInTheDocument();
    });

    const similarLinks = screen.getAllByRole("link", {
      name: /Quero algo nesse estilo/,
    });
    expect(similarLinks).toHaveLength(projects.length);
    similarLinks.forEach((link) => {
      expect(link.getAttribute("href")).toContain(profile.whatsapp);
    });
  });

  it("filters projects by Em produção and Modelos p/ Negócios", () => {
    render(<Projects />);

    const allButton = screen.getByRole("button", { name: "Todos" });
    const liveButton = screen.getByRole("button", { name: "Em produção" });
    const businessButton = screen.getByRole("button", {
      name: "Modelos p/ Negócios",
    });

    expect(allButton).toHaveAttribute("aria-pressed", "true");
    expect(liveButton).toHaveAttribute("aria-pressed", "false");
    expect(businessButton).toHaveAttribute("aria-pressed", "false");

    const liveProjects = projects.filter((p) => p.status === "live");
    const businessProjects = projects.filter((p) => p.audience === "business");

    fireEvent.click(liveButton);
    expect(liveButton).toHaveAttribute("aria-pressed", "true");
    expect(allButton).toHaveAttribute("aria-pressed", "false");

    liveProjects.forEach((p) => {
      expect(screen.getByRole("heading", { level: 3, name: p.name })).toBeInTheDocument();
    });
    businessProjects.forEach((p) => {
      expect(screen.queryByRole("heading", { level: 3, name: p.name })).toBeNull();
    });

    fireEvent.click(businessButton);
    expect(businessButton).toHaveAttribute("aria-pressed", "true");
    expect(liveButton).toHaveAttribute("aria-pressed", "false");

    businessProjects.forEach((p) => {
      expect(screen.getByRole("heading", { level: 3, name: p.name })).toBeInTheDocument();
    });
    liveProjects.forEach((p) => {
      expect(screen.queryByRole("heading", { level: 3, name: p.name })).toBeNull();
    });

    fireEvent.click(allButton);
    expect(allButton).toHaveAttribute("aria-pressed", "true");
    projects.forEach((p) => {
      expect(screen.getByRole("heading", { level: 3, name: p.name })).toBeInTheDocument();
    });
  });
});
