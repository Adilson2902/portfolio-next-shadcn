import { fireEvent, render, screen } from "@testing-library/react";
import DeliveryVelocity from "../index";
import { profile } from "@/lib/portfolio";

describe("DeliveryVelocity", () => {
  it("renders the AI-accelerated engineering headline and AI tool badges", () => {
    render(<DeliveryVelocity />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Velocidade de IA/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByText("Cursor").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Claude").length).toBeGreaterThan(0);
    expect(screen.getAllByText("ChatGPT / OpenAI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Google Gemini").length).toBeGreaterThan(0);
  });

  it("switches stages interactively and updates the WhatsApp CTA link", () => {
    render(<DeliveryVelocity />);

    const scopeButton = screen.getByRole("button", {
      name: /01.*Escopo & Protótipo Rápido/i,
    });
    const deployButton = screen.getByRole("button", {
      name: /04.*Deploy Contínuo & Escala/i,
    });

    fireEvent.click(scopeButton);
    expect(scopeButton).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByText(/Protótipo navegável validado antes do build final/i),
    ).toBeInTheDocument();

    fireEvent.click(deployButton);
    expect(deployButton).toHaveAttribute("aria-pressed", "true");
    expect(scopeButton).toHaveAttribute("aria-pressed", "false");

    const ctaLink = screen.getByRole("link", {
      name: /Acelerar meu projeto no WhatsApp/i,
    });
    const href = ctaLink.getAttribute("href") ?? "";
    expect(href).toContain(profile.whatsapp);
    expect(decodeURIComponent(href)).toContain("Deploy Contínuo & Escala");
  });
});
