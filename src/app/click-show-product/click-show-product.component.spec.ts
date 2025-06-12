import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickShowProductComponent } from './click-show-product.component';

describe('ClickShowProductComponent', () => {
  let component: ClickShowProductComponent;
  let fixture: ComponentFixture<ClickShowProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickShowProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
