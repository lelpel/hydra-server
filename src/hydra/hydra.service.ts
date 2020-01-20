import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class HydraService {
  constructor(private readonly httpService: HttpService) {}

  // Fetches information on a login request.
  public async getLoginRequest(challenge) {
    return await this.get('login', challenge);
  }
  // Accepts a login request.
  public async acceptLoginRequest(challenge, body) {
    return await this.put('login', 'accept', challenge, body);
  }
  // Rejects a login request.
  public async rejectLoginRequest(challenge, body) {
    return await this.put('login', 'reject', challenge, body);
  }
  // Fetches information on a consent request.
  public async getConsentRequest(challenge) {
    return await this.get('consent', challenge);
  }
  // Accepts a consent request.
  public async acceptConsentRequest(challenge, body) {
    return await this.put('consent', 'accept', challenge, body);
  }
  // Rejects a consent request.
  public async rejectConsentRequest(challenge, body) {
    return await this.put('consent', 'reject', challenge, body);
  }
  // Fetches information on a logout request.
  public async getLogoutRequest(challenge) {
    return await this.get('logout', challenge);
  }
  // Accepts a logout request.
  public async acceptLogoutRequest(challenge) {
    return await this.put('logout', 'accept', challenge, {});
  }
  // Reject a logout request.
  public async rejectLogoutRequest(challenge) {
    return await this.put('logout', 'reject', challenge, {});
  }

  private async get(flow: string, challenge: string) {
    try {
      const { data } = await this.httpService
        .get(`/oauth2/auth/requests/${flow}?${flow}_challenge=${challenge}`)
        .toPromise();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  private async put(flow, action, challenge, body) {
    try {
      const { data } = await this.httpService
        .put(
          `/oauth2/auth/requests/${flow}/${action}?${flow}_challenge=${challenge}`,
          body,
        )
        .toPromise();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
