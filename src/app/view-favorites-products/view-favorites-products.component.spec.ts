import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavoritesProductsComponent } from './view-favorites-products.component';

describe('ViewFavoritesProductsComponent', () => {
  let component: ViewFavoritesProductsComponent;
  let fixture: ComponentFixture<ViewFavoritesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFavoritesProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFavoritesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
