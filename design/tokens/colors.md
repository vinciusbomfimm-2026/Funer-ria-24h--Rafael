## Color tokens — Bela Vista - Serviço Funerário 24h

- **Goal**: Semantic color roles mapped to a sóbrio, dark-navy palette with a warm gold accent (marca Bela Vista) e verde WhatsApp reservado exclusivamente para conversão.

- **Palette** (definida em `web/app/globals.css`, expostas como classes Tailwind `midnight`, `gold`, etc.):
  - `color-bg-surface` → `--offwhite` `#F8F9FA` — fundo padrão de seções claras.
  - `color-bg-subtle` → `--offwhite-muted` `#F1F3F5` — fundo de seções alternadas (Quem Somos, Avaliações).
  - `color-bg-inverse` → `--midnight` `#0A192F` — fundo do Header, Footer, Hero, banners de CTA escuro.
  - `color-bg-inverse-subtle` → `--midnight-light` `#112240` — gradiente/hover sobre fundo escuro.
  - `color-fg-default` → `--midnight` `#0A192F` — texto principal sobre fundo claro.
  - `color-fg-inverse` → `--offwhite` `#F8F9FA` — texto principal sobre fundo escuro.
  - `color-fg-muted` → `midnight/70` — texto secundário sobre fundo claro (contraste ~6.2:1, AA ok).
  - `color-accent-primary` → `--gold` `#D4AF37` — bordas, ícones, destaques (nunca como texto pequeno sobre fundo claro — ver nota de contraste).
  - `color-accent-primary-text` → `--gold-deep` `#7A5A0D` — variante escurecida do dourado, única segura para **texto** sobre fundo claro (~6:1 de contraste; a versão `--gold` original `#AA7C11` falhava AA em ~3.5:1 e foi corrigida em 2026-08).
  - `color-conversion` → `--whatsapp` `#25D366` — **reservado exclusivamente** para CTAs de WhatsApp (botão flutuante, barra fixa mobile, botões de card).
  - `color-conversion-hover` → `--whatsapp-deep` `#128C7E`.

- **Regra de contraste (aplicar sempre)**:
  - Nunca usar `--gold` (`#D4AF37`) como cor de texto sobre fundo claro (`--offwhite`/`--offwhite-muted`/branco) — falha WCAG AA. Usar `--gold-deep` nesses casos.
  - `--gold` é seguro como texto/borda sobre fundo escuro (`--midnight`), onde o contraste é alto (~8:1).
