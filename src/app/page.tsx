import { BlurFade } from "aura-ui-effects";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SolutionsConfigurator from "@/components/SolutionsConfigurator";
import LiveSites from "@/components/LiveSites";
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
      <BlurFade delay={60}>
        <Services />
      </BlurFade>
      <BlurFade delay={60}>
        <SolutionsConfigurator />
      </BlurFade>
      <BlurFade delay={60}>
        <LiveSites />
      </BlurFade>
      <BlurFade delay={60}>
        <TechStack />
      </BlurFade>
      <BlurFade delay={60}>
        <Skills />
      </BlurFade>
      <BlurFade delay={60}>
        <Activity />
      </BlurFade>
      <BlurFade delay={60}>
        <FAQ />
      </BlurFade>
      <BlurFade delay={60}>
        <Contact />
      </BlurFade>
      <Footer />
    </>
  );
}
