"use client";

import { motion } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Quais tecnologias você domina?",
    answer: "Sou especializado em React, Next.js, React Native, TypeScript, Tailwind CSS, e Framer Motion. Também tenho experiência com Node.js, GraphQL, e várias ferramentas de CI/CD e otimização de performance.",
  },
  {
    id: 2,
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "Depende da complexidade do projeto. Um landing page pode levar 1-2 semanas, enquanto uma aplicação web completa pode levar de 1 a 3 meses. Sempre forneço uma estimativa detalhada após entender os requisitos.",
  },
  {
    id: 3,
    question: "Você oferece suporte após a entrega?",
    answer: "Sim! Ofereço suporte técnico e manutenção por 30 dias após a entrega. Também disponibilizo pacotes de manutenção mensal para atualizações contínuas e melhorias.",
  },
  {
    id: 4,
    question: "Como é o seu processo de desenvolvimento?",
    answer: "Sigo uma metodologia ágil: início com briefing e planejamento, depois design/protótipo, desenvolvimento iterativo com revisões semanais, testes de qualidade, e finalmente deploy e treinamento.",
  },
  {
    id: 5,
    question: "Você desenvolve aplicativos mobile?",
    answer: "Sim! Desenvolvo aplicativos mobile usando React Native, que permite criar apps para iOS e Android simultaneamente, reduzindo custos e tempo de desenvolvimento.",
  },
  {
    id: 6,
    question: "Como funciona o pagamento?",
    answer: "Geralmente divido em 3 parcelas: 30% no início, 40% na entrega do MVP, e 30% na entrega final. Para projetos menores, posso trabalhar com 50% no início e 50% na entrega.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full glass-effect border border-purple-500/30">
              <HelpCircle className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre meus serviços e processo de trabalho
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
