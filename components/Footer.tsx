import { navItems } from "@/lib/nav";

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
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-brand-cream/60 hover:text-brand-red transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-brand-cream/40">
            {currentYear} NorteIA
          </p>
        </div>
      </div>
    </footer>
  );
}
