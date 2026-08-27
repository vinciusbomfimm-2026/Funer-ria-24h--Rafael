import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import ServicesSection from "@/components/ServicesSection";
import CemeteriesSection from "@/components/CemeteriesSection";
import ServicosDetalhadosSection from "@/components/ServicosDetalhadosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqAccordion from "@/components/FaqAccordion";
import Kicker from "@/components/Kicker";
import Reveal from "@/components/Reveal";
import { getDepoimentos, getFaq, getServicos } from "@/lib/api";

export default async function Home() {
  const [servicos, depoimentos, faq] = await Promise.all([
    getServicos(),
    getDepoimentos(),
    getFaq(),
  ]);

  return (
    <>
      <Hero />
      <Reveal>
        <StepsSection />
      </Reveal>
      <Reveal>
        <QuemSomosSection />
      </Reveal>
      <Reveal>
        <ServicesSection servicos={servicos} />
      </Reveal>
      <Reveal>
        <CemeteriesSection />
      </Reveal>
      <Reveal>
        <ServicosDetalhadosSection />
      </Reveal>
      <Reveal>
        <TestimonialsSection depoimentos={depoimentos} />
      </Reveal>

      <Reveal>
        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <Kicker>Perguntas e Respostas</Kicker>
            <h2 className="mt-4 font-display text-2xl font-semibold text-midnight sm:text-3xl">
              Dúvidas Frequentes
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={faq} />
          </div>
        </section>
      </Reveal>
    </>
  );
}
