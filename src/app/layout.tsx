import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk  } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { AnimatedBackground } from "../components/ui/animated-background";
import { BackToTop } from "../components/ui/back-to-top";
import { CustomCursor } from "../components/ui/custom-cursor";
import { LoadingScreen } from "../components/ui/loading-screen";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-space-grotesk",    
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adilson - Desenvolvedor Front-end | React, Next.js & React Native",
  description: "Portfólio de Adilson, desenvolvedor front-end especializado em React, Next.js e React Native. Criando experiências web modernas e performáticas com foco em SEO e Core Web Vitals.",
  keywords: ["desenvolvedor front-end", "React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "SEO", "Performance"],
  authors: [{ name: "Adilson" }],
  creator: "Adilson",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Adilson - Desenvolvedor Front-end",
    description: "Portfólio profissional com projetos modernos em React, Next.js e React Native",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased cursor-none`}
      >
        <LoadingScreen />
        <CustomCursor />
        <AnimatedBackground />
        <Navbar />
        <BackToTop />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
