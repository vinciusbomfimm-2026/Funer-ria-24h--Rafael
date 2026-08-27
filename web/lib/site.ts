export const SITE = {
  telefone: "+551145580647",
  telefoneFormatado: "(11) 4558-0647",
  whatsappMensagemPadrao:
    "Olá, preciso de atendimento funerário urgente. Podem me ajudar?",
};

export function whatsappLink(mensagem = SITE.whatsappMensagemPadrao) {
  const numero = SITE.telefone.replace(/\D/g, "");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export function telLink() {
  return `tel:${SITE.telefone}`;
}
