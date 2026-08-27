import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_CLIENT } from '../prisma/prisma.module';
import type { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class ServicosService {
  constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.servico.findMany({ orderBy: { ordem: 'asc' } });
  }

  findBySlug(slug: string) {
    return this.prisma.servico.findUnique({ where: { slug } });
  }
}
