import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { profile } from "@/lib/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Adilson Adriano — desenvolvimento de sites profissionais, sistemas web, ferramentas online e SaaS, aplicativos mobile e interfaces 3D com React, Next.js e React Native.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "Adilson Adriano | Sites, Sistemas Web, SaaS & Interfaces 3D",
    template: "%s | Adilson Adriano",
  },
  description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.site,
    title: "Adilson Adriano | Sites Profissionais, Sistemas Web, SaaS & 3D",
    description,
    siteName: "Adilson Adriano",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adilson Adriano | Sites, Sistemas Web, SaaS & Interfaces 3D",
    description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = { themeColor: "#090514" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="grape"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <FloatingCTA />
      </body>
    </html>
  );
}
