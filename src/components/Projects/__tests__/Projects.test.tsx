import { render, screen } from "@testing-library/react";
import Projects from "../index";
import { projects } from "@/lib/portfolio";

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
});
