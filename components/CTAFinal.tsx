import CTAButton from "./CTAButton";

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-brand-dark to-brand-red/10 rounded-[3rem] mx-4 md:mx-8" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-cream leading-tight mb-6">
            Precisa de um <span className="text-brand-red">norte</span> para aumentar as vendas da sua empresa?
          </h2>
          <p className="text-lg text-brand-cream/70 mb-12 max-w-xl mx-auto">
            Converse com uma especialista da <strong>Norteia</strong> e descubra como podemos{" "}
            <strong>impulsionar o seu faturamento</strong>.
          </p>
          <CTAButton size="lg" className="animate-pulse-soft">
            Falar com uma especialista
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
