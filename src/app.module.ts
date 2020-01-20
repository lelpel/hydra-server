import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { HydraModule } from './hydra/hydra.module';
import { LogoutModule } from './logout/logout.module';

@Module({
  imports: [LoginModule, HydraModule, LogoutModule],
  controllers: [AppController],
})
export class AppModule {}
