"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("pt");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    // Aqui você pode adicionar a lógica de internacionalização
    // Por exemplo: i18n.changeLanguage(code);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glass-effect px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all flex items-center gap-2 modern-hover"
        aria-label="Alternar idioma"
      >
        <Globe className="w-4 h-4 text-purple-400" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="text-sm">{currentLanguage?.code.toUpperCase()}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="absolute top-full mt-2 right-0 glass-effect p-2 rounded-2xl border border-purple-500/30 shadow-xl min-w-[160px] z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors ${
                currentLang === lang.code ? "bg-purple-500/20" : ""
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-white">{lang.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
