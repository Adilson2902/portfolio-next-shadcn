import { BlurFade } from "aura-ui-effects";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import LiveSites from "@/components/LiveSites";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import { Skills } from "@/components/Skills";
import Activity from "@/components/Activity";
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
        <LiveSites />
      </BlurFade>
      <BlurFade delay={80}>
        <Services />
      </BlurFade>
      <BlurFade delay={80}>
        <TechStack />
      </BlurFade>
      <BlurFade delay={80}>
        <Skills />
      </BlurFade>
      <BlurFade delay={80}>
        <Activity />
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
