import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expense } from '../dashboard/expense';
import { otp } from './otp';

@Injectable({
  providedIn: 'root'
})
export class OtpRecieverService {
  base_url="http://localhost:8080";

  public getHeaders() {
    const httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),observe:'response' as 'response'}
    return httpOptions;
  }
  
  
  constructor(private http:HttpClient) { }
  
  public forgetPassword(email:string) {
    return  this.http.post(this.base_url + '/profiles/ChangePassword/'+email,this.getHeaders());
    
  }
  
  public validateOtp(otpString:any) {
    var otpJson = {
      otp:otpString
    }
    return this.http.post<any>(this.base_url+"/profiles/validateOtp",otpJson,this.getHeaders());
    
  }
}
