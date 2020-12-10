import { TestBed } from '@angular/core/testing';

import { CuentaBancariaServiceService } from './cuenta-bancaria-service.service';

describe('CuentaBancariaServiceService', () => {
  let service: CuentaBancariaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaBancariaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
