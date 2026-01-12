import GradientBlob from "./GradientBlob";

const WHATSAPP_LINK =
  "https://wa.me/5562981836490?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA%20da%20Norteia.";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <GradientBlob />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-brand-cream/60 mb-6 uppercase animate-fade-in-up font-medium">
            Norteia Agente de IA
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gliker text-brand-cream leading-[1.1] mb-8 animate-fade-in-up animation-delay-100">
            <strong className="text-brand-red">Tráfego Pago</strong>, <strong>Agentes de IA</strong> e <strong>Automações</strong>{" "}
            <span className="block mt-2">para <strong>vender</strong>, <strong>atender</strong> e <strong>escalar</strong> seu negócio</span>
          </h1>
          <p className="text-lg text-brand-cream/70 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
            O norte que sua empresa precisa para crescer com <strong>tecnologia</strong> e <strong>performance</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-red text-brand-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105 shadow-lg shadow-brand-red/40 hover:shadow-xl hover:shadow-brand-red/50 animate-pulse-soft"
            >
              Falar com um especialista agora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 text-brand-cream px-8 py-4 rounded-full text-sm tracking-wide border-2 border-brand-cream/20 hover:border-brand-red hover:text-brand-red transition-all hover:bg-brand-red/10"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-brand-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
