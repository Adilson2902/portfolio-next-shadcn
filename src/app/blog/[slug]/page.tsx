import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SocialShare } from "@/components/ui/social-share";

// Dados de exemplo
const blogPosts: Record<string, any> = {
  "otimizando-performance-nextjs": {
    title: "Otimizando Performance em Next.js 14",
    excerpt: "Aprenda técnicas avançadas para melhorar o desempenho da sua aplicação Next.js",
    image: "/no-img.png",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Next.js",
    tags: ["Next.js", "Performance", "SSR"],
    content: `
# Otimizando Performance em Next.js 14

Next.js 14 trouxe diversas melhorias de performance que podem transformar sua aplicação.

## Server Components

Os Server Components são uma das maiores inovações. Eles permitem renderizar componentes no servidor, reduzindo o JavaScript enviado ao cliente.

\`\`\`tsx
// app/page.tsx
async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{/* seu conteúdo */}</div>;
}
\`\`\`

## Image Optimization

Use o componente Image do Next.js para otimização automática:

\`\`\`tsx
import Image from 'next/image';

<Image src="/photo.jpg" alt="Foto" width={800} height={600} priority />
\`\`\`

## Conclusão

Aplicar essas técnicas pode melhorar significativamente a performance da sua aplicação.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog Adilson`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Adilson"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full glass-effect text-sm text-purple-400 mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <SocialShare title={post.title} />
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-invert prose-purple max-w-none">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
