const faqs: [string, string][] = [
  [
    "Como começamos um projeto ou ferramenta?",
    "Você me conta qual é o objetivo do negócio, quem vai usar e o que já existe hoje (textos, marca ou referência). A partir dessa conversa inicial, desenho o escopo recomendado, as prioridades e uma proposta clara antes de qualquer código.",
  ],
  [
    "Você também melhora ou refaz sites e sistemas existentes?",
    "Sim. Podemos revisar a interface atual, corrigir lentidão no celular, organizar a navegação para gerar mais pedidos de orçamento no WhatsApp e modernizar o front-end mantendo o que já funciona no seu domínio.",
  ],
  [
    "Você cria calculadoras interativas, ferramentas online e micro-SaaS exclusivos?",
    "Sim. Além de sites institucionais, desenvolvo calculadoras de orçamento, simuladores, catálogos interativos e ferramentas online completas — aplicando na prática a experiência de construção do Toolspace, que reúne mais de 300 ferramentas no ar.",
  ],
  [
    "Os sites e ferramentas vêm preparados para celular e Google (SEO)?",
    "Sim. Todo projeto nasce responsivo (mobile-first), com carregamento rápido, metadados configurados, estrutura semântica e foco em facilitar que clientes encontrem seus serviços no Google e entrem em contato sem atrito.",
  ],
  [
    "Qual a diferença entre um modelo pronto personalizável e um projeto sob medida?",
    "Nos modelos personalizáveis, partimos de uma base já validada (como clínicas/estética, veículos, cursos/autoescolas ou eventos) e adaptamos à sua marca e oferta com lançamento mais ágil. No sob medida, a arquitetura, regras e integrações são desenhadas do zero para o seu fluxo.",
  ],
  [
    "Como são definidos prazo, etapas e proposta antes do início?",
    "Tudo depende do escopo, das integrações necessárias e dos materiais disponíveis. Antes de começar, você recebe uma proposta transparente com entregas por etapa, prazo estimado, valor combinado e condições de suporte pós-lançamento.",
  ],
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-shell section-space faq-section"
      aria-labelledby="faq-title"
    >
      <div>
        <p className="eyebrow">Antes de começar</p>
        <h2 id="faq-title">
          Dúvidas frequentes
          <br />
          antes da proposta
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
