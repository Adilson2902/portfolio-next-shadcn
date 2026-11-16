import { render, screen } from "@testing-library/react";
import { Resume } from "../index";
import { projects, profile } from "@/lib/portfolio";
describe("Printable résumé", () => {
  it("uses the same project and contact sources as the website", () => {
    const { container } = render(<Resume />);
    expect(container.firstChild).toHaveClass("print-resume");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      profile.name,
    );
    projects.forEach((p) =>
      expect(screen.getByRole("link", { name: p.url })).toHaveAttribute(
        "href",
        p.url,
      ),
    );
    expect(screen.getByRole("link", { name: /linkedin/ })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
  });
  it("does not publish unverified commercial metrics or conflicting job dates", () => {
    const { container } = render(<Resume />);
    expect(container).not.toHaveTextContent(
      /200%|500\+|35%|60%|2021 - Atual|2019 - 2021/,
    );
  });
});
