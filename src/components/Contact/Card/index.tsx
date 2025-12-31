"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMail, MdOpenInNew } from "react-icons/md";

type ContactType = "mail" | "whatsApp" | "instagram";

type ContactPinCardProps = {
  type: ContactType;
  handle: string;
  title?: string;
  subtitle?: string;
  className?: string;
  ctaLabel?: string;
};

const titleFor = (t: ContactType) =>
  t === "mail" ? "Email" : t === "whatsApp" ? "WhatsApp" : "Instagram";

const iconFor = (t: ContactType) =>
  t === "mail" ? (
    <MdMail className="h-7 w-7" />
  ) : t === "whatsApp" ? (
    <FaWhatsapp className="h-7 w-7" />
  ) : (
    <FaInstagram className="h-7 w-7" />
  );

const gradientFor = (t: ContactType) =>
  t === "mail"
    ? "from-purple-500 to-violet-500"
    : t === "whatsApp"
    ? "from-emerald-500 to-teal-500"
    : "from-pink-500 to-rose-500";

const normalizeWhats = (s: string) => {
  let d = s.replace(/\D/g, "");
  if (d && !d.startsWith("55")) d = `55${d}`;
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
  const gradient = gradientFor(type);

  return (
    <PinContainer
      title={href.replace(/^https?:\/\//, "")}
      href={href}
      showOverlay={false}
      containerClassName="w-full max-w-[20rem] sm:max-w-[24rem] h-[11rem] sm:h-[12rem]"
    >
      <div
        className={`group relative w-full h-full p-5 sm:p-6 rounded-3xl
                    glass-effect border-2 border-purple-500/30 hover:border-purple-500/60
                    flex flex-col transition-all duration-300
                    ${className}`}
      >
        {/* Brilho de fundo gradiente */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        {/* Cabeçalho: ícone + título */}
        <div className="relative z-10 flex items-center gap-3">
          <div className={`rounded-2xl p-3 bg-gradient-to-br ${gradient} text-white shadow-lg`}>
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-dm-sans font-bold text-lg sm:text-xl text-white leading-tight">
              {label}
            </h3>
            <p className="text-sm text-gray-300 truncate">{shown}</p>
          </div>
        </div>

        {/* Subtítulo */}
        <p className="relative z-10 mt-3 text-sm text-gray-400">{subtitle}</p>

        {/* CTA com gradiente */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute left-4 right-4 bottom-4 z-10
                     inline-flex items-center justify-center gap-2
                     rounded-2xl px-5 py-3 text-sm font-bold
                     bg-gradient-to-r ${gradient} text-white shadow-lg
                     focus:outline-none focus-visible:outline-none
                     transition-all duration-300
                     opacity-0 translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0
                     hover:shadow-xl hover:scale-105`}
        >
          {ctaLabel} <MdOpenInNew className="h-4 w-4" />
        </a>
      </div>
    </PinContainer>
  );
}
