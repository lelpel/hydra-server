import { Module, HttpModule } from '@nestjs/common';
import { HydraService } from './hydra.service';

@Module({
  imports: [HttpModule],
  providers: [HydraService],
  exports: [HydraService],
})
export class HydraModule {}
