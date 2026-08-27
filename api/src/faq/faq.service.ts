import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_CLIENT } from '../prisma/prisma.module';
import type { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class FaqService {
  constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.faqItem.findMany({ orderBy: { ordem: 'asc' } });
  }
}
