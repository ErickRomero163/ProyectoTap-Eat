import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductVendedorComponent } from './edit-product-vendedor.component';

describe('EditProductVendedorComponent', () => {
  let component: EditProductVendedorComponent;
  let fixture: ComponentFixture<EditProductVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductVendedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
