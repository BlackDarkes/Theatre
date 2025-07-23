import { Module } from '@nestjs/common';
import { PremieresService } from './premieres.service';
import { PremieresController } from './premieres.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PremieresController],
  providers: [PremieresService],
})
export class PremieresModule {}
