import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norteia Agente | Agentes de IA para sua empresa",
  description:
    "A Norteia cria Agentes de IA sob medida para automatizar vendas, marketing, atendimento e processos internos. Menos trabalho manual, mais eficiência, resultados claros.",
  keywords: [
    "agentes de IA",
    "inteligência artificial",
    "automação",
    "atendimento automático",
    "vendas",
    "marketing",
    "chatbot",
    "IA para empresas",
  ],
  openGraph: {
    title: "Norteia Agente | Agentes de IA para sua empresa",
    description:
      "Agentes de IA sob medida para automatizar vendas, marketing, atendimento e processos internos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
