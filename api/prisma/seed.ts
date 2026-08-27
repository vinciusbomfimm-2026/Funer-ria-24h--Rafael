import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.servico.deleteMany();
  await prisma.servico.createMany({
    data: [
      {
        slug: 'funeral-completo',
        titulo: 'Serviço de Funeral Completo',
        descricao:
          'Organização integral da cerimônia. Tratamos da documentação, higienização, ornamentação floral e reserva da sala de velório.',
        ctaLabel: 'Consultar Opções e Valores',
        whatsappMensagem:
          'Olá, gostaria de consultar as opções e valores do Funeral Completo.',
        ordem: 1,
      },
      {
        slug: 'cremacao',
        titulo: 'Cremação',
        descricao:
          'Processo conduzido com respeito e transparência. Encarregamo-nos das licenças, transporte seguro, agendamento e entrega das cinzas à família.',
        ctaLabel: 'Falar sobre Cremação',
        whatsappMensagem: 'Olá, gostaria de falar sobre o serviço de Cremação.',
        ordem: 2,
      },
      {
        slug: 'trasladacao-nacional-internacional',
        titulo: 'Trasladação Nacional e Internacional',
        descricao:
          'Transporte funerário seguro. Assumimos a responsabilidade por todos os trâmites legais, alfandegários e logísticos para o retorno ao lar.',
        ctaLabel: 'Solicitar Assistência Imediata',
        whatsappMensagem:
          'Olá, preciso de assistência imediata para uma trasladação nacional ou internacional.',
        ordem: 3,
      },
      {
        slug: 'urnas-coroas-ornamentacao',
        titulo: 'Urnas, Coroas e Ornamentação',
        descricao:
          'Vasta gama de opções, desde as mais simples às mais exclusivas. Coroas e arranjos de flores naturais para uma bela homenagem.',
        ctaLabel: 'Ver Catálogo de Homenagens',
        whatsappMensagem:
          'Olá, gostaria de ver o catálogo de urnas, coroas e ornamentação.',
        ordem: 4,
      },
    ],
  });

  await prisma.depoimento.deleteMany();
  await prisma.depoimento.createMany({
    data: [
      {
        autor: 'Nicole Xavier',
        texto:
          'Agentes funerários foram incríveis no atendimento. Muito atenciosos, prestativos e rápidos, mesmo em um momento de urgência.',
        nota: 5,
        ordem: 1,
      },
      {
        autor: 'Eliane Barbosa Alves',
        texto:
          'Profundo respeito e empatia. Cada detalhe foi conduzido proporcionando conforto e dignidade à despedida de nosso ente querido.',
        nota: 5,
        ordem: 2,
      },
      {
        autor: 'Rebeca Alves',
        texto:
          'Sem vocês esse processo seria muito mais difícil. Não consigo expressar minha gratidão por todo o apoio emocional.',
        nota: 5,
        ordem: 3,
      },
    ],
  });

  await prisma.faqItem.deleteMany();
  await prisma.faqItem.createMany({
    data: [
      {
        pergunta: 'O que devo fazer primeiro após o falecimento de um familiar?',
        resposta:
          'O primeiro passo é entrar em contacto connosco através do nosso Plantão 24h. Basta ligar ou enviar uma mensagem, e a nossa equipa desloca-se até si (hospital, residência, IML) para assumir o controlo da situação.',
        categoria: 'emergencia',
        ordem: 1,
      },
      {
        pergunta: 'A agência trata de todos os documentos e burocracia?',
        resposta:
          'Sim, garantimos um serviço de "Burocracia Zero". A nossa equipa encarrega-se de obter certidões, licenças, agendamentos e pagamento de taxas.',
        categoria: 'documentos',
        ordem: 2,
      },
      {
        pergunta: 'Estão disponíveis durante a noite e aos fins de semana?',
        resposta:
          'Sim. O nosso serviço de assistência funciona 24 horas por dia, 7 dias por semana, incluindo domingos e feriados.',
        categoria: 'emergencia',
        ordem: 3,
      },
      {
        pergunta: 'Realizam serviços de cremação e trasladação?',
        resposta:
          'Sim, organizamos cerimónias completas para sepultamento e cremação, e somos especialistas em trasladações nacionais e internacionais.',
        categoria: 'geral',
        ordem: 4,
      },
      {
        pergunta: 'Como funcionam os orçamentos? Há custos ocultos?',
        resposta:
          'Prezamos pela transparência. Apresentamos um orçamento claro e detalhado desde o início, sem taxas ocultas. Consulte-nos rapidamente via WhatsApp.',
        categoria: 'geral',
        ordem: 5,
      },
    ],
  });

  console.log('Seed concluído com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
