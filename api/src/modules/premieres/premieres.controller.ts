import { Controller } from '@nestjs/common';
import { PremieresService } from './premieres.service';

@Controller('premieres')
export class PremieresController {
  constructor(private readonly premieresService: PremieresService) {}
}
