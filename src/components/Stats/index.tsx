"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Code2, Briefcase, Coffee, Zap } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  gradient: string;
}

function StatItem({ icon, value, label, suffix = "", delay, gradient }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect border-2 border-purple-500/30 hover:border-purple-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 modern-hover group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm sm:text-base">{label}</div>
      
      {/* Efeito de brilho */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    {
      icon: <Briefcase className="w-7 h-7 text-white" />,
      value: 15,
      suffix: "+",
      label: "Projetos Entregues",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: <Code2 className="w-7 h-7 text-white" />,
      value: 50000,
      suffix: "+",
      label: "Linhas de Código",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      value: 3,
      suffix: "+",
      label: "Anos de Experiência",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Coffee className="w-7 h-7 text-white" />,
      value: 999,
      suffix: "+",
      label: "Xícaras de Café",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradientes de fundo */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Números que Contam Histórias
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada projeto é uma jornada de aprendizado e crescimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              gradient={stat.gradient}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
