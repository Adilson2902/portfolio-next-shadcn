"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Lightweight GPU-only section reveal optimized for mobile:
 * - Zero `filter: blur()` repaints across tall sections
 * - Triggers early (`rootMargin: "160px 0px"`, `threshold: 0.01`) so tall
 *   mobile stacks never wait invisibly
 * - Uses `content-visibility: auto` on mobile via `.reveal-section`
 */
export function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    return reduced || typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal-section${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={
        delay > 0 && !visible
          ? { transitionDelay: `${Math.min(delay, 120)}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
