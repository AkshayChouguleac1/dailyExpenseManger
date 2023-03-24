import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  base_url="http://localhost:8080";

  public getHeaders() {
    const httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),observe:'response' as 'response'}
    return httpOptions;
  }

  constructor(private http:HttpClient) { }

  

  public resetExixtingPassword(password:string,email:any,otpString:any) {
    var pw={
      'password':password,
      'email':email,
      'otp': otpString
    }
    return  this.http.put(this.base_url + '/profiles/ChangeExistingPassword',pw,this.getHeaders());
    
  }
}
