"use client";

import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid animado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      
      {/* Orbes flutuantes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Raios de luz */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-pink-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
    </div>
  );
}
