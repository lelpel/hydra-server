import { Injectable } from '@nestjs/common';
import { HydraService } from 'src/hydra/hydra.service';

@Injectable()
export class LogoutService {
  constructor(private readonly hydraService: HydraService) {}

  async getLogoutRequest(challenge: string) {
    return await this.hydraService.getLogoutRequest(challenge);
  }

  /**
   *
   * @param challenge Logout challenge
   * @param subject
   * @returns redirect url
   */
  async acceptLogoutRequest(challenge: string): Promise<string> {
    const { redirect_to } = await this.hydraService.acceptLogoutRequest(
      challenge,
    );

    return redirect_to;
  }

  async rejectLogoutRequest(challenge: string) {
    await this.hydraService.acceptLogoutRequest(challenge);
  }
}
