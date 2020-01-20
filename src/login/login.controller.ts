import { Controller, Get, Param, Query, Inject } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async login(@Query('login_challenge') challenge: string) {}
}
