"use client";

import React from "react";

export function SectionDivider() {
  return (
    <div className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="relative h-px">
            {/* Linha gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            {/* Pontos decorativos */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
