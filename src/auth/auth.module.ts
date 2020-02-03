import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HydraModule } from 'src/hydra/hydra.module';

@Module({
  imports: [HydraModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
