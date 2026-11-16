import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Spotlight } from "aura-ui-effects";
import { Button } from "aura-ui-components";
import { profile } from "@/lib/portfolio";
export default function Contact() {
  const message = encodeURIComponent(
    "Olá, Adilson! Gostaria de conversar sobre um projeto. Meu objetivo é: ",
  );
  return (
    <section
      id="contact"
      className="section-shell section-space"
      aria-labelledby="contact-title"
    >
      <Spotlight className="contact-panel" size={480} intensity={0.1}>
        <p className="eyebrow">Contato</p>
        <h2 id="contact-title">
          O próximo passo
          <br />é uma conversa.
        </h2>
        <p>
          Um site novo, uma aplicação ou uma interface que precisa evoluir.
          <br className="desktop-break" /> Conte seu objetivo, o prazo desejado
          e o que você já tem.
        </p>
        <div className="actions">
          <Button asChild size="lg">
            <a
              href={`${profile.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" /> Conversar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Vamos conversar sobre um projeto")}`}
            >
              <Mail aria-hidden="true" /> Enviar um e-mail
            </a>
          </Button>
        </div>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </Spotlight>
    </section>
  );
}
