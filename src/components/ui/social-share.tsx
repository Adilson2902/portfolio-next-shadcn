"use client";

import { motion } from "motion/react";
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || "Confira este portfólio incrível!";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copiado para a área de transferência!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar link");
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glass-effect p-3 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all modern-hover"
        aria-label="Compartilhar"
      >
        <Share2 className="w-5 h-5 text-purple-400" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="absolute bottom-full mb-2 right-0 glass-effect p-4 rounded-2xl border border-purple-500/30 shadow-xl min-w-[200px]"
        >
          <p className="text-sm text-gray-400 mb-3">Compartilhar via:</p>
          <div className="flex flex-col gap-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors text-white"
            >
              <Facebook className="w-5 h-5 text-blue-500" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors text-white"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors text-white"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-colors text-white"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
              <span className="text-sm">{copied ? "Copiado!" : "Copiar link"}</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
