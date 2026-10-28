import GradientBlob from "./GradientBlob";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <GradientBlob />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-brand-cream/60 mb-6 uppercase animate-fade-in-up font-medium">
            NorteIA · Marketing integrado
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gliker text-brand-cream leading-[1.1] mb-8 animate-fade-in-up animation-delay-100">
            O marketing da sua empresa precisa gerar mais do que curtidas.
            <span className="block mt-2">
              Precisa gerar <strong className="text-brand-red">vendas</strong>.
            </span>
          </h1>
          <p className="text-lg text-brand-cream/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            Muito além de entregar leads, a <strong className="text-brand-cream">NorteIA</strong> integra{" "}
            <strong className="text-brand-cream">marketing</strong>, <strong className="text-brand-cream">tecnologia</strong> e{" "}
            <strong className="text-brand-cream">estratégia comercial</strong> para fortalecer sua presença digital,
            otimizar o processo de vendas e impulsionar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <CTAButton className="animate-pulse-soft">Quero impulsionar meu negócio</CTAButton>
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
