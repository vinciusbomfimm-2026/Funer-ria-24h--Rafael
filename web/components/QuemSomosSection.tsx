import Image from "next/image";
import Kicker from "@/components/Kicker";
import { ClockIcon, DocumentIcon, HeartIcon } from "@/components/icons";
import { PILARES } from "@/lib/content";

const ICONS = {
  heart: HeartIcon,
  document: DocumentIcon,
  clock: ClockIcon,
};

export default function QuemSomosSection() {
  return (
    <section id="quem-somos" className="bg-offwhite-muted px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Kicker className="justify-start">Quem Somos</Kicker>
          <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
            Muito mais do que um serviço, um verdadeiro amparo.
          </h2>
          <p className="mt-3 font-display text-lg italic text-clay">
            Nossa missão é cuidar de você no momento mais difícil.
          </p>
          <p className="mt-6 text-base leading-relaxed text-midnight/80">
            Sabemos que a perda de um ente querido é uma das experiências
            mais dolorosas e delicadas da vida. Por isso, a nossa missão vai
            muito além de prestar um serviço funerário: nós estamos aqui
            para ser o seu ponto de apoio. Nosso compromisso é assumir toda
            a carga burocrática e logística com máxima agilidade, garantindo
            uma despedida com amor, respeito e dignidade.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {PILARES.map((pilar) => {
              const Icon = ICONS[pilar.icone];
              return (
                <div key={pilar.titulo}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold">
                    <Icon className="h-4 w-4 text-gold-deep" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-midnight">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-midnight/70">
                    {pilar.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/quem-somos-recepcao.webp"
            alt="Consultor da Bela Vista conversando com a família em um ambiente calmo e acolhedor"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
