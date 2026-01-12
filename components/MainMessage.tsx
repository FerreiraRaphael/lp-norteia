export default function MainMessage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <span className="text-sm tracking-widest text-brand-cream/50 uppercase">O problema</span>
          </div>

          <p className="text-2xl md:text-3xl text-brand-cream/80 leading-relaxed mb-12">
            Empresas perdem tempo e dinheiro com processos manuais,
            <strong> atendimentos</strong> lentos e <strong>leads</strong> que escapam.
          </p>

          <div className="border-l-4 border-brand-red pl-8 py-6 rounded-r-3xl bg-gradient-to-r from-brand-red/20 to-transparent">
            <p className="text-xl md:text-2xl text-brand-cream leading-relaxed">
              A <strong>Norteia</strong> usa <strong className="text-brand-red">inteligência artificial</strong> de forma prática — para assumir
              tarefas do dia a dia e deixar seu time focado no que realmente importa.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-5">
            <div className="border-2 border-brand-cream/20 rounded-3xl p-6 card-float hover:border-brand-pink/50">
              <p className="text-sm text-brand-cream/50 mb-2">Não é</p>
              <p className="text-brand-cream font-semibold">Robô genérico</p>
            </div>
            <div className="border-2 border-brand-cream/20 rounded-3xl p-6 card-float hover:border-brand-blue/50">
              <p className="text-sm text-brand-cream/50 mb-2">Não é</p>
              <p className="text-brand-cream font-semibold">Ferramenta complicada</p>
            </div>
            <div className="bg-brand-cream rounded-3xl p-6 text-brand-dark card-float">
              <p className="text-sm text-brand-dark/60 mb-2">É</p>
              <p className="font-semibold"><strong className="text-brand-red">IA</strong> feita pro seu negócio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
