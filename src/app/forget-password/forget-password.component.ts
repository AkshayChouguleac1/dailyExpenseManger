import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  ForgetPwform!:FormGroup;
  constructor(private forgetPasswordService:ForgetPasswordService,private router:Router) { }

  ngOnInit(): void {
    this.ForgetPwform=new FormGroup({
      'email':new FormControl(null,Validators.required)
    })
  }

  sendReqToPasswordChange(){
      this.forgetPasswordService.forgetPassword(this.ForgetPwform.controls['email'].value).subscribe((res)=>{
        this.router.navigateByUrl("/OTPSender");
      })
  }

}
