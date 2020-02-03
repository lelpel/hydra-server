import { Injectable } from '@nestjs/common';
import { HydraService } from 'src/hydra/hydra.service';

@Injectable()
export class AuthService {
  constructor(private readonly hydraService: HydraService) {}

  async introspectToken(token): Promise<boolean> {
    const { active, token_type } = await this.hydraService.introspectToken(
      token,
    );

    return active && token_type === 'access_token';
  }
}
