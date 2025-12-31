"use client";

import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Por favor, insira um email válido!");
      return;
    }

    setIsLoading(true);
    
    // Simula envio (você pode integrar com sua API aqui)
    setTimeout(() => {
      toast.success("Inscrição realizada com sucesso! 🎉");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
          
          <div className="relative glass-effect p-8 md:p-12 rounded-3xl border border-purple-500/30">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect border border-purple-500/30">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-center mb-4">
              <span className="gradient-text">Newsletter</span>
            </h2>
            
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Receba dicas exclusivas sobre desenvolvimento front-end, novidades em React/Next.js e insights sobre performance web diretamente no seu email.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-full glass-effect border border-purple-500/30 focus:border-purple-500/60 outline-none transition-all text-white placeholder:text-gray-500"
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold flex items-center gap-2 justify-center hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Inscrever-se"}
                <Send className="w-5 h-5" />
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Sem spam. Cancele a qualquer momento. 🔒
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
