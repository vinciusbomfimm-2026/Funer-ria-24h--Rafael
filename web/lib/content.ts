export type Servico = {
  id: string;
  titulo: string;
  descricao: string;
  ctaLabel: string;
  whatsappMensagem: string;
  slug: string;
  ordem: number;
};

export type Depoimento = {
  id: string;
  autor: string;
  texto: string;
  nota: number;
  ordem: number;
};

export type FaqItem = {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: "emergencia" | "documentos" | "geral";
  ordem: number;
};

export const SERVICOS_FALLBACK: Servico[] = [
  {
    id: "funeral-completo",
    slug: "funeral-completo",
    titulo: "Serviço de Funeral Completo",
    descricao:
      "Organização integral da cerimônia. Tratamos da documentação, higienização, ornamentação floral e reserva da sala de velório.",
    ctaLabel: "Consultar Opções e Valores",
    whatsappMensagem: "Olá, gostaria de consultar as opções e valores do Funeral Completo.",
    ordem: 1,
  },
  {
    id: "cremacao",
    slug: "cremacao",
    titulo: "Cremação",
    descricao:
      "Processo conduzido com respeito e transparência. Encarregamo-nos das licenças, transporte seguro, agendamento e entrega das cinzas à família.",
    ctaLabel: "Falar sobre Cremação",
    whatsappMensagem: "Olá, gostaria de falar sobre o serviço de Cremação.",
    ordem: 2,
  },
  {
    id: "trasladacao",
    slug: "trasladacao-nacional-internacional",
    titulo: "Trasladação Nacional e Internacional",
    descricao:
      "Transporte funerário seguro. Assumimos a responsabilidade por todos os trâmites legais, alfandegários e logísticos para o retorno ao lar.",
    ctaLabel: "Solicitar Assistência Imediata",
    whatsappMensagem:
      "Olá, preciso de assistência imediata para uma trasladação nacional ou internacional.",
    ordem: 3,
  },
  {
    id: "urnas-coroas",
    slug: "urnas-coroas-ornamentacao",
    titulo: "Urnas, Coroas e Ornamentação",
    descricao:
      "Vasta gama de opções, desde as mais simples às mais exclusivas. Coroas e arranjos de flores naturais para uma bela homenagem.",
    ctaLabel: "Ver Catálogo de Homenagens",
    whatsappMensagem: "Olá, gostaria de ver o catálogo de urnas, coroas e ornamentação.",
    ordem: 4,
  },
];

export const DEPOIMENTOS_FALLBACK: Depoimento[] = [
  {
    id: "nicole-xavier",
    autor: "Nicole Xavier",
    texto:
      "Agentes funerários foram incríveis no atendimento. Muito atenciosos, prestativos e rápidos, mesmo em um momento de urgência.",
    nota: 5,
    ordem: 1,
  },
  {
    id: "eliane-barbosa-alves",
    autor: "Eliane Barbosa Alves",
    texto:
      "Profundo respeito e empatia. Cada detalhe foi conduzido proporcionando conforto e dignidade à despedida de nosso ente querido.",
    nota: 5,
    ordem: 2,
  },
  {
    id: "rebeca-alves",
    autor: "Rebeca Alves",
    texto:
      "Sem vocês esse processo seria muito mais difícil. Não consigo expressar minha gratidão por todo o apoio emocional.",
    nota: 5,
    ordem: 3,
  },
];

export const FAQ_FALLBACK: FaqItem[] = [
  {
    id: "1",
    pergunta: "O que devo fazer primeiro após o falecimento de um familiar?",
    resposta:
      "O primeiro passo é entrar em contacto connosco através do nosso Plantão 24h. Basta ligar ou enviar uma mensagem, e a nossa equipa desloca-se até si (hospital, residência, IML) para assumir o controlo da situação.",
    categoria: "emergencia",
    ordem: 1,
  },
  {
    id: "2",
    pergunta: "A agência trata de todos os documentos e burocracia?",
    resposta:
      'Sim, garantimos um serviço de "Burocracia Zero". A nossa equipa encarrega-se de obter certidões, licenças, agendamentos e pagamento de taxas.',
    categoria: "documentos",
    ordem: 2,
  },
  {
    id: "3",
    pergunta: "Estão disponíveis durante a noite e aos fins de semana?",
    resposta:
      "Sim. O nosso serviço de assistência funciona 24 horas por dia, 7 dias por semana, incluindo domingos e feriados.",
    categoria: "emergencia",
    ordem: 3,
  },
  {
    id: "4",
    pergunta: "Realizam serviços de cremação e trasladação?",
    resposta:
      "Sim, organizamos cerimónias completas para sepultamento e cremação, e somos especialistas em trasladações nacionais e internacionais.",
    categoria: "geral",
    ordem: 4,
  },
  {
    id: "5",
    pergunta: "Como funcionam os orçamentos? Há custos ocultos?",
    resposta:
      "Prezamos pela transparência. Apresentamos um orçamento claro e detalhado desde o início, sem taxas ocultas. Consulte-nos rapidamente via WhatsApp.",
    categoria: "geral",
    ordem: 5,
  },
];

export const PASSOS = [
  {
    numero: 1,
    icone: "phone" as const,
    titulo: "1. Fale com nosso Plantão",
    texto:
      "Clique no WhatsApp ou ligue. Atendimento imediato 24h. Um agente especializado vai acolher sua solicitação na mesma hora.",
  },
  {
    numero: 2,
    icone: "car" as const,
    titulo: "2. Nós vamos até você",
    texto:
      "Não precisa se deslocar. Nossa equipe vai rapidamente até o local (hospital, residência, IML) para prestar o primeiro suporte presencial.",
  },
  {
    numero: 3,
    icone: "document" as const,
    titulo: "3. Cuidamos da Documentação",
    texto:
      "Assumimos todas as tratativas difíceis: certidões, guias, liberações e taxas de cemitério (Burocracia Zero).",
  },
  {
    numero: 4,
    icone: "arch" as const,
    titulo: "4. Cerimônia Completa",
    texto:
      "Preparamos tudo conforme o desejo da família (higienização, velório, sepultamento ou cremação) com máximo respeito.",
  },
];

export const PILARES = [
  {
    icone: "heart" as const,
    titulo: "Acolhimento e Empatia",
    descricao: "Suporte emocional e humano.",
  },
  {
    icone: "document" as const,
    titulo: "Transparência Absoluta",
    descricao: "Orçamentos claros, sem taxas ocultas.",
  },
  {
    icone: "clock" as const,
    titulo: "Prontidão 24 Horas",
    descricao: "Plantonistas disponíveis 24h, incluindo feriados.",
  },
];

export type Cemiterio = {
  id: string;
  nome: string;
  regiao: string;
  descricao: string;
  imagem?: string;
};

export const CEMITERIOS: Cemiterio[] = [
  {
    id: "santana",
    nome: "Cemitério Municipal de Santana",
    regiao: "Zona Norte",
    descricao: "Um dos cemitérios mais tradicionais de São Paulo, com estrutura completa para cerimônias.",
    imagem: "/cemiterios/santana.webp",
  },
  {
    id: "sao-pedro",
    nome: "Cemitério São Pedro",
    regiao: "Vila Alpina",
    descricao: "Espaço acolhedor e de fácil acesso na zona leste, com atendimento próximo às famílias.",
    imagem: "/cemiterios/sao-pedro.webp",
  },
  {
    id: "tremembe",
    nome: "Cemitério do Tremembé",
    regiao: "Zona Norte",
    descricao: "Amplas alamedas arborizadas, um ambiente sereno para a despedida.",
    imagem: "/cemiterios/tremembe.webp",
  },
  {
    id: "sao-luiz",
    nome: "Cemitério e Velório São Luiz",
    regiao: "Zona Sul",
    descricao: "Estrutura de velório e sepultamento integrada, com fácil acesso para as famílias.",
    imagem: "/cemiterios/sao-luiz.webp",
  },
  {
    id: "parelheiros",
    nome: "Cemitério de Parelheiros",
    regiao: "Zona Sul",
    descricao: "Portal histórico em meio à natureza, em uma das regiões mais verdes da cidade.",
    imagem: "/cemiterios/parelheiros.webp",
  },
  {
    id: "sao-paulo",
    nome: "Cemitério São Paulo",
    regiao: "Zona Oeste",
    descricao: "Arquitetura clássica e tradição centenária, um marco da cidade de São Paulo.",
    imagem: "/cemiterios/sao-paulo.webp",
  },
  {
    id: "vila-nova-cachoeirinha",
    nome: "Cemitério Vila Nova Cachoeirinha",
    regiao: "Zona Norte",
    descricao: "Jardins floridos e ambiente tranquilo, pensado para o conforto das famílias.",
    imagem: "/cemiterios/vila-nova-cachoeirinha.webp",
  },
  {
    id: "santo-amaro",
    nome: "Cemitério Santo Amaro",
    regiao: "Zona Sul",
    descricao: "Localizado na zona sul, com estrutura completa para sepultamento e cerimônias religiosas.",
    imagem: "/cemiterios/santo-amaro.webp",
  },
  {
    id: "jardim-do-pessego",
    nome: "Cemitério Jardim do Pêssego",
    regiao: "Zona Leste",
    descricao: "Atendimento próximo às famílias da zona leste, com fácil acesso e boa infraestrutura.",
    imagem: "/cemiterios/jardim-do-pessego.webp",
  },
  {
    id: "gethsemani-anhanguera",
    nome: "Cemitério Gethsêmani Anhanguera",
    regiao: "Zona Oeste",
    descricao: "Amplo espaço na região de Perus, ideal para cerimônias tranquilas e reservadas.",
    imagem: "/cemiterios/gethsemani-anhanguera.webp",
  },
  {
    id: "freguesia-do-o",
    nome: "Cemitério Freguesia do Ó",
    regiao: "Zona Norte",
    descricao: "Cemitério tradicional da zona norte, com atendimento acolhedor para as famílias.",
    imagem: "/cemiterios/freguesia-do-o.webp",
  },
  {
    id: "dom-bosco",
    nome: "Cemitério Dom Bosco",
    regiao: "Zona Oeste",
    descricao: "Estrutura completa para velório e sepultamento, com fácil acesso na zona oeste.",
    imagem: "/cemiterios/dom-bosco.webp",
  },
  {
    id: "cantareira",
    nome: "Cemitério Cantareira",
    regiao: "Zona Norte",
    descricao: "Ambiente arborizado aos pés da Serra da Cantareira, propício para a despedida.",
    imagem: "/cemiterios/cantareira.webp",
  },
  {
    id: "lapa",
    nome: "Cemitério Lapa",
    regiao: "Zona Oeste",
    descricao: "Cemitério histórico da zona oeste, com tradição e boa localização.",
    imagem: "/cemiterios/lapa.webp",
  },
  {
    id: "ordem-terceira-do-carmo",
    nome: "Cemitério da Ordem Terceira do Carmo",
    regiao: "Centro-SP",
    descricao: "Espaço tradicional de valor histórico, com atendimento cuidadoso às famílias.",
    imagem: "/cemiterios/ordem-terceira-do-carmo.webp",
  },
  {
    id: "santissimo-sacramento",
    nome: "Cemitério do Santíssimo Sacramento",
    regiao: "Grande São Paulo",
    descricao: "Atendimento na Grande São Paulo, com toda a documentação e logística resolvidas.",
    imagem: "/cemiterios/santissimo-sacramento.webp",
  },
  {
    id: "araca",
    nome: "Cemitério do Araçá",
    regiao: "Grande São Paulo",
    descricao: "Um dos cemitérios mais tradicionais da cidade, com arquitetura histórica na Grande São Paulo.",
    imagem: "/cemiterios/araca.webp",
  },
  {
    id: "lajeado",
    nome: "Cemitério do Lajeado",
    regiao: "Zona Leste",
    descricao: "Estrutura simples e acolhedora para as famílias da zona leste.",
    imagem: "/cemiterios/lajeado.webp",
  },
  {
    id: "penha",
    nome: "Cemitério da Penha",
    regiao: "Zona Leste",
    descricao: "Localização de fácil acesso no bairro da Penha, zona leste.",
    imagem: "/cemiterios/penha.webp",
  },
  {
    id: "itaquera",
    nome: "Cemitério Itaquera",
    regiao: "Zona Leste",
    descricao: "Amplo espaço na zona leste, com boa infraestrutura para cerimônias.",
    imagem: "/cemiterios/itaquera.webp",
  },
  {
    id: "saudade",
    nome: "Cemitério da Saudade",
    regiao: "Zona Leste",
    descricao: "Ambiente tranquilo e arborizado, pensado para o conforto das famílias.",
    imagem: "/cemiterios/saudade.webp",
  },
  {
    id: "campo-grande",
    nome: "Cemitério Campo Grande",
    regiao: "Zona Sul",
    descricao: "Estrutura completa para sepultamento na zona sul da cidade.",
    imagem: "/cemiterios/campo-grande.webp",
  },
  {
    id: "vila-mariana",
    nome: "Cemitério Vila Mariana",
    regiao: "Zona Sul",
    descricao: "Cemitério tradicional da zona sul, com fácil acesso e boa infraestrutura.",
    imagem: "/cemiterios/vila-mariana.webp",
  },
  {
    id: "carmo",
    nome: "Cemitério do Carmo",
    regiao: "Zona Leste",
    descricao: "Amplo espaço verde na zona leste, para uma despedida serena.",
    imagem: "/cemiterios/carmo.webp",
  },
  {
    id: "morumbi",
    nome: "Cemitério Morumbi",
    regiao: "Zona Sul",
    descricao: "Localização de fácil acesso na zona sul, próximo a hospitais e residências.",
    imagem: "/cemiterios/morumbi.webp",
  },
];

export type Crematorio = {
  id: string;
  nome: string;
  regiao: string;
  descricao: string;
  imagem: string;
};

export const CREMATORIOS: Crematorio[] = [
  {
    id: "bosque-da-paz",
    nome: "Crematório Bosque da Paz",
    regiao: "Grande São Paulo",
    descricao:
      "Estrutura ampla e reservada para cerimônias de cremação, com total conforto e privacidade para a família.",
    imagem: "/crematorios/bosque-da-paz.webp",
  },
  {
    id: "primaveras",
    nome: "Crematório Primaveras",
    regiao: "Zona Leste",
    descricao:
      "Salas de despedida modernas e acolhedoras, com atendimento cuidadoso em todas as etapas da cremação.",
    imagem: "/crematorios/primaveras.webp",
  },
  {
    id: "morumbi",
    nome: "Crematório Morumbi",
    regiao: "Zona Sul",
    descricao:
      "Localização de fácil acesso na zona sul, com infraestrutura completa para o processo de cremação.",
    imagem: "/crematorios/morumbi.webp",
  },
  {
    id: "memorial-parque-paulista",
    nome: "Crematório Memorial Parque Paulista",
    regiao: "Embu das Artes - SP",
    descricao:
      "Amplo espaço arborizado e estrutura preparada para cerimônias de cremação na Grande São Paulo.",
    imagem: "/crematorios/memorial-parque-paulista.webp",
  },
  {
    id: "sao-paulo",
    nome: "Crematório em São Paulo",
    regiao: "São Paulo Capital",
    descricao:
      "Atendimento completo para cerimônias de cremação na capital paulista, com toda a documentação resolvida.",
    imagem: "/crematorios/sao-paulo.webp",
  },
  {
    id: "vila-alpina",
    nome: "Crematório Vila Alpina",
    regiao: "Zona Leste",
    descricao:
      "Espaço tradicional na zona leste, preparado para receber famílias com respeito e agilidade.",
    imagem: "/crematorios/vila-alpina.webp",
  },
];

export type ServicoDetalhado = {
  id: string;
  titulo: string;
  descricao: string;
};

export const SERVICOS_DETALHADOS: ServicoDetalhado[] = [
  {
    id: "velorio-sepultamento",
    titulo: "Velório e Sepultamento",
    descricao:
      "Conduzimos o velório com todo o suporte necessário: preparação do corpo, sala climatizada, ornamentação e acompanhamento da família em cada etapa, nos principais cemitérios de São Paulo.",
  },
  {
    id: "cremacao-sp",
    titulo: "Cremação em São Paulo",
    descricao:
      "Realizamos cremação em crematórios parceiros na cidade de São Paulo e Grande SP. Cuidamos de toda a documentação, transporte e entrega das cinzas com respeito e agilidade.",
  },
  {
    id: "traslado-documentacao",
    titulo: "Traslado e Documentação",
    descricao:
      "Realizamos traslado funerário nacional e internacional com toda a burocracia resolvida. Nossa equipe cuida de certidões, licenças e logística para que sua família não precise se preocupar com nada.",
  },
  {
    id: "coroa-ornamentos",
    titulo: "Coroa de Flores e Ornamentos",
    descricao:
      "Disponibilizamos coroas de flores, arranjos e ornamentação para o velório e sepultamento. Diversas opções de flores naturais para homenagear quem partiu com carinho e dignidade.",
  },
  {
    id: "jazigos-sepulturas",
    titulo: "Jazigos e Sepulturas",
    descricao:
      "Assessoria completa na compra, locação e gestão de jazigos nos cemitérios parceiros de São Paulo. Atendemos todas as regiões da cidade: zona sul, norte, leste e oeste.",
  },
  {
    id: "funeraria-24h",
    titulo: "Assistência Funerária 24h",
    descricao:
      "Como assistência funerária 24 horas em São Paulo, atendemos imediatamente ao falecimento, providenciando todos os trâmites com agilidade. Ligue agora e nossa equipe entra em contato em minutos.",
  },
];
