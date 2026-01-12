const steps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Conversamos para mapear suas necessidades, processos e objetivos específicos.",
    color: "text-brand-pink",
    bg: "bg-brand-pink/10",
    hoverBg: "hover:bg-brand-pink/20",
  },
  {
    number: "02",
    title: "Criação",
    description: "Desenvolvemos um agente com a linguagem, tom e regras do seu negócio.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/15",
    hoverBg: "hover:bg-brand-blue/25",
  },
  {
    number: "03",
    title: "Integração",
    description: "Conectamos com WhatsApp, site, CRM ou qualquer sistema que você já usa.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/15",
    hoverBg: "hover:bg-brand-purple/25",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Monitoramos e ajustamos continuamente para melhorar os resultados.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/20",
    hoverBg: "hover:bg-brand-orange/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Processo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-gliker text-brand-dark leading-tight">
            Do entendimento à operação em <span className="text-brand-red">4 etapas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl ${step.bg} ${step.hoverBg} card-float`}
            >
              <span className={`text-5xl font-gliker ${step.color} opacity-60 group-hover:opacity-100 transition-opacity block mb-6`}>
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">
                {step.title}
              </h3>
              <p className="text-sm text-brand-dark/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
