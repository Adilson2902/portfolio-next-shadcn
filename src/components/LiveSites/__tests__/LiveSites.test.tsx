import { render, screen } from "@testing-library/react";
import LiveSites from "../index";
import { liveSites } from "@/lib/portfolio";

describe("LiveSites", () => {
  it("renders one external link per live site", () => {
    render(<LiveSites />);
    expect(
      screen.getByRole("heading", { level: 2, name: /ecossistema/i }),
    ).toBeInTheDocument();
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(liveSites.length);
    liveSites.forEach((site) => {
      const link = screen.getByRole("link", { name: new RegExp(site.name) });
      expect(link).toHaveAttribute("href", site.url);
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("renders the 3D browser bar and domain label inside each site card", () => {
    const { container } = render(<LiveSites />);
    expect(container.querySelectorAll(".live-browser-bar")).toHaveLength(
      liveSites.length,
    );
    liveSites.forEach((site) => {
      expect(
        screen.getByText(site.url.replace("https://", "")),
      ).toBeInTheDocument();
    });
  });
});
