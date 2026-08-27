import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ContatoModule } from './contato/contato.module';
import { ServicosModule } from './servicos/servicos.module';
import { DepoimentosModule } from './depoimentos/depoimentos.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ContatoModule,
    ServicosModule,
    DepoimentosModule,
    FaqModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
