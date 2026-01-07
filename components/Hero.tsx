const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA%20da%20Norteia.";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-widest text-brand-dark/50 mb-6 uppercase">
              Agentes de IA sob medida
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-dark leading-[1.1] mb-8">
              Sua empresa pode vender, atender e operar melhor.
            </h1>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-10 max-w-lg">
              Criamos agentes de inteligência artificial que se integram à sua operação
              para automatizar o que hoje consome tempo e dinheiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-dark text-brand-cream px-8 py-4 text-sm tracking-wide hover:bg-brand-dark/90 transition-colors"
              >
                Falar com especialista
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square bg-brand-dark/5 rounded-full flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-6xl font-semibold text-brand-dark mb-2">24/7</div>
                  <div className="text-sm text-brand-dark/60 tracking-wide">atendimento automático</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-dark text-brand-cream p-6">
                <div className="text-2xl font-semibold">-70%</div>
                <div className="text-xs text-brand-cream/70">trabalho manual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
