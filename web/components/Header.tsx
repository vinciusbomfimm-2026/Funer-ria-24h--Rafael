"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#inicio", label: "Início" },
  { href: "/#quem-somos", label: "Quem Somos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#cemiterios", label: "Cemitérios" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-midnight/95 backdrop-blur supports-[backdrop-filter]:bg-midnight/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-bela-vista-transparent.png"
            alt="Bela Vista - Serviço Funerário 24h - São Paulo SP"
            width={1439}
            height={487}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="text-sm font-medium text-offwhite/90 hover:text-gold"
          >
            {SITE.telefoneFormatado}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep"
          >
            WhatsApp 24h
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/30 text-offwhite lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-midnight px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-offwhite/90 hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 text-sm text-offwhite/70">
              Contratação Exclusiva por Telefone/WhatsApp 24h
            </li>
            <li>
              <a
                href={telLink()}
                className="block px-2 py-1 text-sm font-medium text-gold"
              >
                {SITE.telefoneFormatado}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
