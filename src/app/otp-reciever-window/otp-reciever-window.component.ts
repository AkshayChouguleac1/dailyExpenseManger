import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtpRecieverService } from './otp-reciever.service';

@Component({
  selector: 'app-otp-reciever-window',
  templateUrl: './otp-reciever-window.component.html',
  styleUrls: ['./otp-reciever-window.component.css']
})
export class OtpRecieverWindowComponent implements OnInit {
   first!:number;
   second!:number;
   third!:number;
   fourth!:number;
   fifth!:number;
   sixth!:number;

   otp="";
  constructor(private otpReciverService:OtpRecieverService) { }

  ngOnInit(): void {
  }

  submitOtp(){
    this.otp+=this.first;
    this.otp+=this.second;
    this.otp+=this.third;
    this.otp+=this.fourth;
    this.otp+=this.fifth;
    this.otp+=this.sixth;
    this.otpReciverService.validateOtp(this.otp).subscribe((res: HttpResponse<any>) => {
      console.log(res.headers.get('message'));
    })
    
  }

}
