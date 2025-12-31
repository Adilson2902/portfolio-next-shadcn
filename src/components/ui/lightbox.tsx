"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  isOpen: boolean;
}

export function Lightbox({ images, currentIndex, onClose, isOpen }: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrevious, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-effect hover:bg-white/10 transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 p-3 rounded-full glass-effect hover:bg-white/10 transition-colors z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-3 rounded-full glass-effect hover:bg-white/10 transition-colors z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`Imagem ${index + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-effect text-white text-sm">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
