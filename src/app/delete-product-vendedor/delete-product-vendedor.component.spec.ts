import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductVendedorComponent } from './delete-product-vendedor.component';

describe('DeleteProductVendedorComponent', () => {
  let component: DeleteProductVendedorComponent;
  let fixture: ComponentFixture<DeleteProductVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductVendedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
