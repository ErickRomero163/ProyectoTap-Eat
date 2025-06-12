import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompradorComponent } from './layout-comprador.component';

describe('LayoutCompradorComponent', () => {
  let component: LayoutCompradorComponent;
  let fixture: ComponentFixture<LayoutCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCompradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
