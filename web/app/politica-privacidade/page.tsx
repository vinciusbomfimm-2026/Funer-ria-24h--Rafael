import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Bela Vista - Serviço Funerário 24h",
  description:
    "Como a Bela Vista - Serviço Funerário 24h coleta, utiliza e protege os dados pessoais fornecidos em nosso website.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-semibold text-midnight sm:text-4xl">
        Política de Privacidade
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-midnight/80">
        <p>
          Esta política descreve como a Bela Vista - Serviço Funerário 24h
          coleta, utiliza e protege os dados pessoais fornecidos por meio deste
          website, em conformidade com a Lei Geral de Proteção de Dados
          (LGPD — Lei nº 13.709/2018).
        </p>

        <div>
          <h2 className="text-base font-semibold text-midnight">
            Quais dados coletamos
          </h2>
          <p className="mt-2">
            Coletamos apenas os dados necessários para viabilizar o
            atendimento, como nome e telefone, quando você liga para nossa
            central ou nos envia uma mensagem por WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-midnight">
            Como utilizamos seus dados
          </h2>
          <p className="mt-2">
            Os dados fornecidos são utilizados exclusivamente para viabilizar
            o atendimento solicitado e o contato de nossa equipe. Não
            compartilhamos seus dados com terceiros para fins comerciais.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-midnight">
            Seus direitos
          </h2>
          <p className="mt-2">
            Você pode, a qualquer momento, solicitar informações sobre os
            dados que mantemos, bem como pedir sua correção ou exclusão,
            entrando em contato por telefone ou WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
