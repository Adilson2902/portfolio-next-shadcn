"use client";

import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 text-center overflow-hidden">
      {/* Linha gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Ícone decorativo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium gradient-text">Desenvolvido com dedicação</span>
        </div>
        
        {/* Texto principal */}
        <p className="text-sm text-gray-400 mb-2">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Adilson</span>. Todos os direitos reservados.
        </p>
        
        {/* Badge de stack */}
        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          <span className="glass-effect px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
            React
          </span>
          <span className="glass-effect px-3 py-1 rounded-full text-xs font-medium border border-pink-500/30">
            Next.js
          </span>
          <span className="glass-effect px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
            TypeScript
          </span>
          <span className="glass-effect px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
            Tailwind CSS
          </span>
        </div>

        {/* LinkedIn */}
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/adilson-adriano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-500/60 transition-all modern-hover"
          >
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Adilson Adriano</span>
          </a>
        </div>

        {/* Feito com amor */}
        <p className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
          Feito com <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> e muito café
        </p>
      </div>
    </footer>
  );
}
