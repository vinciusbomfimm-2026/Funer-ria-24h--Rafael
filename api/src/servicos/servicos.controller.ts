import { Controller, Get, Param } from '@nestjs/common';
import { ServicosService } from './servicos.service';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Get()
  findAll() {
    return this.servicosService.findAll();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.servicosService.findBySlug(slug);
  }
}
