export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-brand-warmgray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-dark/30" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Modelo</span>
            <div className="w-12 h-px bg-brand-dark/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight">
            Como trabalhamos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-brand-dark/10 max-w-3xl mx-auto">
          <div className="bg-brand-cream p-10">
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase block mb-4">Setup</span>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Implementação</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Criação e configuração do agente de IA personalizado para o seu negócio,
              incluindo integrações com seus sistemas.
            </p>
          </div>

          <div className="bg-brand-cream p-10">
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase block mb-4">Mensal</span>
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Acompanhamento</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Monitoramento contínuo, ajustes de performance e melhorias
              baseadas nos resultados reais.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg text-brand-dark/70">
            Você não fica sozinho depois da entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
