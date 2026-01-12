export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-brand-cream/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#" className="text-xl font-gliker tracking-tight text-brand-cream">
            nortei<span className="inline-block border-b-2 border-brand-red">a</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#servicos" className="text-brand-cream/60 hover:text-brand-red transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="text-brand-cream/60 hover:text-brand-red transition-colors">
              Processo
            </a>
            <a href="#beneficios" className="text-brand-cream/60 hover:text-brand-red transition-colors">
              Benefícios
            </a>
          </nav>

          <p className="text-sm text-brand-cream/40">
            {currentYear} Norteia
          </p>
        </div>
      </div>
    </footer>
  );
}
