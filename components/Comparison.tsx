import CTAButton from "./CTAButton";

const isolated = [
  "Posts publicados nas redes sociais",
  "Anúncios gerando cliques",
  "Leads sem acompanhamento comercial",
  "Atendimento manual e lento",
  "Dificuldade para acompanhar quantos contatos viram vendas",
];

const integrated = [
  "Planejamento e gestão de social media",
  "Campanhas estruturadas de tráfego pago",
  "Identificação de falhas na conversão de leads em vendas",
  "Respostas instantâneas 24/7",
  "Estratégia comercial para acompanhar oportunidades e conversões",
];

function CrossIcon() {
  return (
    <span className="w-7 h-7 rounded-full bg-brand-cream/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-brand-cream/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="w-7 h-7 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-brand-red/30">
      <svg className="w-3.5 h-3.5 text-brand-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="comparativo" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Comparativo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker text-brand-cream leading-tight">
            Veja a diferença entre <span className="text-brand-cream/60">executar ações de marketing</span> e{" "}
            <strong className="text-brand-red">estruturar um processo para gerar vendas</strong>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-[2rem] border-2 border-brand-cream/15 bg-brand-cream/[0.03]">
            <h3 className="text-xl font-semibold text-brand-cream/60 mb-8">Serviços isolados</h3>
            <ul className="space-y-5">
              {isolated.map((item) => (
                <li key={item} className="flex gap-4 text-brand-cream/60 leading-relaxed">
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-[2rem] bg-brand-cream text-brand-dark card-float shadow-xl shadow-brand-red/10">
            <h3 className="text-xl font-semibold text-brand-dark mb-8">
              Marketing <span className="text-brand-red">integrado</span>
            </h3>
            <ul className="space-y-5">
              {integrated.map((item) => (
                <li key={item} className="flex gap-4 text-brand-dark leading-relaxed">
                  <CheckIcon />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero gerar vendas</CTAButton>
        </div>
      </div>
    </section>
  );
}
