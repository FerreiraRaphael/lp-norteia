const benefits = [
  {
    title: "Atendimento 24/7",
    description: "Respostas instantâneas a qualquer hora, sem espera.",
  },
  {
    title: "Menos trabalho manual",
    description: "Automatize tarefas repetitivas e libere seu time.",
  },
  {
    title: "Processos consistentes",
    description: "Resultados previsíveis com padrão de qualidade.",
  },
  {
    title: "Escala sem contratar",
    description: "Cresça a operação sem aumentar a equipe.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 border-t border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-dark/30" />
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Resultados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight">
              O que muda na sua operação
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div className="w-10 h-10 border border-brand-dark/20 flex items-center justify-center mb-4">
                    <span className="text-sm font-mono text-brand-dark/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-brand-dark mb-2">
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
