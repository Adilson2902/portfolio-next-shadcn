/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-[26rem] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <CardMedia card={card} />
      <CardOverlay title={card.title} hovered={hovered === index} />
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src?: string;
  icon?: React.ReactNode;
  backgroundClassName?: string; // Tailwind classes for gradient/pattern backgrounds
};

function CardMedia({ card }: { card: Card }) {
  const [failed, setFailed] = useState(false);
  const useImage = !!card.src && !failed;
  const bg = useMemo(() => {
    if (card.backgroundClassName) return card.backgroundClassName;
    // pleasant default gradient
    return "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent dark:from-primary/30 dark:via-primary/20";
  }, [card.backgroundClassName]);

  if (useImage) {
    return (
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={cn("absolute inset-0 w-full h-full", bg)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md flex items-center justify-center shadow-sm border border-black/5 dark:border-white/10 text-neutral-900 dark:text-neutral-100">
          {card.icon}
        </div>
      </div>
    </div>
  );
}

function CardOverlay({ title, hovered }: { title: string; hovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0">
      <div
        className={cn(
          "w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-5 transition-all duration-300",
          hovered ? "from-black/80 via-black/50" : "from-black/60 via-black/30"
        )}
      >
        <div className="text-xl md:text-3xl font-semibold tracking-tight text-white drop-shadow-sm">
          {title}
        </div>
      </div>
    </div>
  );
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
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
