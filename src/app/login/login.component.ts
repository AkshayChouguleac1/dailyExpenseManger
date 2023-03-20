import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { token } from './token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private loginService:LoginService,private router:Router) { }


  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'username': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  login(){
    var User ={
      'username':this.loginForm.get('username')?.value,
      'password':this.loginForm.get('password')?.value
    }
    console.log(User);
    this.loginService.login(User).subscribe((res:token)=>{
      localStorage.setItem('token',"Bearer "+res['token']);
      this.router.navigateByUrl("/dashboard");

    })

  }

}
