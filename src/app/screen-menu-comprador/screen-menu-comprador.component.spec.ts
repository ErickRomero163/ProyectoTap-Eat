import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMenuCompradorComponent } from './screen-menu-comprador.component';

describe('ScreenMenuCompradorComponent', () => {
  let component: ScreenMenuCompradorComponent;
  let fixture: ComponentFixture<ScreenMenuCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenMenuCompradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenMenuCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
