export default function MainMessage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-dark/30" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">O problema</span>
          </div>

          <p className="text-2xl md:text-3xl text-brand-dark/80 leading-relaxed mb-12">
            Empresas perdem tempo e dinheiro com processos manuais,
            atendimentos lentos e leads que escapam.
          </p>

          <div className="border-l-2 border-brand-dark pl-8 py-4">
            <p className="text-xl md:text-2xl text-brand-dark leading-relaxed">
              A Norteia usa inteligência artificial de forma prática — para assumir
              tarefas do dia a dia e deixar seu time focado no que realmente importa.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="border-t border-brand-dark/20 pt-6">
              <p className="text-sm text-brand-dark/50 mb-2">Não é</p>
              <p className="text-brand-dark font-medium">Robô genérico</p>
            </div>
            <div className="border-t border-brand-dark/20 pt-6">
              <p className="text-sm text-brand-dark/50 mb-2">Não é</p>
              <p className="text-brand-dark font-medium">Ferramenta complicada</p>
            </div>
            <div className="border-t-2 border-brand-dark pt-6">
              <p className="text-sm text-brand-dark/50 mb-2">É</p>
              <p className="text-brand-dark font-medium">IA feita pro seu negócio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
