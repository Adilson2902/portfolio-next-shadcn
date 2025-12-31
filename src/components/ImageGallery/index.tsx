"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";
import { Image as ImageIcon } from "lucide-react";

const galleryImages = [
  "/home.png",
  "/no-img.png",
  "/myphoto.jpeg",
  "/home.png",
  "/no-img.png",
  "/myphoto.jpeg",
];

export default function ImageGallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full glass-effect border border-purple-500/30">
              <ImageIcon className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Galeria</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns momentos e projetos capturados
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`Galeria ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}
