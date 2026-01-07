"use client";

import { useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA%20da%20Norteia.";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-cream/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-gliker tracking-tight text-brand-dark">
            nortei<span className="inline-block border-b-2 border-brand-pink">a</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brand-dark/70 hover:text-brand-pink transition-colors text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-pink text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105 shadow-md shadow-brand-pink/20"
            >
              Conversar
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-brand-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-brand-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-brand-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-8 border-t border-brand-dark/10">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-brand-dark/70 hover:text-brand-pink transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-pink text-white px-6 py-4 rounded-full text-center tracking-wide mt-4 font-medium"
              >
                Conversar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
