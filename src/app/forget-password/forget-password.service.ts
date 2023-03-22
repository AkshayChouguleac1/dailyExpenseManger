import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  base_url="http://localhost:8080";

  public getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  constructor(private http:HttpClient) { }

  

  public forgetPassword(email:string) {
    console.log(email+ "Helllllllllllllllllllo")
    return  this.http.post(this.base_url + '/profiles/ChangePassword/'+email,this.getHeaders());
    
  }
}
