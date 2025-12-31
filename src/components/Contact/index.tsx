"use client";

import { motion } from "motion/react";
import { ContactPinCard } from "./Card";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 flex flex-col items-center py-24 scroll-mt-24 overflow-hidden">
      {/* Gradientes de fundo */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessageCircle className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text text-center">
            Contatos
          </h2>
        </div>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Entre em contato para discutir seu próximo projeto
        </p>
      </motion.div>

      <div className="relative z-10 mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactPinCard type="mail" handle="nunojraa3@gmail.com" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactPinCard type="instagram" handle="adilsonadriano123" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactPinCard type="whatsApp" handle="81982644557" />
        </motion.div>
      </div>
    </section>
  );
}
