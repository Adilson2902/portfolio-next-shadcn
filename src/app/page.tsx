import Contact from "@/components/Contact";
import { Hero } from "../components/Hero";
import Services from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import ImageGallery from "@/components/ImageGallery";
import { SectionDivider } from "@/components/ui/section-divider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SocialShare } from "@/components/ui/social-share";

export default function Home() {
  return (
    <>
      {/* Barra de ferramentas flutuante */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <SocialShare title="Portfólio Adilson - Desenvolvedor Front-end" />
      </div>

      <Hero />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certificates />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <ImageGallery />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Newsletter />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  );
}
