"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  pauseOnHover?: boolean;
}

const speedMap = {
  slow: "40s",
  normal: "20s",
  fast: "10s",
};

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  const animationDirection = direction === "left" || direction === "up" ? "normal" : "reverse";
  const isVertical = direction === "up" || direction === "down";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isVertical ? "h-full" : "w-full",
        className
      )}
    >
      <div
        className={cn(
          "flex",
          isVertical ? "flex-col" : "flex-row",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee-${isVertical ? "vertical" : "horizontal"} ${speedMap[speed]} linear infinite`,
          animationDirection,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// Adicione essas animações ao seu globals.css:
// @keyframes marquee-horizontal {
//   from { transform: translateX(0); }
//   to { transform: translateX(-50%); }
// }
//
// @keyframes marquee-vertical {
//   from { transform: translateY(0); }
//   to { transform: translateY(-50%); }
// }
