import { Test, TestingModule } from '@nestjs/testing';
import { HydraService } from './hydra.service';

describe('HydraService', () => {
  let service: HydraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HydraService],
    }).compile();

    service = module.get<HydraService>(HydraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
