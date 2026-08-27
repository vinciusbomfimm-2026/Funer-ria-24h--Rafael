import { Controller, Get } from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';

@Controller('depoimentos')
export class DepoimentosController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  @Get()
  findAll() {
    return this.depoimentosService.findAll();
  }
}
