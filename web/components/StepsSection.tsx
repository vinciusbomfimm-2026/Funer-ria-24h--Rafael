import Kicker from "@/components/Kicker";
import { ArchIcon, CarIcon, ChatIcon, DocumentIcon, PhoneIcon } from "@/components/icons";
import { PASSOS } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const ICONS = {
  phone: PhoneIcon,
  car: CarIcon,
  document: DocumentIcon,
  arch: ArchIcon,
};

export default function StepsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Como Podemos Ajudar</Kicker>
        <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
          Perdeu um ente querido? Veja como podemos ajudar agora:
        </h2>
        <p className="mt-3 text-sm text-midnight/70 sm:text-base">
          Nós cuidamos de toda a burocracia para que você possa focar no que
          importa: a despedida com respeito e dignidade.
        </p>
      </div>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden
          className="absolute top-6 right-0 left-0 hidden h-px bg-gold/30 lg:block"
        />
        {PASSOS.map((passo) => {
          const Icon = ICONS[passo.icone];
          return (
            <div key={passo.numero} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-offwhite">
                <Icon className="h-5 w-5 text-gold-deep" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-midnight">
                {passo.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight/70">
                {passo.texto}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:w-auto"
        >
          <ChatIcon className="h-5 w-5" />
          Atendimento Urgente via WhatsApp
        </a>
      </div>
    </section>
  );
}
