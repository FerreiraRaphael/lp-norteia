export default function ForWhom() {
  return (
    <section id="para-quem" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-dark/30" />
              <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Para quem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight mb-8">
              A Norteia é para empresas que querem resultados, não só tecnologia.
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-brand-dark/5">
                <div className="w-2 h-2 bg-brand-dark mt-2 flex-shrink-0" />
                <span className="text-brand-dark">Empresas de qualquer tamanho</span>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-dark/5">
                <div className="w-2 h-2 bg-brand-dark mt-2 flex-shrink-0" />
                <span className="text-brand-dark">Negócios que querem automatizar tarefas</span>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-dark/5">
                <div className="w-2 h-2 bg-brand-dark mt-2 flex-shrink-0" />
                <span className="text-brand-dark">Times pequenos ou sobrecarregados</span>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-dark/5">
                <div className="w-2 h-2 bg-brand-dark mt-2 flex-shrink-0" />
                <span className="text-brand-dark">Quem busca clareza e eficiência</span>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <div className="bg-brand-dark p-10 w-full">
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase block mb-4">
                Não indicado
              </span>
              <p className="text-xl text-brand-cream leading-relaxed">
                Se você quer apenas &ldquo;um chatbot pronto&rdquo; sem personalização,
                provavelmente não somos a melhor escolha.
              </p>
              <p className="text-brand-cream/60 mt-4">
                Nosso trabalho é criar soluções sob medida que funcionam de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
