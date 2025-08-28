"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Briefcase, Code2, Mail } from "lucide-react";

/**
 * Navbar moderna no estilo "Floating Dock" (Aceternity),
 * fixa no rodapé, com realce do item conforme a seção visível.
 *
 * Seções esperadas no DOM: #home, #about, #projects, #stack, #contact
 */
export function Navbar() {
  const [active, setActive] = useState<string>("home");

  // Observa as seções da página e atualiza o item ativo
  useEffect(() => {
    const ids = ["home", "about", "projects", "stack", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pega a seção mais visível
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        // dispara um pouco antes/ depois pra ficar mais suave
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "0px 0px -25% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Helper pra estilizar ícones com base na seção ativa
  const iconClass = (isActive: boolean) =>
    [
      "h-full w-full",
      isActive ? "text-primary" : "text-neutral-500 dark:text-neutral-300",
      "transition-colors",
    ].join(" ");

  const links = useMemo(
    () => [
      {
        title: "Início",
        href: "#home",
        icon: <Home className={iconClass(active === "home")} />,
      },
      {
        title: "Serviços",
        href: "#services",
        icon: <Briefcase className={iconClass(active === "services")} />,
      },
      {
        title: "Ganhos",
        href: "#win",
        icon: <Code2 className={iconClass(active === "win")} />,
      },
      {
        title: "Contato",
        href: "#contact",
        icon: <Mail className={iconClass(active === "contact")} />,
      },
    ],
    [active]
  );

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-50
        flex items-end justify-center
        pointer-events-none pb-[calc(env(safe-area-inset-bottom)+0.75rem)]
      "
      aria-label="Navegação inferior"
    >
      <div className="pointer-events-auto">
        <FloatingDock
          // mantém o dock flutuante no mobile sem empurrar layout
          mobileClassName=""
          // classes extras para acabamento (vidro + leve sombra)
          desktopClassName="
            backdrop-blur-md bg-primary/70 dark:bg-black/50
            shadow-lg
          "
          items={links}
        />
      </div>
    </div>
  );
}
