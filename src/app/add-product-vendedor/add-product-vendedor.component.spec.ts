import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductVendedorComponent } from './add-product-vendedor.component';

describe('AddProductVendedorComponent', () => {
  let component: AddProductVendedorComponent;
  let fixture: ComponentFixture<AddProductVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductVendedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
