export default function MainMessage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-orange rounded-full" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">O problema</span>
          </div>

          <p className="text-2xl md:text-3xl text-brand-dark/80 leading-relaxed mb-12">
            Empresas perdem tempo e dinheiro com processos manuais,
            <strong> atendimentos</strong> lentos e <strong>leads</strong> que escapam.
          </p>

          <div className="border-l-4 border-brand-purple pl-8 py-6 rounded-r-3xl bg-gradient-to-r from-brand-purple/20 to-transparent">
            <p className="text-xl md:text-2xl text-brand-dark leading-relaxed">
              A <strong>Norteia</strong> usa <strong className="text-brand-purple">inteligência artificial</strong> de forma prática — para assumir
              tarefas do dia a dia e deixar seu time focado no que realmente importa.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-5">
            <div className="border-2 border-brand-dark/10 rounded-3xl p-6 card-float hover:border-brand-pink/50">
              <p className="text-sm text-brand-dark/50 mb-2">Não é</p>
              <p className="text-brand-dark font-semibold">Robô genérico</p>
            </div>
            <div className="border-2 border-brand-dark/10 rounded-3xl p-6 card-float hover:border-brand-blue/50">
              <p className="text-sm text-brand-dark/50 mb-2">Não é</p>
              <p className="text-brand-dark font-semibold">Ferramenta complicada</p>
            </div>
            <div className="bg-brand-dark rounded-3xl p-6 text-brand-cream card-float">
              <p className="text-sm text-brand-cream/60 mb-2">É</p>
              <p className="font-semibold"><strong className="text-brand-pink">IA</strong> feita pro seu negócio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
