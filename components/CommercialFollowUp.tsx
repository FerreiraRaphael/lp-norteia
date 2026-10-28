import CTAButton from "./CTAButton";

const checks = [
  { label: "Atendimento", description: "Onde o contato esfria antes de virar conversa." },
  { label: "Processo de vendas", description: "Etapas que travam ou se perdem no caminho." },
  { label: "Conversão de leads", description: "Quantos contatos realmente viram clientes." },
];

export default function CommercialFollowUp() {
  return (
    <section id="acompanhamento" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-brand-dark to-brand-red/5 rounded-[3rem] mx-4 md:mx-8" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Acompanhamento comercial</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-cream leading-tight mb-8">
              Gerar oportunidades é importante.
              <span className="block mt-2">
                Transformá-las em <strong className="text-brand-red">vendas</strong> é o que faz a diferença.
              </span>
            </h2>
            <div className="space-y-5 text-lg text-brand-cream/70 leading-relaxed">
              <p>
                Por isso, vamos além das campanhas de marketing. Analisamos{" "}
                <strong className="text-brand-cream">indicadores comerciais</strong> para identificar gargalos no
                atendimento, no processo de vendas e na conversão de leads.
              </p>
              <p>
                Afinal, não basta atrair clientes em potencial: é preciso{" "}
                <strong className="text-brand-cream">aproveitar as oportunidades geradas</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {checks.map((check, index) => (
              <div
                key={check.label}
                className="flex gap-6 items-start p-6 rounded-3xl bg-brand-cream/10 card-float hover:bg-brand-cream/15"
              >
                <span className={`text-2xl font-semibold ${index % 2 === 0 ? "text-brand-red" : "text-brand-cream/50"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-cream mb-1">{check.label}</h3>
                  <p className="text-sm text-brand-cream/60">{check.description}</p>
                </div>
              </div>
            ))}

            <div className="p-8 rounded-3xl bg-brand-cream text-brand-dark card-float shadow-lg shadow-brand-red/10">
              <p className="text-lg leading-relaxed">
                Com <strong className="text-brand-red">diagnósticos</strong> e{" "}
                <strong className="text-brand-red">recomendações estratégicas</strong>, aproximamos marketing e comercial
                para contribuir com o crescimento da sua empresa.
              </p>
              <p className="text-sm text-brand-dark/50 mt-3">Conforme o escopo contratado.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Falar com especialista</CTAButton>
        </div>
      </div>
    </section>
  );
}
