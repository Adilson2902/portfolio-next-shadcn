"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { Spotlight } from "aura-ui-effects";
import { Button } from "aura-ui-components";
import { profile } from "@/lib/portfolio";

type ContactIntentId = "site" | "tool-saas" | "system-app" | "partnership";

interface ContactIntent {
  id: ContactIntentId;
  label: string;
  emailSubject: string;
  whatsappText: string;
}

const CONTACT_INTENTS: ContactIntent[] = [
  {
    id: "site",
    label: "Quero um site p/ minha empresa",
    emailSubject: "Orçamento: Site ou Landing Page para minha empresa",
    whatsappText:
      "Olá, Adilson! Quero um site ou landing page profissional para a minha empresa. Gostaria de conversar sobre escopo e orçamento.",
  },
  {
    id: "tool-saas",
    label: "Quero criar uma ferramenta / SaaS",
    emailSubject: "Orçamento: Ferramenta online, calculadora ou Micro-SaaS",
    whatsappText:
      "Olá, Adilson! Quero criar uma ferramenta online, calculadora interativa ou Micro-SaaS. Podemos conversar sobre a ideia?",
  },
  {
    id: "system-app",
    label: "Sistema ou Aplicativo",
    emailSubject: "Orçamento: Sistema web ou Aplicativo mobile",
    whatsappText:
      "Olá, Adilson! Preciso desenvolver um sistema web ou aplicativo mobile para meu negócio. Gostaria de alinhar os próximos passos.",
  },
  {
    id: "partnership",
    label: "Parceria comercial",
    emailSubject: "Contato sobre parceria comercial",
    whatsappText:
      "Olá, Adilson! Gostaria de conversar sobre uma parceria comercial ou projeto conjunto.",
  },
];

const CONTACT_INTENTS_BY_ID: Record<ContactIntentId, ContactIntent> =
  Object.fromEntries(
    CONTACT_INTENTS.map((intent) => [intent.id, intent]),
  ) as Record<ContactIntentId, ContactIntent>;

export default function Contact() {
  const [selectedIntentId, setSelectedIntentId] =
    useState<ContactIntentId>("site");

  const activeIntent = CONTACT_INTENTS_BY_ID[selectedIntentId];

  const whatsappHref = `${profile.whatsapp}?text=${encodeURIComponent(activeIntent.whatsappText)}`;
  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(activeIntent.emailSubject)}`;

  return (
    <section
      id="contact"
      className="section-shell section-space"
      aria-labelledby="contact-title"
    >
      <Spotlight className="contact-panel" size={480} intensity={0.1}>
        <p className="eyebrow">Contato direto</p>
        <h2 id="contact-title">
          O próximo passo
          <br />é uma conversa objetiva.
        </h2>
        <p>
          Selecione o que você precisa hoje para já iniciar o WhatsApp com o
          assunto preenchido.
          <br className="desktop-break" /> Respondo com clareza sobre escopo,
          prazos e formato de entrega.
        </p>

        <div
          className="contact-intent-chips"
          role="group"
          aria-label="Assunto rápido para contato"
        >
          {CONTACT_INTENTS.map((intent) => {
            const isSelected = intent.id === activeIntent.id;
            return (
              <button
                key={intent.id}
                type="button"
                aria-pressed={isSelected}
                data-selected={isSelected ? "true" : "false"}
                className={`contact-intent-chip ${isSelected ? "is-selected active" : ""}`}
                onClick={() => setSelectedIntentId(intent.id)}
              >
                {isSelected && <Check size={14} aria-hidden="true" />}
                <span>{intent.label}</span>
              </button>
            );
          })}
        </div>

        <div className="actions">
          <Button asChild size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> Conversar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={emailHref}>
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
