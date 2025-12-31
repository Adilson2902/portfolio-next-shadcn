import Contact from "@/components/Contact";
import { Hero } from "../components/Hero";
import Services from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  );
}
