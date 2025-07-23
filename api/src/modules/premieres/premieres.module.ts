import { Module } from '@nestjs/common';
import { PremieresService } from './premieres.service';
import { PremieresController } from './premieres.controller';

@Module({
  controllers: [PremieresController],
  providers: [PremieresService],
})
export class PremieresModule {}
