"use client";

import { motion, AnimatePresence } from "motion/react";
import { Search, Command } from "lucide-react";
import { useState, useEffect } from "react";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  action: () => void;
}

interface CommandPaletteProps {
  items: CommandItem[];
}

export function CommandPalette({ items }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Filtrar itens baseado na busca
  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Atalho de teclado Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearch("");
    }
  }, [isOpen]);

  const handleAction = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="glass-effect px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all flex items-center gap-2 text-sm modern-hover"
      >
        <Search className="w-4 h-4 text-purple-400" />
        <span className="text-gray-400">Buscar...</span>
        <kbd className="px-2 py-1 text-xs rounded bg-purple-500/10 border border-purple-500/20">
          <Command className="w-3 h-3 inline" /> K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Palette */}
            <div className="fixed inset-0 z-[101] flex items-start justify-center pt-32 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl glass-effect rounded-2xl border border-purple-500/30 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-purple-500/20">
                  <Search className="w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Digite para buscar..."
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 text-xs rounded bg-purple-500/10 border border-purple-500/20">
                    ESC
                  </kbd>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto p-2">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleAction(item.action)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 transition-colors text-left"
                      >
                        {item.icon && (
                          <div className="text-purple-400">{item.icon}</div>
                        )}
                        <div className="flex-1">
                          <div className="text-white font-medium">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-400">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="py-12 text-center text-gray-400">
                      Nenhum resultado encontrado
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
