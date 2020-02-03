import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  dummy() {
    return this.testService.testJson('TEST');
  }
}
