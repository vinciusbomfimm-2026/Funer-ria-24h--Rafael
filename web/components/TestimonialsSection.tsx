import Kicker from "@/components/Kicker";
import { StarIcon } from "@/components/icons";
import type { Depoimento } from "@/lib/content";

export default function TestimonialsSection({
  depoimentos,
}: {
  depoimentos: Depoimento[];
}) {
  return (
    <section id="avaliacoes" className="bg-offwhite-muted px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Kicker>Depoimentos</Kicker>
        <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
          O que dizem as famílias que apoiamos
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {depoimentos.map((depoimento) => (
          <figure
            key={depoimento.id}
            className="flex flex-col rounded-t-[64px] rounded-b-2xl bg-white px-6 pt-10 pb-6 text-center shadow-sm"
          >
            <div
              className="flex justify-center gap-0.5 text-gold"
              aria-label={`${depoimento.nota} de 5 estrelas`}
            >
              {Array.from({ length: depoimento.nota }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-midnight/80">
              &ldquo;{depoimento.texto}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-midnight">
              {depoimento.autor}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
