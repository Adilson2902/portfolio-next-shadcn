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

  it("exposes a direct WhatsApp quote CTA and verified LinkedIn URL", () => {
    render(<Hero />);
    const whatsappLink = screen.getByRole("link", {
      name: /Orçamento no WhatsApp/i,
    });
    expect(whatsappLink).toHaveAttribute(
      "href",
      expect.stringContaining(`${profile.whatsapp}?text=`),
    );
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
  });

  it("renders the 3D portrait stage badges and stack strip without breaking accessibility", () => {
    const { container } = render(<Hero />);
    expect(screen.getByAltText("Adilson Adriano")).toBeInTheDocument();
    expect(
      screen.getByText("Disponível p/ novos projetos"),
    ).toBeInTheDocument();
    expect(screen.getByText("400+ ferramentas no ar")).toBeInTheDocument();

    const techPills = container.querySelectorAll(".portrait-tech-pill");
    expect(techPills).toHaveLength(6);
    for (const pill of techPills) {
      expect(pill.querySelector("svg")).toBeInTheDocument();
    }
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
