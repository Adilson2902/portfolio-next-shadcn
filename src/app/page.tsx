import Contact from "@/components/Contact";
import { Hero } from "../components/Hero";
import Services from "@/components/Services";
import { Skills } from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import { Resume } from "@/components/Resume";
import { SectionDivider } from "@/components/ui/section-divider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SocialShare } from "@/components/ui/social-share";

export default function Home() {
  return (
    <>
      {/* Currículo para impressão */}
      <Resume />

      {/* Barra de ferramentas flutuante */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <SocialShare title="Portfólio Adilson - Desenvolvedor Front-end" />
      </div>

      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  );
}
