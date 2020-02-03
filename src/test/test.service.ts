import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  testJson(username: string) {
    return {
      test: `This is test private route`,
      username,
    };
  }
}
