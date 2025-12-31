import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk  } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { AnimatedBackground } from "../components/ui/animated-background";
import { BackToTop } from "../components/ui/back-to-top";
import { CustomCursor } from "../components/ui/custom-cursor";
import { LoadingScreen } from "../components/ui/loading-screen";
import { ScrollProgress } from "../components/ui/scroll-progress";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
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
  metadataBase: new URL('https://seudominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seudominio.com",
    title: "Adilson - Desenvolvedor Front-end",
    description: "Portfólio profissional com projetos modernos em React, Next.js e React Native",
    siteName: "Adilson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adilson - Desenvolvedor Front-end",
    description: "Portfólio profissional com projetos modernos em React, Next.js e React Native",
    creator: "@seutwitter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased cursor-none`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <AnimatedBackground />
          <Navbar />
          <BackToTop />
          <main className="relative z-10">
            {children}
          </main>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
