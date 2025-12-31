import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Adilson - Desenvolvedor Front-end",
  description: "Artigos sobre React, Next.js, React Native e desenvolvimento web moderno",
};

// Dados de exemplo - você pode substituir por dados de um CMS ou arquivos MDX
const blogPosts = [
  {
    id: 1,
    slug: "otimizando-performance-nextjs",
    title: "Otimizando Performance em Next.js 14",
    excerpt: "Aprenda técnicas avançadas para melhorar o desempenho da sua aplicação Next.js com SSR, ISR e App Router.",
    image: "/no-img.png",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Next.js",
    tags: ["Next.js", "Performance", "SSR"],
  },
  {
    id: 2,
    slug: "react-hooks-avancados",
    title: "React Hooks Avançados: useCallback e useMemo",
    excerpt: "Entenda quando e como usar useCallback e useMemo para otimizar seus componentes React.",
    image: "/no-img.png",
    date: "2024-01-10",
    readTime: "6 min",
    category: "React",
    tags: ["React", "Hooks", "Performance"],
  },
  {
    id: 3,
    slug: "typescript-patterns",
    title: "Padrões TypeScript para React Developers",
    excerpt: "Descubra padrões de TypeScript que vão melhorar a qualidade e manutenibilidade do seu código React.",
    image: "/no-img.png",
    date: "2024-01-05",
    readTime: "10 min",
    category: "TypeScript",
    tags: ["TypeScript", "React", "Best Practices"],
  },
  {
    id: 4,
    slug: "animacoes-framer-motion",
    title: "Criando Animações Incríveis com Framer Motion",
    excerpt: "Um guia completo sobre como criar animações fluidas e performáticas usando Framer Motion.",
    image: "/no-img.png",
    date: "2023-12-28",
    readTime: "12 min",
    category: "Animation",
    tags: ["Framer Motion", "Animation", "UX"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Compartilho conhecimentos sobre desenvolvimento front-end, dicas práticas e novidades do ecossistema React.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group glass-effect rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all overflow-hidden modern-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-effect text-sm text-purple-400">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
