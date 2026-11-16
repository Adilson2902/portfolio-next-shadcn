import { BlurFade } from "aura-ui-effects";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { Skills } from "@/components/Skills";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Resume } from "@/components/Resume";
export default function Home() {
  return (
    <>
      <Resume />
      <Hero />
      <BlurFade>
        <Projects />
      </BlurFade>
      <BlurFade delay={80}>
        <Services />
      </BlurFade>
      <BlurFade delay={80}>
        <Skills />
      </BlurFade>
      <BlurFade delay={80}>
        <FAQ />
      </BlurFade>
      <BlurFade delay={80}>
        <Contact />
      </BlurFade>
      <Footer />
    </>
  );
}
