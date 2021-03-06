import { Module, HttpModule } from '@nestjs/common';
import { HydraService } from './hydra.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: `http://hydra:4445`,
    }),
  ],
  providers: [HydraService],
  exports: [HydraService],
})
export class HydraModule {}
