const faqs = [
  [
    "Como começamos um projeto?",
    "Conte o objetivo, quem vai usar e o que já existe. A partir dessa conversa, definimos o escopo, as prioridades e uma proposta de entrega.",
  ],
  [
    "Você também melhora sites existentes?",
    "Sim. Podemos revisar a interface, a navegação, a adaptação para celular e a estrutura do front-end, começando pelos problemas que mais afetam o uso.",
  ],
  [
    "Como são definidos prazo e investimento?",
    "Dependem do escopo, das integrações e dos materiais disponíveis. Prazo, etapas, valores e suporte são combinados na proposta, antes do início.",
  ],
];
export default function FAQ() {
  return (
    <section
      className="section-shell section-space faq-section"
      aria-labelledby="faq-title"
    >
      <div>
        <p className="eyebrow">Antes de começar</p>
        <h2 id="faq-title">
          Vamos tirar
          <br />a ideia do papel?
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
