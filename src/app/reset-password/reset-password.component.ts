import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetPasswordService } from '../forget-password/forget-password.service';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  ChangePasswordForm!:FormGroup;
  email:any;
  OTP :any;
  constructor(private resetPasswordService:ResetPasswordService,private router:Router,private activatedroute:ActivatedRoute) { 
    this.email=this.activatedroute.snapshot.paramMap.get("id");
    this.OTP=this.activatedroute.snapshot.paramMap.get("otp");
  }

  ngOnInit(): void {
    this.ChangePasswordForm=new FormGroup({
      'password':new FormControl(null,Validators.required),
      'confirm_password':new FormControl(null,Validators.required)
    })

    console.log("here are your values bro ->"+this.email+this.OTP);
  }

  sendReqToPasswordChange(){
    this.resetPasswordService.resetExixtingPassword(this.ChangePasswordForm.controls['password'].value,this.email,this.OTP).subscribe((res)=>{
      if(res.status==200){
        alert("Password Changed Successfully !");
        this.router.navigate(['/login']);
      }else{
        alert("wrong otp");
      }
    })
  }
}
