import { Module } from '@nestjs/common';
import { LogoutController } from './logout.controller';
import { LogoutService } from './logout.service';
import { HydraModule } from 'src/hydra/hydra.module';

@Module({
  imports: [HydraModule],
  controllers: [LogoutController],
  providers: [LogoutService],
})
export class LogoutModule {}
