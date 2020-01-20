import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { HydraModule } from './hydra/hydra.module';

@Module({
  imports: [LoginModule, HydraModule],
  controllers: [AppController],
})
export class AppModule {}
