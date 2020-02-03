import { Strategy } from 'passport-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class OauthStrategy extends PassportStrategy(Strategy, 'hydra') {
  constructor(private readonly authService: AuthService) {
    super({
      authorizationURL: process.env.OAUTH2_AUTH_URL,
      tokenURL: process.env.OAUTH2_TOKEN_URL,
      clientID: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.OAUTH2_REDIRECT_URL,
      passReqToCallback: true,
      scope: ['offline', 'openid', 'articles.read'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    const isValid = await this.authService.introspectToken(accessToken);

    if (isValid) {
      done(null, { accessToken, profile });
    } else {
      done(`Error`, false);
    }
    // try {
    //   done(null, );
    // } catch (err) {
    //   done(err, false);
    // }
  }
}
