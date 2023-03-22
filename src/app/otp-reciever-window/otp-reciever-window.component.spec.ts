import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpRecieverWindowComponent } from './otp-reciever-window.component';

describe('OtpRecieverWindowComponent', () => {
  let component: OtpRecieverWindowComponent;
  let fixture: ComponentFixture<OtpRecieverWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpRecieverWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpRecieverWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
