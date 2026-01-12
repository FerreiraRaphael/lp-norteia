const services = [
  {
    title: "Atendimento",
    description: "Respostas instantâneas e personalizadas, disponíveis 24 horas.",
    color: "bg-brand-red/15",
    hoverColor: "hover:bg-brand-red/25",
  },
  {
    title: "Vendas",
    description: "Qualificação automática de leads e acompanhamento até o fechamento.",
    color: "bg-brand-dark/8",
    hoverColor: "hover:bg-brand-dark/15",
  },
  {
    title: "Marketing",
    description: "Engajamento inteligente com leads vindos de campanhas.",
    color: "bg-brand-dark/5",
    hoverColor: "hover:bg-brand-dark/10",
  },
  {
    title: "Follow-up",
    description: "Acompanhamento sistemático para não perder nenhuma oportunidade.",
    color: "bg-brand-red/10",
    hoverColor: "hover:bg-brand-red/20",
  },
  {
    title: "Onboarding",
    description: "Automatize a jornada inicial e entrega de propostas.",
    color: "bg-brand-dark/8",
    hoverColor: "hover:bg-brand-dark/15",
  },
  {
    title: "Processos",
    description: "Tarefas repetitivas executadas sem intervenção humana.",
    color: "bg-brand-red/10",
    hoverColor: "hover:bg-brand-red/20",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-brand-cream text-brand-dark rounded-[3rem] mx-4 md:mx-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Serviços</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker leading-tight mb-6">
              <strong className="text-brand-red">Agentes de IA</strong> para cada área do seu negócio
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed">
              Se hoje alguém precisa fazer manualmente, provavelmente a <strong className="text-brand-dark">IA</strong> pode assumir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 rounded-3xl ${service.color} ${service.hoverColor} card-float cursor-default`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm text-brand-dark/40 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-dark/60 text-sm leading-relaxed pl-10">
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
