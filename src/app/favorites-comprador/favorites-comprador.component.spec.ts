import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCompradorComponent } from './favorites-comprador.component';

describe('FavoritesCompradorComponent', () => {
  let component: FavoritesCompradorComponent;
  let fixture: ComponentFixture<FavoritesCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesCompradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
