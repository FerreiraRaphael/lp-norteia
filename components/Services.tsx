const services = [
  {
    title: "Atendimento",
    description: "Respostas instantâneas e personalizadas, disponíveis 24 horas.",
  },
  {
    title: "Vendas",
    description: "Qualificação automática de leads e acompanhamento até o fechamento.",
  },
  {
    title: "Marketing",
    description: "Engajamento inteligente com leads vindos de campanhas.",
  },
  {
    title: "Follow-up",
    description: "Acompanhamento sistemático para não perder nenhuma oportunidade.",
  },
  {
    title: "Onboarding",
    description: "Automatize a jornada inicial e entrega de propostas.",
  },
  {
    title: "Processos",
    description: "Tarefas repetitivas executadas sem intervenção humana.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-brand-dark text-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-cream/30" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Serviços</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Agentes de IA para cada área do seu negócio
            </h2>
            <p className="text-lg text-brand-cream/70 leading-relaxed">
              Se hoje alguém precisa fazer manualmente, provavelmente a IA pode assumir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm text-brand-cream/40 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-medium text-brand-cream">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-cream/60 text-sm leading-relaxed pl-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
