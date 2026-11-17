import { MessageCircle } from "lucide-react";
import { profile } from "@/lib/portfolio";

export function FloatingCTA() {
  const message = encodeURIComponent(
    "Olá, Adilson! Vim pelo seu portfólio e gostaria de conversar sobre um orçamento.",
  );

  return (
    <a
      className="fixed floating-whatsapp-cta"
      href={`${profile.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="floating-cta-indicator" aria-hidden="true">
        <span className="floating-cta-ping" />
        <span className="floating-cta-dot" />
      </span>
      <MessageCircle size={18} aria-hidden="true" />
      <span>Orçamento no WhatsApp</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
