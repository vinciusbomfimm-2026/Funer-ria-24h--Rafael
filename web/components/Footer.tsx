import Image from "next/image";
import Link from "next/link";
import { ChatIcon, PhoneIcon } from "@/components/icons";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-midnight text-offwhite/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-bela-vista-transparent.png"
              alt="Bela Vista - Serviço Funerário 24h - São Paulo SP"
              width={1439}
              height={487}
              className="h-12 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Apoio completo, humanizado e sem burocracia, no momento em que
              mais precisa.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold">
              Contatos
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Telefone 24h: {SITE.telefoneFormatado}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <ChatIcon className="h-4 w-4" />
                  WhatsApp Direto: {SITE.telefoneFormatado}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#inicio" className="hover:text-gold">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#quem-somos" className="hover:text-gold">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-gold">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#cemiterios" className="hover:text-gold">
                  Cemitérios
                </Link>
              </li>
              <li>
                <Link href="/#avaliacoes" className="hover:text-gold">
                  Avaliações
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold">Aviso</p>
            <p className="mt-3 text-xs leading-relaxed text-offwhite/70">
              Somos uma agência funerária independente, dedicada à prestação
              de serviços e apoio às famílias. Atendemos nos principais
              cemitérios e crematórios com total profissionalismo e ética.
            </p>
            <Link
              href="/politica-privacidade"
              className="mt-3 inline-block text-xs text-offwhite/50 hover:text-gold"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-offwhite/50">
          © {new Date().getFullYear()} Bela Vista - Serviço Funerário 24h. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
