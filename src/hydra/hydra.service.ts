import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class HydraService {
  constructor(private readonly httpService: HttpService) {}

  public async getLoginRequest(challenge) {
    return this.get('login', challenge);
  }

  // Accepts a login request.
  public async acceptLoginRequest(challenge, body) {
    return put('login', 'accept', challenge, body);
  }
  // Rejects a login request.
  public async rejectLoginRequest(challenge, body) {
    return put('login', 'reject', challenge, body);
  }
  // Fetches information on a consent request.
  public async getConsentRequest(challenge) {
    return get('consent', challenge);
  }
  // Accepts a consent request.
  public async acceptConsentRequest(challenge, body) {
    return put('consent', 'accept', challenge, body);
  }
  // Rejects a consent request.
  public async rejectConsentRequest(challenge, body) {
    return put('consent', 'reject', challenge, body);
  }
  // Fetches information on a logout request.
  public async getLogoutRequest(challenge) {
    return get('logout', challenge);
  }
  // Accepts a logout request.
  public async acceptLogoutRequest(challenge) {
    return put('logout', 'accept', challenge, {});
  }
  // Reject a logout request.
  public async rejectLogoutRequest(challenge) {
    return put('logout', 'reject', challenge, {});
  }

  private async get(flow: string, challenge: string) {
    try {
      return await this.httpService.get(
        `/oauth2/auth/requests/${flow}?${flow}_challenge=${challenge}`,
      );
    } catch (error) {
      console.log(error);
    }
  }

  private async put(flow, action, challenge, body) {
    try {
      return await this.httpService.put(
        `/oauth2/auth/requests/${flow}/${action}?${flow}_challenge=${challenge}`,
        body,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
