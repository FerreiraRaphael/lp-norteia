"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Posso contratar apenas um serviço?",
    answer: [
      "Sim. Você pode contratar os serviços individualmente, de acordo com as necessidades e os objetivos da sua empresa.",
    ],
  },
  {
    question: "Não possuo CRM. Devo contratar um?",
    answer: [
      "Não necessariamente! A NorteIA avalia os processos da sua empresa e indica a melhor solução para organizar seus contatos e acompanhar suas oportunidades de venda.",
      "Se necessário, podemos ajudar você a identificar um CRM adequado ao seu negócio.",
    ],
  },
  {
    question: "Como funciona a implementação de um agente de IA?",
    answer: [
      "Primeiro, entendemos as necessidades e os objetivos da sua empresa. Depois, desenvolvemos um agente personalizado, integramos aos canais e sistemas compatíveis com sua operação e acompanhamos seu desempenho para identificar oportunidades de melhoria.",
    ],
  },
  {
    question: "O agente de IA substituirá minha equipe de atendimento?",
    answer: [
      "Não. O agente de IA automatiza tarefas e agiliza o primeiro contato, enquanto sua equipe pode se concentrar em negociações e atendimentos que exigem intervenção humana.",
    ],
  },
  {
    question: "Quanto tempo leva para implementar um agente de IA?",
    answer: [
      "O prazo varia conforme a complexidade do projeto, as integrações necessárias e os fluxos de atendimento.",
      "Após entender suas necessidades, é possível estimar o tempo de implementação.",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <span className="text-sm tracking-widest text-brand-cream/50 uppercase">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-gliker text-brand-cream leading-tight">
              Perguntas <span className="text-brand-red">frequentes</span>
            </h2>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <div
                  key={faq.question}
                  className={`rounded-3xl border-2 transition-colors ${
                    isOpen ? "border-brand-red bg-brand-red/10" : "border-brand-cream/15 bg-brand-cream/[0.03] hover:border-brand-cream/30"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-6 p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-sm text-brand-cream/40 font-mono">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold text-brand-cream">{faq.question}</span>
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen ? "bg-brand-red text-brand-cream rotate-45" : "bg-brand-cream/10 text-brand-cream"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="px-6 pb-6 pl-[4.25rem] space-y-3 text-brand-cream/70 leading-relaxed"
                  >
                    {faq.answer.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
