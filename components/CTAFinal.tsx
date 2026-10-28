import CTAButton from "./CTAButton";

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-brand-dark to-brand-red/10 rounded-[3rem] mx-4 md:mx-8" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-cream leading-tight mb-6">
            Quer entender onde a <span className="text-brand-red">IA</span> pode ajudar sua empresa?
          </h2>
          <p className="text-lg text-brand-cream/70 mb-12 max-w-xl mx-auto">
            Converse com um especialista da <strong>NorteIA</strong> e descubra quais processos
            podem ser <strong>automatizados</strong>.
          </p>
          <CTAButton size="lg" className="animate-pulse-soft">
            Falar com especialista
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
