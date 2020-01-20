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
import { ConsentService } from './consent.service';
import { ConsentConfirmDto } from './consent.confirm.dto';

@Controller('consent')
export class ConsentController {
  constructor(private readonly service: ConsentService) {}

  @Get()
  async consent(
    @Query('login_challenge') challenge: string,
    @Req() req,
    @Res() res,
  ) {
    const response = await this.service.getConsentRequest(challenge);

    if (response.skip) {
      return res.redirect(
        await this.service.acceptConsentRequest(challenge, {
          // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes
          // are requested accidentally.
          grant_scope: response.requested_scope,

          // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.
          grant_access_token_audience: response.requested_access_token_audience,

          // The session allows us to set session data for id and access tokens
          session: {
            // This data will be available when introspecting the token. Try to avoid sensitive information here,
            // unless you limit who can introspect tokens.
            // access_token: { foo: 'bar' },
            // This data will be available in the ID token.
            // id_token: { baz: 'bar' },
          },
        }),
      );
    }

    return res.render('consent', {
      csrfToken: req.csrfToken(),
      challenge,
      requested_scope: response.requested_scope,
      user: response.subject,
      client: response.client,
    });
  }

  @Post()
  async confirmConsent(
    @Body() confirmDto: ConsentConfirmDto,
    @Req() req,
    @Res() res,
  ) {
    // TODO:
    const { submit, challenge, remember } = confirmDto;
    let { grant_scope } = confirmDto;

    if (submit === 'Deny access') {
      return res.redirect(
        await this.service.rejectConsentRequest(
          challenge,
          'access_denied',
          'The resource owner denied the request',
        ),
      );
    }

    if (!Array.isArray(grant_scope)) {
      grant_scope = [grant_scope];
    }

    const response = await this.service.getConsentRequest(challenge);

    return res.redirect(
      await this.service.acceptConsentRequest(challenge, {
        // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes
        // are requested accidentally.
        grant_scope: grant_scope,

        // The session allows us to set session data for id and access tokens
        session: {},

        // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.
        grant_access_token_audience: response.requested_access_token_audience,

        // This tells hydra to remember this consent request and allow the same client to request the same
        // scopes from the same user, without showing the UI, in the future.
        remember: Boolean(remember),

        // When this "remember" sesion expires, in seconds. Set this to 0 so it will never expire.
        remember_for: 3600,
      }),
    );
  }
}
