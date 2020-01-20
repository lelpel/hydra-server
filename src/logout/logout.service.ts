import { Injectable } from '@nestjs/common';

@Injectable()
export class LogoutService {
  async getLogoutRequest(challenge: string) {
    return await this.hydraService.getLogoutRequest(challenge);
  }

  /**
   *
   * @param challenge Logout challenge
   * @param subject
   * @returns redirect url
   */
  async acceptLogoutRequest(challenge: string): string {
    const { redirect_to } = await this.hydraService.acceptLogoutRequest(
      challenge,
    );

    return redirect_to;
  }

  async rejectLogoutRequest(challenge: string) {
    await this.hydraService.acceptLogoutRequest(challenge);
  }
}
