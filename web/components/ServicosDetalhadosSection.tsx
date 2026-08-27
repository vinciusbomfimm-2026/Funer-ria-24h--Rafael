import Kicker from "@/components/Kicker";
import { ChatIcon, PhoneIcon } from "@/components/icons";
import { SERVICOS_DETALHADOS } from "@/lib/content";
import { telLink, whatsappLink } from "@/lib/site";

export default function ServicosDetalhadosSection() {
  return (
    <section className="bg-offwhite-muted px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Kicker>Atendimento Completo</Kicker>
        <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
          Serviços Funerários em São Paulo — Atendimento 24h
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-midnight/70 sm:text-base">
          A Bela Vista oferece assistência funerária completa em São Paulo:
          velório, sepultamento, cremação, traslado nacional e internacional,
          coroa de flores e orientação sobre jazigos. Atendimento humanizado
          24 horas, todos os dias do ano.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICOS_DETALHADOS.map((servico) => (
          <div
            key={servico.id}
            className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm"
          >
            <h3 className="font-display text-lg font-semibold text-midnight">
              {servico.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-midnight/70">
              {servico.descricao}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={telLink()}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight px-8 py-4 text-base font-semibold text-offwhite transition-colors hover:bg-midnight-light sm:w-auto"
        >
          <PhoneIcon className="h-5 w-5" />
          Falar com o Plantão 24h
        </a>
        <span className="mx-3 hidden text-sm text-midnight/50 sm:inline">ou</span>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:mt-0 sm:w-auto"
        >
          <ChatIcon className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
