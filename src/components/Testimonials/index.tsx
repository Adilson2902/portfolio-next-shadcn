"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "CEO, TechCorp",
    image: "/no-img.png",
    rating: 5,
    text: "Trabalho excepcional! O Adilson entregou um site moderno, rápido e com excelente SEO. Nossa conversão aumentou 150%.",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Product Manager, StartupXYZ",
    image: "/no-img.png",
    rating: 5,
    text: "Profissional extremamente competente. Domina React Native e entregou nosso app para iOS e Android com qualidade impecável.",
  },
  {
    id: 3,
    name: "Pedro Costa",
    role: "CTO, E-commerce Plus",
    image: "/no-img.png",
    rating: 5,
    text: "Conhecimento profundo em Next.js e otimização de performance. Nosso Core Web Vitals melhorou significativamente!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Depoimentos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            O que meus clientes dizem sobre meu trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all modern-hover"
            >
              <Quote className="w-10 h-10 text-purple-400 mb-4 opacity-50" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
