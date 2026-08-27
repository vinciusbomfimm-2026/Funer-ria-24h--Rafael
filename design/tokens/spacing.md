## Spacing tokens — Bela Vista - Serviço Funerário 24h

- **Goal**: Escala consistente, mobile-first — botões grandes e fáceis de tocar (público 90% mobile, em urgência).

- **Escala**: usamos a escala padrão do Tailwind CSS (base 4px: `1`=4px, `2`=8px, `4`=16px, `6`=24px, `8`=32px...). Não inventar valores fora dela.

- **Usage guidance**:
  - Dentro de componentes (ícone + texto, label + valor): `gap-2` a `gap-3`.
  - Entre controles relacionados (botões lado a lado): `gap-3` a `gap-4`.
  - Padding interno de cards: `p-6`.
  - Entre seções da home (`py-16 sm:py-24`).
  - Botões de CTA (tel/WhatsApp): padding generoso `px-8 py-4` — alvo de toque grande, conforme diretriz mobile-first do briefing.
  - Bottom Action Bar mobile: altura fixa reservada via `padding-bottom: 72px` no `<body>` (ver `globals.css`) para não sobrepor conteúdo.
