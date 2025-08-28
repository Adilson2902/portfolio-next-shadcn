"use client";

import Image from "next/image";
import ColourfulText from "@/components/ui/colourful-text";
import { cn } from "@/lib/utils"; // se não tiver, troque por uma simples concatenação

export function Hero() {
  return (
    <section id="home" className="bg-background pt-16 sm:pt-24 text-center">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative mx-auto mb-8 sm:mb-10 grid place-items-center">
          <div className="relative size-[200px] sm:size-[260px] md:size-[320px] xl:size-[360px]">
            {/* Círculo de ícones */}
            <div
              className={cn(
                "absolute inset-0 pointer-events-none",
                "motion-safe:animate-[spin_22s_linear_infinite] motion-reduce:animate-none",
                "-translate-y-1 sm:-translate-y-2 md:-translate-y-3"
              )}
              aria-hidden="true"
            >
              {ICONS.map((ic) => (
                <Icon key={ic.alt} {...ic} />
              ))}
            </div>

            {/* Foto retangular, recorte leve nas laterais e borda colada */}
            <div className="relative z-10 mx-auto grid place-items-center translate-y-4 sm:translate-y-6 md:translate-y-10">
              <div className="relative w-[60%] sm:w-[56%] md:w-[52%] lg:w-[48%]">
                <div
                  className="
        relative aspect-[3/4]
        [--cropX:3.5%] sm:[--cropX:3%] md:[--cropX:2.5%]
        [--cropY:0%]
      "
                >
                  {/* área recortada onde a imagem fica */}
                  <div className="absolute inset-0 [clip-path:inset(var(--cropY)_var(--cropX)_var(--cropY)_var(--cropX))] overflow-hidden">
                    <Image
                      src="/home.png"
                      alt="Adilson — Desenvolvedor Front-end"
                      fill
                      sizes="(max-width: 640px) 60vw,(max-width: 768px) 56vw,(max-width: 1024px) 52vw,420px"
                      priority
                      className="
            object-contain
            transition-[object-position,transform] duration-300 ease-out
            object-[50%_66%] sm:object-[50%_62%] md:object-center
            scale-[1.02] sm:scale-[1.01]
          "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-space-grotesk mb-3 text-primary tracking-tight">
          Adilson — Desenvolvedor Front-end
        </h1>

        {/* Stack SEM QUEBRA DE LINHA (reduz tamanho no mobile para não estourar) */}
        <p className="text-xl sm:text-3xl md:text-5xl font-space-grotesk mb-4 leading-tight tracking-tight">
          <span className="inline-block whitespace-nowrap">
            <ColourfulText
              text={"React\u00A0•\u00A0Next.js\u00A0•\u00A0React\u00A0Native"}
            />
          </span>
        </p>

        {/* Subtítulo com palavras-chave naturais */}
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 font-space-grotesk mx-auto max-w-2xl">
          Desenvolvo <strong>sites</strong> e <strong>aplicativos</strong> com{" "}
          <strong>SEO técnico</strong>, <strong>SSR/SSG</strong>,{" "}
          <strong>Core Web Vitals</strong> e design responsivo. Trabalho com{" "}
          <strong>Tailwind</strong>/<strong>shadcn/ui</strong>, animações em{" "}
          <strong>Framer Motion</strong> e publicações em{" "}
          <strong>React Native</strong> para iOS e Android — foco em performance
          e conversão.
        </p>
      </div>
    </section>
  );
}

/** Ícones em posições responsivas ao redor do círculo */
function Icon({
  src,
  alt,
  pos,
}: {
  src: string;
  alt: string;
  pos:
    | "top"
    | "top-right"
    | "right"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left"
    | "top-left";
}) {
  const base = "absolute drop-shadow-sm";
  const size = "size-6 sm:size-7 md:size-8"; // escala suave
  const map: Record<string, string> = {
    top: "left-1/2 top-0 -translate-x-1/2",
    "top-right": "right-[15%] top-[15%] translate-x-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2",
    "bottom-right": "right-[15%] bottom-[15%] translate-x-1/2 translate-y-1/2",
    bottom: "left-1/2 bottom-0 -translate-x-1/2",
    "bottom-left": "left-[15%] bottom-[15%] -translate-x-1/2 translate-y-1/2",
    left: "left-0 top-1/2 -translate-y-1/2",
    "top-left": "left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`${base} ${map[pos]}`}>
      <Image src={src} alt={alt} width={32} height={32} className={size} />
    </div>
  );
}

const ICONS: Array<Parameters<typeof Icon>[0]> = [
  {
    pos: "top",
    alt: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    pos: "top-right",
    alt: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    pos: "right",
    alt: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  },
  {
    pos: "bottom-right",
    alt: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    pos: "bottom",
    alt: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    pos: "bottom-left",
    alt: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    pos: "left",
    alt: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    pos: "top-left",
    alt: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];
