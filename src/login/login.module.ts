import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { HydraModule } from 'src/hydra/hydra.module';

@Module({
  imports: [HydraModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
