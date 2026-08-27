# Plano Técnico e de Arquitetura — Website ABM Assistência Funerária (Luxo)

> Baseado no relatório consolidado de pesquisa, diagnóstico e resultados do projeto ABM Assistência Funerária. Este documento traduz os requisitos de negócio, UX e identidade visual já levantados em uma stack técnica completa e um plano de execução.

---

## 1. Premissas de Negócio que Orientam a Stack

| Requisito do negócio | Implicação técnica |
| :--- | :--- |
| Contato humano imediato (telefone/WhatsApp 24h) | Integração nativa com WhatsApp Business API / `wa.me`, click-to-call, Bottom Action Bar mobile |
| Público em luto, alta vulnerabilidade emocional | Performance altíssima (Core Web Vitals), zero fricção, acessibilidade (WCAG AA) |
| Mobile-first (buscas em hospitais/residências) | SSR/SSG, imagens otimizadas, PWA-ready |
| Identidade de luxo sóbrio (ouro metálico, midnight blue) | Design system tokenizado, tipografia customizada, vídeo institucional |
| Depoimentos, FAQ, catálogo de urnas/caixões | CMS headless para edição de conteúdo sem deploy |
| Vídeos institucionais/depoimentos sensíveis | Hospedagem privada (Vimeo), sem indexação pública do player |
| LGPD (dados sensíveis — luto, dados familiares) | Consentimento de cookies, política de privacidade, criptografia em repouso |

---

## 2. Visão Geral da Stack

```
┌─────────────────────────────────────────────────────────────┐
│                        CAMADA DE BORDA                       │
│  Domínio (Registro.br) → Cloudflare (DNS/CDN/WAF) → Vercel   │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┴──────────────────────┐
        │                                             │
┌───────▼────────┐                          ┌─────────▼─────────┐
│   FRONT-END     │  API REST/GraphQL        │     BACK-END       │
│  Next.js 14+    │◄────────────────────────►│  Node.js + NestJS  │
│  React 18       │                          │  (ou Express)      │
│  TypeScript     │                          │  TypeScript        │
│  Tailwind CSS   │                          └─────────┬──────────┘
└───────┬─────────┘                                    │
        │                                    ┌──────────▼──────────┐
        │ embed player                       │     PostgreSQL       │
        │                                    │  (Supabase/Railway/  │
┌───────▼─────────┐                          │   Neon/RDS)          │
│  Vimeo Privado    │                          └──────────┬──────────┘
│  (vídeos          │                                     │
│  institucionais e  │                          ┌──────────▼──────────┐
│  depoimentos)      │                          │   Prisma ORM         │
└────────────────────┘                          └───────────────────────┘
```

---

## 3. Front-End

| Camada | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| Framework | **Next.js 14+ (App Router)** | SSR/SSG para SEO local, performance mobile, rotas de API integradas |
| Biblioteca UI | **React 18** | Componentização dos cards de serviço, carrossel de depoimentos, FAQ acordeão |
| Linguagem | **TypeScript** | Segurança de tipos em formulários e integrações críticas (WhatsApp, contato) |
| Estilo | **Tailwind CSS** + **CSS Variables** | Design tokens (Midnight Blue `#0A192F`, Gold `#D4AF37`, Off-White `#F8F9FA`, Verde WhatsApp `#25D366`) centralizados em `tailwind.config.ts` |
| Componentes | **shadcn/ui** ou **Radix UI** (headless) | Acessibilidade nativa (ARIA) para acordeão do FAQ e modais |
| Animações | **Framer Motion** | Transições suaves e sóbrias (sem exageros — respeitar o tom do luto) |
| Ícones | **Lucide Icons** (customizados em ouro) | Pilares "Por Que Nos Escolher" |
| Formulários | **React Hook Form** + **Zod** | Validação de formulário de contato/orçamento |
| Player de vídeo | **@vimeo/player** (SDK oficial) | Embed responsivo dos vídeos privados via iframe assinado |
| PWA | **next-pwa** (opcional) | Ícone na tela inicial para acesso rápido em emergência |
| Fontes | **next/font** com Montserrat/Playfair Display (títulos) + Inter/Open Sans (corpo) | Carregamento otimizado sem FOUT/CLS |

### Estrutura de páginas (App Router)
```
app/
├── page.tsx                    # Home (Hero, Serviços, Números, Depoimentos)
├── servicos/
│   ├── funeral-completo/page.tsx
│   ├── caixoes-urnas/page.tsx
│   └── cremacao/page.tsx
├── quem-somos/page.tsx
├── galeria/page.tsx             # Vitrine de urnas/caixões/salas de velório
├── guia-emergencia/page.tsx     # FAQ / "O que fazer em caso de falecimento"
├── contato/page.tsx
├── politica-privacidade/page.tsx  # LGPD
└── api/
    ├── contato/route.ts         # Recebe formulário → envia e-mail/CRM
    └── whatsapp-log/route.ts    # (opcional) log de cliques para analytics
```

---

## 4. Back-End

| Camada | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| Runtime | **Node.js 20+ LTS** | Padrão de mercado, compatível com todo o ecossistema JS/TS |
| Framework | **NestJS** (ou Express para escopo enxuto) | Estrutura modular para: Contatos, Depoimentos, FAQ, Serviços, Mídia |
| Linguagem | **TypeScript** | Consistência de tipos entre front e back |
| ORM | **Prisma** | Migrations versionadas, type-safety com PostgreSQL |
| Autenticação (painel admin) | **NextAuth.js / Auth.js** ou **Clerk** | Acesso restrito ao CMS/admin para a equipe da ABM |
| Validação | **Zod** (compartilhado com o front) | Schemas únicos de validação |
| E-mail transacional | **Resend** ou **SendGrid** | Notificação da equipe ao receber solicitação de contato |
| Integração WhatsApp | **WhatsApp Business Cloud API** (Meta) ou link direto `wa.me` com mensagem pré-configurada | Conforme especificado no relatório (botão de WhatsApp 24h) |
| Filas/Jobs (opcional) | **BullMQ + Redis** | Reenvio de notificações, follow-up automatizado |
| Logs/Observabilidade | **Pino** + **Sentry** | Rastreamento de erros em fluxo crítico de contato |

### Módulos de API sugeridos
```
src/
├── contato/          # POST /contato — recebe solicitações de emergência
├── depoimentos/       # CRUD de depoimentos (via CMS ou admin)
├── servicos/          # Conteúdo dos 3 cards de serviço
├── faq/               # Perguntas do guia de emergência
├── midia/              # Metadados de imagens/vídeos (referência ao Vimeo/CDN)
└── admin/              # Autenticação e gestão de conteúdo interno
```

---

## 5. Banco de Dados

| Item | Escolha | Justificativa |
| :--- | :--- | :--- |
| SGBD | **PostgreSQL 16** | Robustez, suporte a JSONB (flexibilidade para conteúdo), relacional para dados estruturados |
| Hospedagem | **Supabase**, **Neon** ou **Railway** (serverless/managed) | Baixo custo inicial, backups automáticos, escalável |
| ORM | **Prisma** | Migrations, seed de dados iniciais (depoimentos corrigidos, serviços) |
| Backup | Snapshot diário automático | Dados de famílias e contatos são sensíveis — exige retenção segura |

### Modelo de dados (essencial)
```prisma
model Contato {
  id          String   @id @default(cuid())
  nome        String
  telefone    String
  mensagem    String?
  canal       String   // "telefone" | "whatsapp" | "formulario"
  urgente     Boolean  @default(true)
  criadoEm    DateTime @default(now())
}

model Depoimento {
  id        String   @id @default(cuid())
  autor     String
  texto     String
  nota      Int      // 1-5 estrelas
  publicado Boolean  @default(true)
  criadoEm  DateTime @default(now())
}

model Servico {
  id          String  @id @default(cuid())
  titulo      String
  descricao   String
  bullets     String[]
  slug        String  @unique
  ordem       Int
}

model FaqItem {
  id        String  @id @default(cuid())
  pergunta  String
  resposta  String
  categoria String   // "emergencia" | "documentos" | "geral"
  ordem     Int
}

model Midia {
  id          String  @id @default(cuid())
  tipo        String  // "imagem" | "video_vimeo"
  url         String
  vimeoId     String?
  legenda     String?
  categoria   String  // "urna" | "caixao" | "velorio" | "institucional"
}
```

---

## 6. CMS Headless (Gestão de Conteúdo)

Para que a equipe da ABM edite depoimentos, FAQ e serviços sem depender de deploy:

| Opção | Quando usar |
| :--- | :--- |
| **Sanity.io** | Interface rica, ótimo para mídia e preview em tempo real (recomendado) |
| **Strapi** (self-hosted) | Se preferirem manter tudo em infraestrutura própria/PostgreSQL |
| Admin próprio (NestJS + painel React) | Caso o volume de conteúdo seja pequeno e queiram controle total |

---

## 7. Vídeos — Vimeo Privado

- **Hospedagem**: Conta **Vimeo Pro/Business** com vídeos em modo **"Privado"** (ocultos de buscas, embed restrito por domínio).
- **Embed**: iframe oficial com `dnt=1` (do-not-track) e domínio autorizado (`abmfuneraria.com.br`).
- **Uso recomendado**:
  - Vídeo institucional na Home (autoplay mudo, sem som, sóbrio).
  - Depoimentos em vídeo (opcional, com consentimento explícito da família).
  - Tour virtual das salas de velório.
- **Performance**: lazy-load do player (carrega apenas ao entrar em viewport) para não penalizar LCP mobile.
- **Fallback**: thumbnail estática de alta qualidade + botão de play, evitando carregar o SDK do Vimeo antes da interação do usuário.

---

## 8. Infraestrutura e DevOps

| Camada | Tecnologia |
| :--- | :--- |
| Hospedagem Front-end | **Vercel** (deploy automático via Git, Edge Network, ideal para Next.js) |
| Hospedagem Back-end + DB | **Railway** ou **Render** (Node.js + PostgreSQL gerenciado) |
| DNS/CDN/Segurança | **Cloudflare** (proxy, WAF, cache de assets estáticos, proteção DDoS) |
| Domínio | **Registro.br** (`www.abmfuneraria.com.br`), conforme já indicado no relatório |
| CI/CD | **GitHub Actions** (lint, build, testes antes do deploy) |
| Versionamento | **Git + GitHub** (repositório privado) |
| Variáveis de ambiente/segredos | **Vercel Env Vars** / **Doppler** (chaves do WhatsApp API, Vimeo, e-mail) |
| Monitoramento | **Sentry** (erros) + **Vercel Analytics** ou **Plausible** (privacidade-first, sem cookies invasivos — coerente com o tom do site) |

---

## 9. SEO, Acessibilidade e Compliance

- **SEO Local**: Schema.org `FuneralHome` (JSON-LD), Google Business Profile, sitemap.xml, robots.txt.
- **Meta tags dinâmicas**: `next/metadata` por página (Open Graph para compartilhamento respeitoso).
- **Acessibilidade**: contraste AA mínimo entre Midnight Blue e Off-White (já validado na paleta), navegação por teclado no FAQ acordeão, `alt` text em todas as imagens de urnas/caixões.
- **LGPD**:
  - Banner de consentimento de cookies (**vanilla-cookieconsent** ou similar).
  - Página de Política de Privacidade explicando uso dos dados de contato.
  - Criptografia em trânsito (HTTPS obrigatório via Cloudflare/Vercel) e em repouso (backup do PostgreSQL).
  - Retenção mínima de dados de contato de emergência (definir prazo com o cliente).

---

## 10. Integrações-Chave de Conversão

| Integração | Tecnologia | Função |
| :--- | :--- | :--- |
| WhatsApp 24h | `wa.me/5511985463794?text=...` ou WhatsApp Business API | Botão flutuante desktop + Bottom Action Bar mobile |
| Ligação direta | `tel:+5511985463794` | Botão "Ligar Emergência" |
| Formulário de contato | API route Next.js → Resend/SendGrid → e-mail da equipe | Fallback para quem prefere não ligar |
| Analytics de conversão | Google Analytics 4 (eventos de clique em WhatsApp/telefone) ou Plausible | Medir taxa de conversão dos CTAs |

---

## 11. Ferramentas de Desenvolvimento e Qualidade

- **ESLint + Prettier**: padronização de código.
- **Husky + lint-staged**: garantir qualidade antes de cada commit.
- **Vitest / Jest**: testes unitários dos formulários e integrações críticas.
- **Playwright**: testes E2E do fluxo de contato (simular clique em WhatsApp/telefone).
- **Storybook** (opcional): documentar os componentes visuais (cards, botões, acordeão) com a paleta ABM.
- **Script de simulação mobile** (`simulador-mobile.py`, já citado no relatório): mantido como ferramenta auxiliar de validação visual antes do deploy.

---

## 12. Fases de Execução

1. **Fase 1 — Fundação (Semana 1-2)**
   - Setup do monorepo (Next.js + NestJS via Turborepo/Nx, ou dois repositórios separados).
   - Configuração de design tokens (cores, tipografia) no Tailwind.
   - Modelagem do banco (Prisma) e seed com conteúdo corrigido do relatório.

2. **Fase 2 — Páginas Core (Semana 3-4)**
   - Home (Hero, Serviços, Números, Depoimentos).
   - Bottom Action Bar mobile + WhatsApp Floating Button desktop.
   - Integração dos vídeos Vimeo Privado.

3. **Fase 3 — Conteúdo e CMS (Semana 5)**
   - Integração do CMS headless (Sanity/Strapi) para depoimentos, FAQ e serviços.
   - Página "Quem Somos" e Guia de Emergência (FAQ acordeão).

4. **Fase 4 — Conversão e Compliance (Semana 6)**
   - Formulário de contato + notificações por e-mail.
   - LGPD (cookies, política de privacidade).
   - SEO técnico (schema.org, sitemap, metatags).

5. **Fase 5 — QA e Deploy (Semana 7)**
   - Testes E2E (Playwright), validação mobile real (simulador + dispositivos físicos).
   - Deploy em Vercel (staging → produção), vínculo do domínio via Registro.br.
   - Configuração de monitoramento (Sentry, Analytics).

6. **Fase 6 — Pós-lançamento**
   - Vínculo das imagens de alta resolução oficiais da agência.
   - Definição final do número 24h oficial.
   - Treinamento da equipe ABM no painel/CMS.

---

## 13. Resumo da Stack Final

```
Front-end:      Next.js 14 + React 18 + TypeScript + Tailwind CSS + Framer Motion
Back-end:       Node.js 20 + NestJS + TypeScript + Prisma ORM
Banco de dados: PostgreSQL 16 (Supabase/Neon/Railway)
CMS:            Sanity.io (ou Strapi)
Vídeos:         Vimeo Pro/Business (modo Privado) + @vimeo/player SDK
Autenticação:   NextAuth.js / Clerk (painel admin)
E-mail:         Resend / SendGrid
WhatsApp:       WhatsApp Business Cloud API / wa.me
Infra:          Vercel (front) + Railway/Render (back+DB) + Cloudflare (DNS/CDN/WAF)
Domínio:        Registro.br (www.abmfuneraria.com.br)
CI/CD:          GitHub Actions
Observabilidade: Sentry + Google Analytics 4 / Plausible
Testes:         Vitest + Playwright
Qualidade:      ESLint + Prettier + Husky
```
