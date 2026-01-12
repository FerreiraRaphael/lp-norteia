export default function ForWhom() {
  return (
    <section id="para-quem" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">Para quem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-gliker text-brand-cream leading-tight mb-8">
              A <strong>Norteia</strong> é para empresas que querem <span className="text-brand-red">resultados</span>, não só tecnologia.
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream/10 card-float hover:bg-brand-cream/15">
                <div className="w-3 h-3 bg-brand-red rounded-full flex-shrink-0" />
                <span className="text-brand-cream">Empresas de qualquer tamanho</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream/10 card-float hover:bg-brand-cream/15">
                <div className="w-3 h-3 bg-brand-cream rounded-full flex-shrink-0" />
                <span className="text-brand-cream">Negócios que querem <strong>automatizar</strong> tarefas</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream/10 card-float hover:bg-brand-cream/15">
                <div className="w-3 h-3 bg-brand-red rounded-full flex-shrink-0" />
                <span className="text-brand-cream">Times pequenos ou sobrecarregados</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-cream/10 card-float hover:bg-brand-cream/15">
                <div className="w-3 h-3 bg-brand-cream rounded-full flex-shrink-0" />
                <span className="text-brand-cream">Quem busca clareza e <strong>eficiência</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <div className="bg-brand-cream p-10 w-full rounded-[2rem] card-float">
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase block mb-4">
                Não indicado
              </span>
              <p className="text-xl text-brand-dark leading-relaxed">
                Se você quer apenas um chatbot pronto sem personalização,
                provavelmente não somos a melhor escolha.
              </p>
              <p className="text-brand-dark/60 mt-4">
                Nosso trabalho é criar <strong className="text-brand-red">soluções de IA sob medida</strong> que funcionam de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
