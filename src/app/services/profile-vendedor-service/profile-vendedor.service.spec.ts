import { TestBed } from '@angular/core/testing';

import { ProfileVendedorService } from './profile-vendedor.service';

describe('ProfileVendedorService', () => {
  let service: ProfileVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
