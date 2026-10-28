import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorteIA | Marketing integrado para gerar vendas",
  description:
    "A NorteIA integra marketing, tecnologia e estratégia comercial: social media, tráfego pago, acompanhamento comercial e agentes de IA para fortalecer sua presença digital e impulsionar o crescimento da sua empresa.",
  keywords: [
    "marketing integrado",
    "social media",
    "tráfego pago",
    "estratégia comercial",
    "agente de IA",
    "atendimento automático",
    "geração de leads",
    "vendas",
    "marketing digital",
  ],
  openGraph: {
    title: "NorteIA | Marketing integrado para gerar vendas",
    description:
      "Muito além de entregar leads: marketing, tecnologia e estratégia comercial para impulsionar o crescimento da sua empresa.",
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
