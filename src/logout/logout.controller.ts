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
import { LogoutService } from './logout.service';

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}

  @Get()
  async logout(
    @Query('logout_challenge') challenge: string,
    @Req() req,
    @Res() res,
  ) {
    const { skip, subject } = await this.logoutService.getLogoutRequest(
      challenge,
    );

    return res.render('logout', {
      csrfToken: req.csrfToken(),
      challenge,
    });
  }

  @Post()
  async confirmLogout(
    @Body('challenge') challenge: string,
    @Body('submit') submit,
    @Req() req,
    @Res() res,
  ) {
    if (submit === 'No') {
      return res.redirect('https://hive.id');
    }

    return res.redirect(
      await this.logoutService.acceptLogoutRequest(challenge),
    );
  }
}
