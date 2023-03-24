import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   countdown:any;
   otp="";
   isCountDownOver=false;
   Counter_of_attempts=0;
   No_of_attempts="";
  constructor(private otpReciverService:OtpRecieverService ,private activatedroute:ActivatedRoute,private router:Router) { 
    this.email = this.activatedroute.snapshot.paramMap.get("id");
    
  }

  ngOnInit(): void {
    this.otp="";
    this.isCountDownOver=false;
    if(this.Counter_of_attempts==0){
      this.timer(2);
    }else if(this.Counter_of_attempts==1){
      this.timer(3);
    }else if(this.Counter_of_attempts==2){
      this.timer(5)
    }else if(this.Counter_of_attempts==3){
      this.timer(20);
    }
     if(this.Counter_of_attempts<=3){
      this.Counter_of_attempts+=1;
      this.otpReciverService.forgetPassword(this.email).subscribe((res)=>{
       })
     }else{
      alert("Sorry you have reached the maximum limit");
     }
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
        this.router.navigate(['/ResetPassword',this.email,this.otp]);
      }else{
        alert("wrong otp");
      }
    })
    
  }

  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.countdown = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        this.isCountDownOver=true;
        clearInterval(timer);
      }
    }, 1000);
  }

  resendOtp(){
      this.ngOnInit();
  }

}
