import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainMessage from "@/components/MainMessage";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import TrafficAI from "@/components/TrafficAI";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import ForWhom from "@/components/ForWhom";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainMessage />
        <TechStack />
        <Services />
        <TrafficAI />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <ForWhom />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
