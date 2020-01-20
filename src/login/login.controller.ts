import {
  Controller,
  Get,
  Param,
  Query,
  Inject,
  Res,
  Req,
  Post,
  Body,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginCredentialsDto } from './login.credentials.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async login(
    @Query('login_challenge') challenge: string,
    @Req() req,
    @Res() res,
  ) {
    const { skip, subject } = await this.loginService.getLoginRequest(
      challenge,
    );

    if (skip) {
      return res.redirect(
        await this.loginService.acceptLoginRequest(challenge, subject),
      );
    }

    return res.render('login', {
      challenge,
    });
  }

  @Post()
  async loginWithCredentials(
    @Body() credentialsDto: LoginCredentialsDto,
    @Req() req,
    @Res() res,
  ) {
    const { email, password, challenge, remember } = credentialsDto;

    if (!(email === 'foo@bar.com' && password === 'foobar')) {
      return res.render('login', {
        challenge,

        error: 'The username / password combination is not correct',
      });
    }

    return res.redirect(
      await this.loginService.acceptLoginRequestAndRemember(
        challenge,
        `foo@bar.com`,
        Boolean(remember),
      ),
    );
  }
}
