"use client";

import React from "react";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiMongodb 
} from "react-icons/si";
import { Code2 } from "lucide-react";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "from-cyan-400 to-blue-500",
    description: "Biblioteca JavaScript para interfaces",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "from-gray-700 to-gray-900",
    description: "Framework React para produção",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-500 to-blue-700",
    description: "JavaScript com tipagem estática",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "from-cyan-400 to-teal-500",
    description: "Framework CSS utility-first",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "from-green-500 to-green-700",
    description: "JavaScript runtime",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "from-orange-500 to-red-600",
    description: "Controle de versão",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "from-purple-500 to-pink-500",
    description: "Design de interfaces",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "from-green-600 to-green-800",
    description: "Banco de dados NoSQL",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Gradientes de fundo */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              Tecnologias
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stack moderna e ferramentas que utilizo para criar experiências incríveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <CardContainer className="w-full">
                  <CardBody className="glass-effect border-2 border-purple-500/30 hover:border-purple-500/60 rounded-2xl p-6 w-full h-48 flex flex-col items-center justify-center gap-4 transition-all duration-300 group">
                    <CardItem translateZ={100} className="w-full flex justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </CardItem>
                    
                    <CardItem translateZ={70} className="text-center w-full">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {skill.description}
                      </p>
                    </CardItem>

                    {/* Efeito de brilho gradiente */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
