import { fireEvent, render, screen } from "@testing-library/react";
import SolutionsConfigurator from "../index";
import { profile } from "@/lib/portfolio";

describe("SolutionsConfigurator", () => {
  it("renders the interactive configurator steps and the 4 showcase tools", () => {
    render(<SolutionsConfigurator />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Monte seu Projeto ou Ferramenta em 30s/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /Ferramentas & Sistemas que Geram Clientes/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Calculadora de Orçamento Instantâneo"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Catálogo Digital com Pedido no WhatsApp"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Agenda Online p/ Clínicas e Estúdios"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Hub de Ferramentas / Micro-SaaS de Nicho"),
    ).toBeInTheDocument();
  });

  it("updates architecture, stack, and WhatsApp link dynamically when changing project type", () => {
    render(<SolutionsConfigurator />);

    const whatsappLink = screen.getByRole("link", {
      name: /Enviar resumo no WhatsApp/i,
    });
    const initialHref = whatsappLink.getAttribute("href") ?? "";
    expect(initialHref.startsWith(`${profile.whatsapp}?text=`)).toBe(true);
    expect(decodeURIComponent(initialHref)).toContain(
      "Site ou Landing Page Comercial",
    );

    const toolTypeButton = screen.getByRole("button", {
      name: /Ferramenta Online \/ Calculadora \/ SaaS/i,
    });
    fireEvent.click(toolTypeButton);

    expect(toolTypeButton).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /Ferramenta Interativa \/ Micro-SaaS/i,
      }),
    ).toBeInTheDocument();

    const updatedHref = whatsappLink.getAttribute("href") ?? "";
    const decodedUpdated = decodeURIComponent(updatedHref);
    expect(decodedUpdated).toContain("Ferramenta Online / Calculadora / SaaS");
    expect(decodedUpdated).toContain("Ferramenta Interativa / Micro-SaaS");

    const mobileAiButton = screen.getByRole("button", {
      name: /App Mobile ou IA Aplicada/i,
    });
    fireEvent.click(mobileAiButton);

    const mobileDecoded = decodeURIComponent(
      whatsappLink.getAttribute("href") ?? "",
    );
    expect(mobileDecoded).toContain("App Mobile ou IA Aplicada");
    expect(screen.getByText("React Native")).toBeInTheDocument();
    expect(screen.getByText("Google Gemini")).toBeInTheDocument();
  });

  it("toggles multiple features and timeline options, reflecting every selection in the WhatsApp URL", () => {
    render(<SolutionsConfigurator />);

    const whatsappLink = screen.getByRole("link", {
      name: /Enviar resumo no WhatsApp/i,
    });

    const leadCalcChip = screen.getByRole("button", {
      name: /Calculadora Captadora de Leads/i,
    });
    const aiChip = screen.getByRole("button", {
      name: /Assistente com IA/i,
    });
    const seoChip = screen.getByRole("button", {
      name: /SEO p\/ Google/i,
    });
    const whatsappChip = screen.getByRole("button", {
      name: /Botão & Funil de WhatsApp/i,
    });

    // Enable two extra features
    fireEvent.click(leadCalcChip);
    fireEvent.click(aiChip);

    expect(leadCalcChip).toHaveAttribute("aria-pressed", "true");
    expect(aiChip).toHaveAttribute("aria-pressed", "true");

    let decoded = decodeURIComponent(whatsappLink.getAttribute("href") ?? "");
    expect(decoded).toContain("Calculadora Captadora de Leads");
    expect(decoded).toContain("Assistente com IA");
    expect(decoded).toContain("Google Gemini");
    expect(screen.getByText("Google Gemini")).toBeInTheDocument();

    // Disable an initial feature and select a different timeline
    fireEvent.click(seoChip);
    expect(seoChip).toHaveAttribute("aria-pressed", "false");

    const validateTimeline = screen.getByRole("button", {
      name: /Quero validar a ideia e escopo/i,
    });
    fireEvent.click(validateTimeline);
    expect(validateTimeline).toHaveAttribute("aria-pressed", "true");

    decoded = decodeURIComponent(whatsappLink.getAttribute("href") ?? "");
    expect(decoded).not.toContain("SEO p/ Google");
    expect(decoded).toContain("Quero validar a ideia e escopo");

    // Disable all remaining features to verify empty-state fallback text
    fireEvent.click(whatsappChip);
    fireEvent.click(leadCalcChip);
    fireEvent.click(aiChip);

    decoded = decodeURIComponent(whatsappLink.getAttribute("href") ?? "");
    expect(decoded).toContain("Escopo essencial sob consulta");
  });

  it("provides direct WhatsApp quote links on all 4 showcase tool cards", () => {
    render(<SolutionsConfigurator />);

    const quoteLinks = screen.getAllByRole("link", {
      name: /Solicitar orçamento no WhatsApp/i,
    });
    expect(quoteLinks).toHaveLength(4);

    for (const link of quoteLinks) {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith(`${profile.whatsapp}?text=`)).toBe(true);
    }
  });
});
