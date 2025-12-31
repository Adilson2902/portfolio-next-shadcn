"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

export function CopyToClipboard({ text, children, className = "" }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copiado para a área de transferência!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar texto");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border border-purple-500/30 hover:border-purple-500/50 transition-all modern-hover ${className}`}
      aria-label="Copiar para área de transferência"
    >
      {children || text}
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </motion.button>
  );
}
