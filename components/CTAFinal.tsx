const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA%20da%20Norteia.";

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-cream leading-tight mb-6">
            Quer entender onde a IA pode ajudar sua empresa?
          </h2>
          <p className="text-lg text-brand-cream/70 mb-12 max-w-xl mx-auto">
            Converse com um especialista da Norteia e descubra quais processos
            podem ser automatizados.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-cream text-brand-dark px-10 py-5 text-sm tracking-wide hover:bg-white transition-colors"
          >
            Falar com especialista
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
