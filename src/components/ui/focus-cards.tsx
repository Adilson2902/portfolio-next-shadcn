"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export type FocusCard = {
  title: string;
  src?: string;
  icon?: React.ReactNode;
  backgroundClassName?: string;
  description?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: FocusCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative rounded-2xl overflow-hidden h-64 md:h-[26rem] w-full transition-all duration-500 ease-out cursor-pointer block",
        "border border-white/10 hover:border-purple-500/60",
        "shadow-lg hover:shadow-purple-500/30 hover:shadow-2xl",
        hovered !== null && hovered !== index && "blur-sm scale-[0.97] opacity-60"
      )}
    >
      <CardMedia card={card} hovered={hovered === index} />
      <CardOverlay card={card} hovered={hovered === index} />
    </motion.a>
  )
);

Card.displayName = "Card";

function CardMedia({ card, hovered }: { card: FocusCard; hovered: boolean }) {
  const [failed, setFailed] = useState(false);
  const useImage = !!card.src && !failed;

  if (useImage) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={card.src!}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            hovered ? "scale-110" : "scale-100"
          )}
          onError={() => setFailed(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      </div>
    );
  }

  const bg =
    card.backgroundClassName ||
    "bg-gradient-to-br from-purple-600/30 via-indigo-500/20 to-transparent";

  return (
    <div className={cn("absolute inset-0 w-full h-full", bg)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative h-full w-full flex items-center justify-center">
        <div
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/10 text-neutral-100 transition-all duration-500",
            hovered ? "scale-125 rotate-6 shadow-purple-500/30 shadow-lg" : "scale-100 rotate-0"
          )}
        >
          <span className="scale-150">{card.icon}</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>
  );
}

function CardOverlay({ card, hovered }: { card: FocusCard; hovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
      <div className="w-full px-5 pb-5 pt-10 bg-gradient-to-t from-black/80 to-transparent">
        {/* Icon badge (only when has image) */}
        {card.icon && card.src && (
          <div
            className={cn(
              "w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 transition-all duration-500",
              hovered
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-90"
            )}
          >
            {card.icon}
          </div>
        )}

        {/* Title */}
        <p className="text-lg md:text-xl font-bold tracking-tight text-white drop-shadow-lg">
          {card.title}
        </p>

        {/* Description — always visible on mobile, hover on desktop */}
        {card.description && (
          <p
            className={cn(
              "text-sm text-gray-300/90 mt-1.5 leading-relaxed transition-all duration-500 max-w-[95%]",
              "opacity-100 md:opacity-0 md:translate-y-2 md:max-h-0 overflow-hidden",
              hovered && "md:opacity-100 md:translate-y-0 md:max-h-20"
            )}
          >
            {card.description}
          </p>
        )}

        {/* CTA */}
        <div
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 transition-all duration-500",
            "opacity-100 md:opacity-0 md:translate-y-2",
            hovered && "md:opacity-100 md:translate-y-0"
          )}
        >
          <span>Solicitar projeto</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Accent line */}
        <div
          className={cn(
            "h-0.5 mt-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
            hovered ? "w-full opacity-100" : "w-8 opacity-40"
          )}
        />
      </div>
    </div>
  );
}

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
