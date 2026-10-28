import CTAButton from "./CTAButton";

const steps = [
  {
    title: "Resposta imediata",
    description: "O agente responde na hora, qualquer horário.",
    highlight: false,
  },
  {
    title: "Entendimento",
    description: "Identifica o que a pessoa precisa.",
    highlight: false,
  },
  {
    title: "Qualificação",
    description: "Faz as perguntas certas e coleta informações.",
    highlight: false,
  },
  {
    title: "Direcionamento",
    description: "Encaminha para o próximo passo ou transfere para a sua equipe.",
    highlight: true,
  },
];

export default function TrafficAI() {
  return (
    <section id="trafego-ia" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Tráfego + IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-cream leading-tight mb-6">
              <strong className="text-brand-red">Tráfego pago</strong> atrai.
              <br />
              <strong>IA</strong>
              <sup className="text-brand-red text-2xl ml-0.5">*</sup> acelera.
            </h2>
            <p className="text-lg text-brand-cream/70 leading-relaxed mb-4">
              Seus leads recebem <strong className="text-brand-cream">atendimento imediato pelo WhatsApp</strong>, sem
              depender da disponibilidade inicial da sua equipe.
            </p>
            <p className="text-lg text-brand-cream/70 leading-relaxed mb-10">
              Mais agilidade no primeiro contato, mais oportunidades de avançar para a{" "}
              <strong className="text-brand-cream">venda</strong>.
            </p>
            <CTAButton>Quero conhecer essa solução</CTAButton>
            <p className="text-sm text-brand-cream/50 leading-relaxed mt-8 max-w-md">
              <span className="text-brand-red">*</span> O agente de IA é um serviço adicional, contratado conforme as
              necessidades da sua empresa.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex gap-6 items-start p-6 rounded-3xl card-float ${
                  step.highlight
                    ? "bg-brand-red/80 shadow-lg shadow-brand-red/20"
                    : "bg-brand-cream/10 hover:bg-brand-cream/15"
                }`}
              >
                <span
                  className={`text-2xl font-semibold ${
                    step.highlight ? "text-brand-cream" : index % 2 === 0 ? "text-brand-red" : "text-brand-cream/50"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-cream mb-1">{step.title}</h3>
                  <p className={`text-sm ${step.highlight ? "text-brand-cream/80" : "text-brand-cream/60"}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
