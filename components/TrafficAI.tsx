export default function TrafficAI() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-dark/30" />
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Tráfego + IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight mb-6">
              Tráfego traz pessoas.<br />
              <span className="text-brand-dark/50">IA faz o trabalho pesado.</span>
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Quando alguém entra em contato através das suas campanhas,
              o agente assume imediatamente — sem espera, sem perda de oportunidade.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start p-6 bg-brand-dark/5">
              <span className="text-2xl font-semibold text-brand-dark/30">01</span>
              <div>
                <h3 className="font-medium text-brand-dark mb-1">Resposta imediata</h3>
                <p className="text-sm text-brand-dark/60">O agente responde na hora, qualquer horário.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 bg-brand-dark/5">
              <span className="text-2xl font-semibold text-brand-dark/30">02</span>
              <div>
                <h3 className="font-medium text-brand-dark mb-1">Entendimento</h3>
                <p className="text-sm text-brand-dark/60">Identifica o que a pessoa precisa.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 bg-brand-dark/5">
              <span className="text-2xl font-semibold text-brand-dark/30">03</span>
              <div>
                <h3 className="font-medium text-brand-dark mb-1">Qualificação</h3>
                <p className="text-sm text-brand-dark/60">Faz as perguntas certas e coleta informações.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 bg-brand-dark">
              <span className="text-2xl font-semibold text-brand-cream/30">04</span>
              <div>
                <h3 className="font-medium text-brand-cream mb-1">Direcionamento</h3>
                <p className="text-sm text-brand-cream/60">Encaminha para o próximo passo ou fecha a venda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
