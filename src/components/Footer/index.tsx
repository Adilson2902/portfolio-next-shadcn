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

        {/* Feito com amor */}
        <p className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
          Feito com <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> e muito café
        </p>
      </div>
    </footer>
  );
}
