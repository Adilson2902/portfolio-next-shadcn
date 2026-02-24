"use client";

import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Resume() {
  return (
    <article className="print-resume bg-white text-gray-900">
      <header className="print-avoid-break mb-6 border-b-4 border-purple-600 pb-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Adilson Adriano
        </h1>
        <h2 className="mt-1 text-xl font-semibold text-purple-700">
          Desenvolvedor Front-end | React, Next.js e React Native
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          Especialista em interfaces de alto desempenho, SEO técnico e
          aplicações escaláveis para web e mobile.
        </p>

        <div className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-purple-700" />
            <span>nunojraa3@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-purple-700" />
            <span>(81) 98264-4557</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-purple-700" />
            <span>linkedin.com/in/adilson-adriano</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-purple-700" />
            <span>Recife - PE</span>
          </div>
        </div>
      </header>

      <section className="print-avoid-break mb-6">
        <h3 className="mb-3 border-b-2 border-gray-300 pb-2 text-base font-bold tracking-wide text-gray-900">
          RESUMO PROFISSIONAL
        </h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Desenvolvedor front-end com atuação em produtos digitais de ponta a
          ponta, combinando engenharia de software, design de interface e visão
          de negócio. Experiência em React, Next.js, React Native e TypeScript,
          com foco em performance, manutenibilidade e conversão.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="mb-3 border-b-2 border-gray-300 pb-2 text-base font-bold tracking-wide text-gray-900">
          EXPERIÊNCIA PROFISSIONAL
        </h3>

        <div className="print-avoid-break mb-4">
          <div className="mb-1 flex items-start justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Desenvolvedor Front-end React e React Native
              </h4>
              <p className="text-sm font-semibold text-purple-700">Wiipo</p>
            </div>
            <span className="text-xs font-medium text-gray-600">
              2021 - Atual
            </span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
            <li>Desenvolvimento de aplicações web com React e Next.js.</li>
            <li>
              Entrega de aplicativos mobile multiplataforma com React Native.
            </li>
            <li>
              Integrações com APIs REST/GraphQL e evolução contínua de produto.
            </li>
            <li>
              Implementação de interfaces responsivas com foco em acessibilidade
              e experiência do usuário.
            </li>
          </ul>
        </div>

        <div className="print-avoid-break mb-4">
          <div className="mb-1 flex items-start justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Desenvolvedor Front-end (Estágio)
              </h4>
              <p className="text-sm font-semibold text-purple-700">ImuneKids</p>
            </div>
            <span className="text-xs font-medium text-gray-600">
              2020 - 2023
            </span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
            <li>
              Criação de interfaces em React e Next.js para produtos web.
            </li>
            <li>Desenvolvimento de componentes reutilizáveis e escaláveis.</li>
            <li>
              Consumo de APIs REST e implementação de layouts responsivos.
            </li>
          </ul>
        </div>

        <div className="print-avoid-break">
          <div className="mb-1 flex items-start justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Desenvolvedor Front-end Freelancer
              </h4>
              <p className="text-sm font-semibold text-purple-700">
                Projetos Diversos
              </p>
            </div>
            <span className="text-xs font-medium text-gray-600">
              2023 - 2025
            </span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
            <li>
              Entrega de 15+ projetos, incluindo plataformas, landing pages e
              dashboards.
            </li>
            <li>
              Implementação de SEO técnico, Core Web Vitals e boas práticas de
              acessibilidade.
            </li>
            <li>
              Desenvolvimento de soluções web e mobile alinhadas a metas de
              negócio.
            </li>
          </ul>
        </div>
      </section>

      <section className="print-avoid-break mb-6">
        <h3 className="mb-3 border-b-2 border-gray-300 pb-2 text-base font-bold tracking-wide text-gray-900">
          PROJETOS EM DESTAQUE
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="border-l-4 border-purple-600 pl-3">
            <h4 className="text-sm font-bold text-gray-900">Veículos Maceió</h4>
            <p className="text-xs text-gray-600">
              Hub automotivo com app React Native (iOS/Android).
            </p>
            <p className="mt-1 text-xs text-gray-700">
              Resultado: +200% de tráfego orgânico e 500+ leads/mês.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-3">
            <h4 className="text-sm font-bold text-gray-900">Estetico Masso</h4>
            <p className="text-xs text-gray-600">
              Plataforma de agendamento com painel administrativo.
            </p>
            <p className="mt-1 text-xs text-gray-700">
              Resultado: +35% de conversão e -60% de no-shows.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-3">
            <h4 className="text-sm font-bold text-gray-900">
              Auto Escola Manager
            </h4>
            <p className="text-xs text-gray-600">
              Sistema completo de gestão para autoescola.
            </p>
            <p className="mt-1 text-xs text-gray-700">
              Resultado: operação centralizada com dashboards em tempo real.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-3">
            <h4 className="text-sm font-bold text-gray-900">
              Michelle Aleixo Fisioterapia
            </h4>
            <p className="text-xs text-gray-600">
              Site profissional com agendamento e SEO local.
            </p>
            <p className="mt-1 text-xs text-gray-700">
              Resultado: performance Lighthouse 95+ e aumento de captação.
            </p>
          </div>
        </div>
      </section>

      <section className="print-avoid-break mb-6">
        <h3 className="mb-3 border-b-2 border-gray-300 pb-2 text-base font-bold tracking-wide text-gray-900">
          COMPETÊNCIAS TÉCNICAS
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="mb-1 font-semibold text-gray-900">Front-end</h4>
            <p className="text-gray-700">
              React, Next.js, TypeScript, JavaScript, HTML5, CSS3.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-gray-900">Mobile</h4>
            <p className="text-gray-700">React Native, Expo, iOS, Android.</p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-gray-900">UI e Qualidade</h4>
            <p className="text-gray-700">
              Tailwind CSS, shadcn/ui, acessibilidade, design responsivo,
              componentização.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-gray-900">Performance e SEO</h4>
            <p className="text-gray-700">
              Core Web Vitals, SSR/SSG, otimização de bundle, SEO técnico e
              análise com Lighthouse.
            </p>
          </div>
        </div>
      </section>

      <section className="print-avoid-break">
        <h3 className="mb-3 border-b-2 border-gray-300 pb-2 text-base font-bold tracking-wide text-gray-900">
          IDIOMAS
        </h3>
        <div className="flex gap-8 text-sm">
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Português:</span>{" "}
            Nativo
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Inglês:</span>{" "}
            Técnico
          </p>
        </div>
      </section>
    </article>
  );
}
