"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar se é mobile
    setIsMobile(window.innerWidth <= 768);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updatePosition);
    }
    
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isMobile]);

  // Não renderizar no mobile
  if (isMobile) return null;

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
          background: "white",
        }}
      />
      
      {/* Cursor de seguimento */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-300 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          border: "2px solid white",
          opacity: 0.5,
        }}
      />
    </>
  );
}
