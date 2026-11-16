import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/lib/portfolio";
const description =
  "Adilson Adriano, desenvolvedor front-end. Conheça projetos com React, Next.js e React Native e converse sobre seu próximo site ou aplicação.";
export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "Adilson Adriano | Desenvolvedor Front-end",
    template: "%s | Adilson Adriano",
  },
  description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.site,
    title: "Adilson Adriano | Desenvolvimento web e mobile",
    description,
    siteName: "Adilson Adriano",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adilson Adriano | Desenvolvedor Front-end",
    description,
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = { themeColor: "#101017" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="grape">
      <body>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
