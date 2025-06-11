import { TestBed } from '@angular/core/testing';

import { DeleteProductVendedorService } from './delete-product-vendedor.service';

describe('DeleteProductVendedorService', () => {
  let service: DeleteProductVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
