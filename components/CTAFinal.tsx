const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA%20da%20Norteia.";

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/30 via-brand-purple/20 to-brand-blue/30 rounded-[3rem] mx-4 md:mx-8" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-dark leading-tight mb-6">
            Quer entender onde a <span className="text-brand-purple">IA</span> pode ajudar sua empresa?
          </h2>
          <p className="text-lg text-brand-dark/70 mb-12 max-w-xl mx-auto">
            Converse com um especialista da <strong>Norteia</strong> e descubra quais processos
            podem ser <strong>automatizados</strong>.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-purple text-brand-dark px-10 py-5 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105 shadow-lg shadow-brand-purple/40 hover:shadow-xl hover:shadow-brand-purple/50 animate-pulse-soft"
          >
            Falar com um especialista agora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
