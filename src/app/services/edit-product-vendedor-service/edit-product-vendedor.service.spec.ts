import { TestBed } from '@angular/core/testing';

import { EditProductVendedorService } from './edit-product-vendedor.service';

describe('EditProductVendedorService', () => {
  let service: EditProductVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProductVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
