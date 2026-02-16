"use client";

import Image from "next/image";
import ColourfulText from "@/components/ui/colourful-text";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Sparkles, Code2, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-16 sm:pt-24 pb-12 text-center overflow-hidden">
      {/* Orbes de gradiente animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-500"></div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Badge superior animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-effect border border-purple-500/30"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium gradient-text">Desenvolvedor Front-end Moderno</span>
        </motion.div>

        <div className="relative mx-auto mb-8 sm:mb-10 grid place-items-center">
          <div className="relative size-[220px] sm:size-[280px] md:size-[340px] xl:size-[380px]">
            {/* Anel de gradiente */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-20 blur-xl animate-pulse"></div>
            
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

            {/* Foto com borda gradiente */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mx-auto grid place-items-center translate-y-4 sm:translate-y-6 md:translate-y-10"
            >
              <div className="relative w-[60%] sm:w-[56%] md:w-[52%] lg:w-[48%]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-md opacity-60"></div>
                <div
                  className="
        relative aspect-[3/4]
        [--cropX:3.5%] sm:[--cropX:3%] md:[--cropX:2.5%]
        [--cropY:0%]
      "
                >
                  <div className="absolute inset-0 [clip-path:inset(var(--cropY)_var(--cropX)_var(--cropY)_var(--cropX))] overflow-hidden rounded-2xl ring-2 ring-purple-500/50">
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
            </motion.div>
          </div>
        </div>

        {/* Título principal com gradiente */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-space-grotesk mb-4 tracking-tight"
        >
          <span className="gradient-text">Adilson</span>
          <br />
          <span className="text-white">Desenvolvedor Front-end</span>
        </motion.h1>

        {/* Stack com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk mb-6 leading-tight tracking-tight"
        >
          <ColourfulText
            text={"React • Next.js • React Native"}
          />
        </motion.div>

        {/* Cards de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="glass-effect px-6 py-3 rounded-xl flex items-center gap-2 modern-hover">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium">TypeScript Expert</span>
          </div>
          <div className="glass-effect px-6 py-3 rounded-xl flex items-center gap-2 modern-hover">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium">Performance Focused</span>
          </div>
          <div className="glass-effect px-6 py-3 rounded-xl flex items-center gap-2 modern-hover">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium">3D Animations</span>
          </div>
        </motion.div>

        {/* Subtítulo moderno */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 font-dm-sans mx-auto max-w-3xl leading-relaxed"
        >
          <span className="text-purple-400 font-semibold">4 anos</span> de experiência com{" "}
          <span className="text-pink-400 font-semibold">React</span> e{" "}
          <span className="text-cyan-400 font-semibold">React Native</span>, e{" "}
          <span className="text-purple-400 font-semibold">2 anos</span> com{" "}
          <span className="text-pink-400 font-semibold">Next.js</span> e{" "}
          <span className="text-cyan-400 font-semibold">Tailwind CSS</span>. Desenvolvo sites e apps com{" "}
          <span className="text-purple-400 font-semibold">SEO técnico</span>,{" "}
          <span className="text-pink-400 font-semibold">SSR/SSG</span>,{" "}
          <span className="text-cyan-400 font-semibold">Core Web Vitals</span> e design responsivo — foco em performance e conversão.
        </motion.p>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/adilson-adriano"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-xl flex items-center gap-3 modern-hover border border-purple-500/30 hover:border-purple-500/60 transition-all group"
          >
            <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>
        </motion.div>
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
