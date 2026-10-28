import CTAButton from "./CTAButton";

type Member = {
  name: string;
  role: string;
  photo?: string;
  photoPosition?: string;
  initials: string;
  bio: string[];
};

// Para exibir as fotos profissionais, salve-as em /public/team/ e preencha o campo `photo`
// de cada integrante (ex.: photo: "/team/lohrane.jpg"). Sem foto, as iniciais são exibidas.
const team: Member[] = [
  {
    name: "Lohrane Eliense",
    photo: "/team/lohrane.jpg",
    photoPosition: "center 20%",
    role: "Especialista em Marketing, Gestão de Projetos e Estratégias Comerciais",
    initials: "LE",
    bio: [
      "Com experiência em projetos para mais de 500 clientes, atua na gestão de marketing, liderança de equipes e desenvolvimento de estratégias comerciais.",
      "Sua trajetória abrange diversos segmentos, com foco em aquisição de clientes, otimização de processos de conversão e análise de indicadores de marketing e vendas.",
    ],
  },
  {
    name: "Ana Luiza Guimarães",
    photo: "/team/ana-luiza.jpg",
    photoPosition: "center 25%",
    role: "Estrategista de Conteúdo, Social Media e Branding",
    initials: "AL",
    bio: [
      "Publicitária com MBA em Branding, Ana Luiza tem mais de 8 anos de experiência em marketing digital e mais de 50 projetos de social media liderados.",
      "Foi Head de Mídias Sociais em uma das maiores assessorias de marketing do país e possui experiência em estratégia de conteúdo, gestão de contas e tráfego pago.",
    ],
  },
];

function Avatar({ member }: { member: Member }) {
  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-[2rem] overflow-hidden flex-shrink-0 bg-gradient-to-br from-brand-red to-brand-red/60 shadow-lg shadow-brand-red/30">
      {member.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.photo}
          alt={`Foto de ${member.name}`}
          className="w-full h-full object-cover"
          style={{ objectPosition: member.photoPosition ?? "center" }}
        />
      ) : (
        <span className="w-full h-full flex items-center justify-center font-gliker text-4xl text-brand-cream">
          {member.initials}
        </span>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-brand-cream text-brand-dark rounded-[3rem] mx-4 md:mx-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-brand-red rounded-full" />
            <span className="text-sm tracking-widest text-brand-dark/50 uppercase">Equipe</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gliker leading-tight">
            Quem está por trás da <strong className="text-brand-red">NorteIA</strong>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="p-8 md:p-10 rounded-[2rem] bg-brand-dark/5 card-float hover:bg-brand-dark/[0.08] flex flex-col gap-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <Avatar member={member} />
                <div>
                  <h3 className="text-2xl font-gliker text-brand-dark mb-2">{member.name}</h3>
                  <p className="text-sm text-brand-red font-medium leading-relaxed">{member.role}</p>
                </div>
              </div>
              <div className="space-y-4 text-brand-dark/70 leading-relaxed">
                {member.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Fale conosco</CTAButton>
        </div>
      </div>
    </section>
  );
}
