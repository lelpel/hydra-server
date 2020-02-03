import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './login/login.module';
import { HydraModule } from './hydra/hydra.module';
import { LogoutModule } from './logout/logout.module';
import { ConsentModule } from './consent/consent.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LoginModule, HydraModule, LogoutModule, ConsentModule, TestModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
