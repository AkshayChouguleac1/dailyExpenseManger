import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { token } from './token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url="http://localhost:8080";
  
  constructor(private http:HttpClient) { }

  public getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return httpOptions;
  }

  public login(User:any){
    return this.http.post<token>(this.base_url+"/generateToken",User,this.getHeaders());

  }

}
