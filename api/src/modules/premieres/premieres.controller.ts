import { Controller, Get, Param } from '@nestjs/common';
import { PremieresService } from './premieres.service';

@Controller('premieres')
export class PremieresController {
  constructor(private readonly premieresService: PremieresService) {}

  @Get("")
  async getAllPremieres() {
    return this.premieresService.getAllPremieres();
  }

  @Get(":id")
  async getPremierById(@Param("id") id: string) {
    return this.premieresService.getPremierById(id);
  }
}
