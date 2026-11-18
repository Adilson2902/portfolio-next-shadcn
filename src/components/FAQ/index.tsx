import { faqs } from "@/lib/portfolio";

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
        {faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
