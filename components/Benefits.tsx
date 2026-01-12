const benefits = [
  {
    title: "Atendimento 24/7",
    description: "Respostas instantâneas a qualquer hora, sem espera.",
    color: "bg-brand-red",
  },
  {
    title: "Menos trabalho manual",
    description: "Automatize tarefas repetitivas e libere seu time.",
    color: "bg-brand-dark",
  },
  {
    title: "Processos consistentes",
    description: "Resultados previsíveis com padrão de qualidade.",
    color: "bg-brand-dark",
  },
  {
    title: "Escala sem contratar",
    description: "Cresça a operação sem aumentar a equipe.",
    color: "bg-brand-red",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-brand-dark to-brand-red/5 rounded-[3rem] mx-4 md:mx-8" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Resultados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-gliker text-brand-cream leading-tight">
              O que muda na sua operação com <strong className="text-brand-red">automação</strong>
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-brand-cream/95 backdrop-blur-sm card-float shadow-sm"
                >
                  <div className={`w-14 h-14 rounded-2xl ${benefit.color}/20 flex items-center justify-center mb-5`}>
                    <div className={`w-5 h-5 rounded-full ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-dark/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
