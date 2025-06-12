import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompradorComponent } from './profile-comprador.component';

describe('PersonalInformationComponent', () => {
  let component: ProfileCompradorComponent;
  let fixture: ComponentFixture<ProfileCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCompradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
