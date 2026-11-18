import { Hero } from "@/components/Hero";
import { ProofRibbon } from "@/components/ProofRibbon";
import Projects from "@/components/Projects";
import DeliveryVelocity from "@/components/DeliveryVelocity";
import Services from "@/components/Services";
import SolutionsConfigurator from "@/components/SolutionsConfigurator";
import LiveSites from "@/components/LiveSites";
import TechStack from "@/components/TechStack";
import InsightsPreview from "@/components/InsightsPreview";
import { Skills } from "@/components/Skills";
import Activity from "@/components/Activity";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Resume } from "@/components/Resume";
import { SectionReveal } from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <Resume />
      <Hero />
      <ProofRibbon />
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal delay={40}>
        <DeliveryVelocity />
      </SectionReveal>
      <SectionReveal delay={40}>
        <Services />
      </SectionReveal>
      <SectionReveal delay={40}>
        <SolutionsConfigurator />
      </SectionReveal>
      <SectionReveal delay={40}>
        <LiveSites />
      </SectionReveal>
      <SectionReveal delay={40}>
        <TechStack />
      </SectionReveal>
      <SectionReveal delay={40}>
        <InsightsPreview />
      </SectionReveal>
      <SectionReveal delay={40}>
        <Skills />
      </SectionReveal>
      <SectionReveal delay={40}>
        <Activity />
      </SectionReveal>
      <SectionReveal delay={40}>
        <FAQ />
      </SectionReveal>
      <SectionReveal delay={40}>
        <Contact />
      </SectionReveal>
      <Footer />
    </>
  );
}
