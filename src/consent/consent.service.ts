import { Injectable } from '@nestjs/common';
import { HydraService } from 'src/hydra/hydra.service';

@Injectable()
export class ConsentService {
  constructor(private readonly hydraService: HydraService) {}

  async getConsentRequest(challenge: string) {
    return await this.hydraService.getConsentRequest(challenge);
  }

  async rejectConsentRequest(challenge, error, errorDescription) {
    const { redirect_to } = await this.hydraService.rejectConsentRequest(
      challenge,
      {
        error,
        error_description: errorDescription,
      },
    );

    return redirect_to;
  }

  async acceptConsentRequest(challenge: string, body: object) {
    const { redirect_to } = await this.hydraService.acceptConsentRequest(
      challenge,
      body,
    );

    return redirect_to;
  }
}
