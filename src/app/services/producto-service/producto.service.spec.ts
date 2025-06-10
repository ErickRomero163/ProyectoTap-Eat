import { TestBed } from '@angular/core/testing';

import { AddProductVendedorService } from './producto.service';

describe('AddProductVendedorService', () => {
  let service: AddProductVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
