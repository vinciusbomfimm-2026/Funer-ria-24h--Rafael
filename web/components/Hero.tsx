import Image from "next/image";
import { ChatIcon, PhoneIcon } from "@/components/icons";
import { telLink, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28"
    >
      <Image
        src="/hero-portal.webp"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/95 via-midnight/90 to-midnight-light/95" />

      <div className="relative mx-auto max-w-3xl">
        <Image
          src="/logo-bela-vista-gold.png"
          alt="Bela Vista - Serviço Funerário 24h - São Paulo SP"
          width={220}
          height={220}
          priority
          className="mx-auto h-auto w-40 sm:w-48"
        />

        <h1 className="mt-8 font-display text-3xl font-semibold leading-tight text-offwhite sm:text-5xl">
          Assistência Funerária 24h: Apoio completo no momento em que mais
          precisa.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-offwhite/80 sm:text-lg">
          Atendimento imediato, humanizado e sem burocracia. Nós assumimos o
          controle da situação para que a sua família tenha paz.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={telLink()}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gold px-8 py-4 text-base font-semibold text-offwhite transition-colors hover:bg-gold hover:text-midnight sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            Falar com Plantão 24h
          </a>
          <a
            href={whatsappLink(
              "Olá, preciso de atendimento funerário urgente. Podem me ajudar?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:w-auto"
          >
            <ChatIcon className="h-5 w-5" />
            Preciso de Ajuda Agora
          </a>
        </div>
      </div>
    </section>
  );
}
