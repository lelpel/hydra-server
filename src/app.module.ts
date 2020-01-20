import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './login/login.module';
import { HydraModule } from './hydra/hydra.module';
import { LogoutModule } from './logout/logout.module';
import { ConsentModule } from './consent/consent.module';

@Module({
  imports: [LoginModule, HydraModule, LogoutModule, ConsentModule],
  controllers: [AppController],
})
export class AppModule {}
