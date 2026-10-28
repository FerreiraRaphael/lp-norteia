import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import CommercialFollowUp from "@/components/CommercialFollowUp";
import TrafficAI from "@/components/TrafficAI";
import TechStack from "@/components/TechStack";
import Team from "@/components/Team";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Services />
        <CommercialFollowUp />
        <TrafficAI />
        <TechStack />
        <Team />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
