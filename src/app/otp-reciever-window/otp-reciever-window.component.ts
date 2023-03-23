import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OtpRecieverService } from './otp-reciever.service';

@Component({
  selector: 'app-otp-reciever-window',
  templateUrl: './otp-reciever-window.component.html',
  styleUrls: ['./otp-reciever-window.component.css']
})
export class OtpRecieverWindowComponent implements OnInit {
   email!:any;
   first!:number;
   second!:number;
   third!:number;
   fourth!:number;
   fifth!:number;
   sixth!:number;

   otp="";
  constructor(private otpReciverService:OtpRecieverService ,private activatedroute:ActivatedRoute) { 
    this.email = this.activatedroute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.otpReciverService.forgetPassword(this.email).subscribe((res)=>{
      alert("otp sent")
     })
  }

  submitOtp(){
    this.otp+=this.first;
    this.otp+=this.second;
    this.otp+=this.third;
    this.otp+=this.fourth;
    this.otp+=this.fifth;
    this.otp+=this.sixth;
    this.otpReciverService.validateOtp(this.otp).subscribe((res:any) => {
      console.log(res.status)
      if(res.status==200){
        alert("correct otp");
      }else{
        alert("wrong otp");
      }
    })
    
  }

}
