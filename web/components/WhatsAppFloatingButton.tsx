"use client";

import { useState } from "react";
import { ChatIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloatingButton() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-2 md:flex">
      {!dismissed && (
        <div className="relative rounded-lg bg-midnight px-4 py-2 text-sm text-offwhite shadow-lg">
          Estamos online. Fale conosco agora.
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setDismissed(true)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-midnight"
          >
            ✕
          </button>
        </div>
      )}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-2xl text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 motion-safe:animate-ping rounded-full bg-whatsapp/60" />
        <ChatIcon className="relative h-6 w-6" />
      </a>
    </div>
  );
}
