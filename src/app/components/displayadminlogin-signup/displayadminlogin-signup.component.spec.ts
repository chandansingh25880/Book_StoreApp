import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayadminloginSignupComponent } from './displayadminlogin-signup.component';

describe('DisplayadminloginSignupComponent', () => {
  let component: DisplayadminloginSignupComponent;
  let fixture: ComponentFixture<DisplayadminloginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayadminloginSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayadminloginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
