import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ALPN_ENABLED } from 'constants';
import { ProfileService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!:FormGroup;

  constructor(private profileService:ProfileService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.profileForm=new FormGroup({
      'first_name':new FormControl('',Validators.required),
      'last_name':new FormControl('',Validators.required),
      'email_id':new FormControl('',Validators.required),
      'phone_number':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'confirmpassword':new FormControl('',Validators.required)
    })
  }
  signupSubmit(){

    if(this.profileForm.controls['password'].value == this.profileForm.controls['confirmpassword'].value){
      console.log(this.profileForm.value)
    this.profileService.addProfile(this.profileForm.value)
    .subscribe((res:any)=>{
      if(res){
        alert("account created successfully !")
        this.router.navigateByUrl("/login");
        
        
      }else{
        alert("something went wrong2")
      }
    }
    );

    }else{
      alert("Password and confirmpassword not matching");
    }
   
    

  }

  

}
