import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { JsonLd } from "@/components/JsonLd";
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
  "Adilson Adriano — desenvolvimento de sites profissionais de alta conversão, ferramentas online, micro-SaaS, sistemas web, aplicativos mobile e interfaces 3D com entrega acelerada por Cursor, Claude, GPT e Gemini.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "Adilson Adriano | Sites, Sistemas Web, Ferramentas SaaS & 3D",
    template: "%s | Adilson Adriano",
  },
  description,
  keywords: [
    "criação de sites para empresas",
    "landing page alta conversão",
    "desenvolvedor Next.js React Brasil",
    "criar calculadora online",
    "desenvolvimento micro-saas",
    "sistemas web sob medida",
    "interfaces 3D Three.js",
    "desenvolvedor React Native Expo",
    "desenvolvimento rápido com IA Cursor Claude",
    "Adilson Adriano",
    "Toolspace",
    "Aura UI",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    title: "Adilson Adriano | Sites, Sistemas Web, Ferramentas SaaS & 3D",
    description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = { themeColor: "#080412" };

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
        <JsonLd />
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
