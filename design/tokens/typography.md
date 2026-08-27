## Typography tokens — Bela Vista - Serviço Funerário 24h

- **Goal**: Sobriedade e autoridade institucional nos títulos, leitura confortável no corpo — público em luto/estresse.

- **Famílias** (via `next/font/google`, ver `web/app/layout.tsx`):
  - Display/headings: **Playfair Display** (`--font-playfair` → classe Tailwind `font-display`), pesos 500/600/700.
  - Corpo/UI: **Inter** (`--font-inter` → classe Tailwind `font-sans`, padrão do `<body>`).

- **Roles**:
  - `heading-hero` (h1, Hero): `text-3xl sm:text-5xl`, `font-display font-semibold`. Uma única vez por página.
  - `heading-section` (h2, título de cada seção): `text-2xl sm:text-3xl`, `font-display font-semibold`.
  - `heading-card` (h3, cards de serviço/passos/pilares): `text-lg` (ou `text-sm` em cards menores), `font-display` ou `font-semibold` conforme o card.
  - `body`: `text-base`, `font-sans`, `leading-relaxed` — texto de apoio, parágrafos.
  - `body-small`: `text-sm`, usado na maioria dos cards e descrições (site é denso em cards).
  - `caption`: `text-xs`, rodapé, aviso legal, badges.

- **Usage**:
  - Cada seção do one-pager (`app/page.tsx`) tem exatamente um `h2`; nunca pular de `h1` para `h3`.
  - Evitar tamanhos ad-hoc fora da escala Tailwind padrão (`text-xs` a `text-5xl`).
