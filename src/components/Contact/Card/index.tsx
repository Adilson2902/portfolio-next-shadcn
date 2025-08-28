"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMail, MdOpenInNew } from "react-icons/md";

type ContactType = "mail" | "whatsApp" | "instagram";

type ContactPinCardProps = {
  type: ContactType;
  handle: string; // email, número ou @user
  title?: string; // rótulo (padrão baseado no type)
  subtitle?: string; // ex.: "Enviar mensagem"
  className?: string; // custom opcional
  ctaLabel?: string; // ex.: "Abrir", "Falar agora"
};

const titleFor = (t: ContactType) =>
  t === "mail" ? "Email" : t === "whatsApp" ? "WhatsApp" : "Instagram";

const iconFor = (t: ContactType) =>
  t === "mail" ? (
    <MdMail className="h-6 w-6" color="#00242C" />
  ) : t === "whatsApp" ? (
    <FaWhatsapp className="h-6 w-6" color="#00242C" />
  ) : (
    <FaInstagram className="h-6 w-6" color="#00242C" />
  );

const normalizeWhats = (s: string) => {
  let d = s.replace(/\D/g, "");
  if (d && !d.startsWith("55")) d = `55${d}`; // BR como default
  return d;
};

const hrefFor = (t: ContactType, v: string) => {
  if (t === "mail") return `mailto:${v}`;
  if (t === "whatsApp") return `https://wa.me/${normalizeWhats(v)}`;
  return `https://instagram.com/${v.replace(/^@/, "")}`;
};

const visibleValue = (t: ContactType, v: string) => {
  if (t === "instagram") return v.replace(/^@/, "@");
  return v;
};

export function ContactPinCard({
  type,
  handle,
  title,
  subtitle = "Enviar mensagem",
  className = "",
  ctaLabel = "Abrir",
}: ContactPinCardProps) {
  const label = title ?? titleFor(type);
  const href = hrefFor(type, handle);
  const icon = iconFor(type);
  const shown = visibleValue(type, handle);

  // Card inteiro é clicável via PinContainer (efeito 3D)
  return (
    <PinContainer title={href.replace(/^https?:\/\//, "")} href={href}>
      <div
        className={`group relative w-[22rem] h-[8rem] p-4 rounded-3xl
                    bg-primary text-text-fix shadow-lg flex flex-col
                    border-none ring-0
                    [&_*]:border-0 [&_*]:ring-0
                    ${className}`}
      >
        {/* Cabeçalho: ícone + título */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl p-3 bg-white/85">{icon}</div>
          <div className="min-w-0">
            <h3 className="font-dm-sans font-bold text-lg leading-tight">
              {label}
            </h3>
            <p className="text-sm text-text-fix/80 truncate">{shown}</p>
          </div>
        </div>

        {/* Subtítulo */}
        <p className="mt-3 text-sm text-text-fix/80 truncate">{subtitle}</p>

        {/* CTA aparece no hover (mantendo paleta) */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-4 right-4 bottom-4
                     inline-flex items-center justify-center gap-2
                     rounded-2xl px-4 py-2.5 text-sm font-semibold
                     bg-[#00242C] text-white shadow-sm
                     focus:outline-none focus-visible:outline-none
                     transition opacity-0 translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0"
        >
          {ctaLabel} <MdOpenInNew className="h-4 w-4" />
        </a>
      </div>
    </PinContainer>
  );
}
