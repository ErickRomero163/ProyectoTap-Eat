import { TestBed } from '@angular/core/testing';

import { DashboardVendedorService } from './dashboard-vendedor.service';

describe('DashboardVendedorService', () => {
  let service: DashboardVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
