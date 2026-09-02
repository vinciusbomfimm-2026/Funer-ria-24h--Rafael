import Image from "next/image";
import Kicker from "@/components/Kicker";
import { ChatIcon, MapPinIcon } from "@/components/icons";
import { CREMATORIOS } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export default function CrematoriesSection() {
  return (
    <section
      id="crematorios"
      className="bg-offwhite-muted px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Onde Atendemos</Kicker>
        <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
          Crematórios Parceiros em São Paulo
        </h2>
        <p className="mt-3 text-sm text-midnight/70 sm:text-base">
          Realizamos cremação em crematórios parceiros na capital e região
          metropolitana, cuidando de toda a documentação, transporte e
          entrega das cinzas à família.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CREMATORIOS.map((crematorio) => (
          <article
            key={crematorio.id}
            className="flex flex-col overflow-hidden rounded-t-[64px] rounded-b-2xl border border-gold/20 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={crematorio.imagem}
                alt={crematorio.nome}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                <MapPinIcon className="h-3.5 w-3.5" />
                {crematorio.regiao}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-midnight">
                {crematorio.nome}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-midnight/70">
                {crematorio.descricao}
              </p>
              <a
                href={whatsappLink(
                  `Olá, gostaria de consultar disponibilidade e valores no ${crematorio.nome}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep"
              >
                <ChatIcon className="h-4 w-4" />
                Consultar Disponibilidade
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
