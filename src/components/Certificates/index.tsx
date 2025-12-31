"use client";

import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "React Advanced Patterns",
    issuer: "Meta (Facebook)",
    date: "2023",
    image: "/no-img.png",
    link: "#",
    skills: ["React", "Hooks", "Performance"],
  },
  {
    id: 2,
    title: "Next.js 14 Masterclass",
    issuer: "Vercel",
    date: "2023",
    image: "/no-img.png",
    link: "#",
    skills: ["Next.js", "SSR", "App Router"],
  },
  {
    id: 3,
    title: "TypeScript Expert",
    issuer: "Microsoft",
    date: "2022",
    image: "/no-img.png",
    link: "#",
    skills: ["TypeScript", "Types", "Generics"],
  },
  {
    id: 4,
    title: "React Native Developer",
    issuer: "React Native School",
    date: "2022",
    image: "/no-img.png",
    link: "#",
    skills: ["React Native", "iOS", "Android"],
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    issuer: "Google",
    date: "2023",
    image: "/no-img.png",
    link: "#",
    skills: ["Performance", "Core Web Vitals", "Lighthouse"],
  },
  {
    id: 6,
    title: "Advanced CSS & Tailwind",
    issuer: "Tailwind Labs",
    date: "2022",
    image: "/no-img.png",
    link: "#",
    skills: ["CSS", "Tailwind", "Design Systems"],
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Certificados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Certificações e cursos que comprovam minha expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-effect rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all overflow-hidden modern-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 p-3 rounded-full glass-effect border border-purple-500/30">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-purple-400">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-effect hover:bg-purple-500/20 transition-all"
                    aria-label="Ver certificado"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
