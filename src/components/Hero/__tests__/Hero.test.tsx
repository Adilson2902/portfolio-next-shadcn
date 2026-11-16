import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "../index";
import { profile } from "@/lib/portfolio";
describe("Hero", () => {
  it("presents a single primary heading and clear routes to projects and contact", () => {
    render(<Hero />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Adilson Adriano",
    );
    expect(
      screen.getByRole("link", { name: /Conhecer os projetos/i }),
    ).toHaveAttribute("href", "#projects");
    expect(
      screen.getByRole("link", { name: /Conversar sobre um projeto/i }),
    ).toHaveAttribute("href", "#contact");
  });
  it("uses the existing verified LinkedIn URL", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
  });
  it("opens print only after the visitor requests the résumé", () => {
    const print = jest.spyOn(window, "print").mockImplementation(() => {});
    render(<Hero />);
    expect(print).not.toHaveBeenCalled();
    fireEvent.click(
      screen.getByRole("button", { name: /Salvar currículo em PDF/ }),
    );
    expect(print).toHaveBeenCalledTimes(1);
    print.mockRestore();
  });
});
