export default function TrafficAI() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-blue rounded-full" />
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Tráfego + IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-gliker text-brand-dark leading-tight mb-6">
              <strong className="text-brand-purple">Tráfego Pago</strong> traz pessoas.<br />
              <span className="text-brand-orange"><strong>IA</strong> faz o trabalho pesado.</span>
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Quando alguém entra em contato através das suas campanhas,
              o <strong>agente de IA</strong> assume imediatamente — sem espera, sem perda de oportunidade.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-6 items-start p-6 rounded-3xl bg-brand-pink/15 card-float hover:bg-brand-pink/25">
              <span className="text-2xl font-semibold text-brand-pink">01</span>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Resposta imediata</h3>
                <p className="text-sm text-brand-dark/60">O agente responde na hora, qualquer horário.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-3xl bg-brand-blue/20 card-float hover:bg-brand-blue/30">
              <span className="text-2xl font-semibold text-brand-blue">02</span>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Entendimento</h3>
                <p className="text-sm text-brand-dark/60">Identifica o que a pessoa precisa.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-3xl bg-brand-purple/20 card-float hover:bg-brand-purple/30">
              <span className="text-2xl font-semibold text-brand-purple">03</span>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Qualificação</h3>
                <p className="text-sm text-brand-dark/60">Faz as perguntas certas e coleta informações.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-3xl bg-brand-orange/80 card-float shadow-lg shadow-brand-orange/20">
              <span className="text-2xl font-semibold text-brand-dark/50">04</span>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Direcionamento</h3>
                <p className="text-sm text-brand-dark/70">Encaminha para o próximo passo ou fecha a <strong>venda</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
