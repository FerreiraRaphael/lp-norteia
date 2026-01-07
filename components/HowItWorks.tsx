const steps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Conversamos para mapear suas necessidades, processos e objetivos específicos.",
  },
  {
    number: "02",
    title: "Criação",
    description: "Desenvolvemos um agente com a linguagem, tom e regras do seu negócio.",
  },
  {
    number: "03",
    title: "Integração",
    description: "Conectamos com WhatsApp, site, CRM ou qualquer sistema que você já usa.",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Monitoramos e ajustamos continuamente para melhorar os resultados.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 border-t border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-dark/30" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Processo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight">
            Do entendimento à operação em 4 etapas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-brand-cream p-8 group hover:bg-brand-dark hover:text-brand-cream transition-colors duration-300"
            >
              <span className="text-4xl font-semibold text-brand-dark/20 group-hover:text-brand-cream/20 transition-colors block mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-medium mb-3 group-hover:text-brand-cream transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-brand-dark/60 group-hover:text-brand-cream/70 transition-colors leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
