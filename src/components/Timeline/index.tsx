"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Desenvolvedor Front-end Sênior",
    company: "Freelancer / Projetos Diversos",
    period: "2021 - Presente",
    description: "Desenvolvimento de aplicações web e mobile com React, React Native e Next.js. Especialização em performance, SEO técnico e arquiteturas escaláveis.",
    skills: ["React", "Next.js", "React Native", "TypeScript"],
  },
  {
    id: 2,
    type: "work",
    title: "Desenvolvedor React & React Native",
    company: "Projetos Comerciais",
    period: "2021 - Presente (4 anos)",
    description: "Mais de 4 anos de experiência sólida desenvolvendo aplicações com React e React Native para web e mobile (iOS/Android).",
    skills: ["React", "React Native", "Redux", "Context API"],
  },
  {
    id: 3,
    type: "work",
    title: "Especialista Next.js & Tailwind CSS",
    company: "Projetos Modernos",
    period: "2023 - Presente (2 anos)",
    description: "2 anos de experiência com Next.js (App Router, SSR, SSG) e Tailwind CSS, criando sites performáticos e responsivos.",
    skills: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    id: 4,
    type: "achievement",
    title: "Portfólio de Projetos",
    company: "Diversos Clientes",
    period: "2021 - 2025",
    description: "Mais de 15 projetos entregues incluindo e-commerce, dashboards, landing pages, apps mobile e sites institucionais.",
    skills: ["React", "Next.js", "React Native", "TypeScript"],
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Experiência</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha jornada profissional e acadêmica
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.type as keyof typeof iconMap];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Ícone central */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-effect border-2 border-purple-500/50 flex items-center justify-center z-10">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>

                  {/* Conteúdo */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="glass-effect p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all modern-hover">
                      <div className="inline-block px-3 py-1 rounded-full glass-effect text-sm text-purple-400 mb-3">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-purple-400 font-medium mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
