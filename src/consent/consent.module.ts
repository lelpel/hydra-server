import { Module } from '@nestjs/common';
import { ConsentController } from './consent.controller';
import { ConsentService } from './consent.service';
import { HydraModule } from 'src/hydra/hydra.module';

@Module({
  imports: [HydraModule],
  controllers: [ConsentController],
  providers: [ConsentService],
})
export class ConsentModule {}
