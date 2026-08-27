import Kicker from "@/components/Kicker";
import {
  ArchIcon,
  CarIcon,
  ChatIcon,
  FlowerIcon,
  HeartIcon,
  PhoneIcon,
} from "@/components/icons";
import type { Servico } from "@/lib/content";
import { telLink, whatsappLink } from "@/lib/site";

const ICONS: Record<string, typeof ArchIcon> = {
  "funeral-completo": ArchIcon,
  cremacao: FlowerIcon,
  "trasladacao-nacional-internacional": CarIcon,
  "urnas-coroas-ornamentacao": HeartIcon,
};

export default function ServicesSection({ servicos }: { servicos: Servico[] }) {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Nossos Serviços</Kicker>
        <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
          Os Nossos Serviços: Cuidamos de tudo por si.
        </h2>
        <span className="mt-4 inline-block rounded-full border border-gold bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-deep">
          Garantia Burocracia Zero: Assumimos toda a documentação, certidões
          e taxas
        </span>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map((servico) => {
          const Icon = ICONS[servico.slug] ?? ArchIcon;
          return (
            <article
              key={servico.slug}
              className="flex flex-col items-center rounded-t-[80px] rounded-b-2xl border border-gold/20 bg-white px-6 pt-10 pb-6 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-midnight">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-midnight">
                {servico.titulo}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-midnight/70">
                {servico.descricao}
              </p>
              <a
                href={whatsappLink(servico.whatsappMensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep"
              >
                <ChatIcon className="h-4 w-4" />
                {servico.ctaLabel}
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-16 rounded-2xl bg-midnight px-6 py-10 text-center sm:px-12">
        <h3 className="font-display text-xl font-semibold text-offwhite sm:text-2xl">
          Não sabe por onde começar? Não se preocupe.
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-offwhite/80">
          A perda surge sem aviso, mas não tem de passar por isto sozinho(a).
          Ligue agora. O nosso Plantão 24h orienta em cada passo.
        </p>
        <a
          href={telLink()}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold px-8 py-4 text-base font-semibold text-offwhite transition-colors hover:bg-gold hover:text-midnight"
        >
          <PhoneIcon className="h-5 w-5" />
          Ligar Agora para o Plantão
        </a>
      </div>
    </section>
  );
}
