import { Inject, Injectable, Logger } from '@nestjs/common';
import { PRISMA_CLIENT } from '../prisma/prisma.module';
import type { PrismaClient } from '../../generated/prisma/client.js';
import { CreateContatoDto } from './dto/create-contato.dto';

@Injectable()
export class ContatoService {
  private readonly logger = new Logger(ContatoService.name);

  constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  async create(dto: CreateContatoDto) {
    const contato = await this.prisma.contato.create({
      data: {
        nome: dto.nome,
        telefone: dto.telefone,
        mensagem: dto.mensagem,
        canal: dto.canal ?? 'formulario',
        urgente: dto.urgente ?? true,
      },
    });

    // TODO: disparar e-mail transacional (Resend/SendGrid) para a equipe Bela Vista
    this.logger.log(`Nova solicitação de contato recebida: ${contato.id}`);

    return contato;
  }
}
