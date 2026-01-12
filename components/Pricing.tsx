export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Modelo</span>
            <div className="w-12 h-1 bg-brand-red rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-gliker text-brand-dark leading-tight">
            Como trabalhamos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-10 rounded-[2rem] bg-brand-dark/5 card-float">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase block mb-2">Setup</span>
            <h3 className="text-2xl font-gliker text-brand-dark mb-4">Implementação</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Criação e configuração do <strong>agente de IA</strong> personalizado para o seu negócio,
              incluindo integrações com seus sistemas.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] bg-brand-red/15 card-float">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/25 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase block mb-2">Mensal</span>
            <h3 className="text-2xl font-gliker text-brand-dark mb-4">Acompanhamento</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Monitoramento contínuo, ajustes de <strong>performance</strong> e melhorias
              baseadas nos resultados reais.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-lg text-brand-dark bg-brand-red/20 px-8 py-5 rounded-full inline-block font-medium">
            Você não fica sozinho depois da entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
