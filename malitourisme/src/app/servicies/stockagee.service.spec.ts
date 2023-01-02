import { TestBed } from '@angular/core/testing';

import { StockageeService } from './stockagee.service';

describe('StockageeService', () => {
  let service: StockageeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockageeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
