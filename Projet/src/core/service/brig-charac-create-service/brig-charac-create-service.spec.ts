import { TestBed } from '@angular/core/testing';

import { BrigCharacCreateService } from './brig-charac-create-service';

describe('BrigCharacCreateService', () => {
  let service: BrigCharacCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrigCharacCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
