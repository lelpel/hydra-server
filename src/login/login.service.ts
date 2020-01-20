import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  async getLoginRequest(challenge: string) {}

  /**
   *
   * @param challenge Login challenge
   * @param subject
   * @returns redirect url
   */
  async acceptLoginRequest(challenge: string, subject): string {}
}
