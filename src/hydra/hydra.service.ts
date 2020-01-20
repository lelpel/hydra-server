import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class HydraService {
  constructor(private readonly httpService: HttpService) {}
}
