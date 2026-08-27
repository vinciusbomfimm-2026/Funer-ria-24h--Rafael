import { ChatIcon, PhoneIcon } from "@/components/icons";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export default function BottomActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-gold/30 md:hidden">
      <a
        href={telLink()}
        className="flex flex-1 items-center justify-center gap-2 bg-midnight py-4 text-sm font-semibold text-offwhite"
      >
        <PhoneIcon className="h-4 w-4" />
        Ligar Emergência
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-white"
      >
        <ChatIcon className="h-4 w-4" />
        WhatsApp 24h
      </a>
      <span className="sr-only">{SITE.telefoneFormatado}</span>
    </div>
  );
}
