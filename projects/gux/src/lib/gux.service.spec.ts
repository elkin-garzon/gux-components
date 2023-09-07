import { TestBed } from '@angular/core/testing';

import { GuxService } from './gux.service';

describe('GuxService', () => {
  let service: GuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
