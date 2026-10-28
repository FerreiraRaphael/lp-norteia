import CTAButton from "./CTAButton";

type Service = {
  title: string;
  description: string;
  badge?: "bonus" | "plus";
  color: string;
  hoverColor: string;
};

const services: Service[] = [
  {
    title: "Social media",
    description:
      "Estratégias de conteúdo e posicionamento para fortalecer sua marca, gerar conexão e ampliar sua presença digital.",
    color: "bg-brand-dark/8",
    hoverColor: "hover:bg-brand-dark/15",
  },
  {
    title: "Tráfego pago",
    description:
      "Campanhas estratégicas para ampliar o alcance da sua marca e atrair leads qualificados.",
    color: "bg-brand-red/15",
    hoverColor: "hover:bg-brand-red/25",
  },
  {
    title: "Estratégia comercial",
    description:
      "Análises dos atendimentos e direcionamento da equipe comercial para aprimorar processos e aumentar as vendas.",
    badge: "bonus",
    color: "bg-brand-dark/5",
    hoverColor: "hover:bg-brand-dark/10",
  },
  {
    title: "Agente de IA personalizado",
    description:
      "Integrado aos processos da sua empresa, automatiza o atendimento e transfere as conversas para a equipe humana quando necessário.",
    badge: "plus",
    color: "bg-brand-dark text-brand-cream",
    hoverColor: "hover:bg-brand-dark/90",
  },
];

function Badge({ kind }: { kind: "bonus" | "plus" }) {
  if (kind === "bonus") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-red text-brand-cream shadow-md shadow-brand-red/30">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 7h-2.18A3 3 0 0012 4.35 3 3 0 006.18 7H4a2 2 0 00-2 2v2a1 1 0 001 1h1v7a2 2 0 002 2h12a2 2 0 002-2v-7h1a1 1 0 001-1V9a2 2 0 00-2-2zM9 5a1 1 0 011 1v1H9a1 1 0 010-2zm6 0a1 1 0 010 2h-1V6a1 1 0 011-1z" />
        </svg>
        Bônus
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cream text-brand-dark shadow-md shadow-brand-cream/20">
      <svg className="w-3 h-3 text-brand-red" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
      </svg>
      Plus
    </span>
  );
}

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
              Da <strong className="text-brand-red">atração</strong> do cliente ao{" "}
              <strong className="text-brand-red">fechamento</strong> da venda
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-10">
              Estruturamos as etapas que transformam <strong className="text-brand-dark">oportunidades</strong> em{" "}
              <strong className="text-brand-dark">resultados</strong>.
            </p>
            <CTAButton>Falar com especialista</CTAButton>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const isDark = service.badge === "plus";
              return (
                <div
                  key={service.title}
                  className={`group relative p-6 rounded-3xl ${service.color} ${service.hoverColor} card-float cursor-default flex flex-col`}
                >
                  {service.badge && (
                    <div className="absolute -top-3 right-5">
                      <Badge kind={service.badge} />
                    </div>
                  )}
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className={`text-sm font-mono ${isDark ? "text-brand-cream/40" : "text-brand-dark/40"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-lg font-semibold ${isDark ? "text-brand-cream" : "text-brand-dark"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed pl-10 ${isDark ? "text-brand-cream/70" : "text-brand-dark/60"}`}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
