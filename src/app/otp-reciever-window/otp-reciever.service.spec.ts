import { TestBed } from '@angular/core/testing';

import { OtpRecieverService } from './otp-reciever.service';

describe('OtpRecieverService', () => {
  let service: OtpRecieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpRecieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
