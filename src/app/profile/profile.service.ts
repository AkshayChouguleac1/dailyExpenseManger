import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  base_url="http://localhost:8080";

  public getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    };
    return httpOptions;
  }

  constructor(private http:HttpClient) { }

  

  public addProfile(Profile:any) {
    return  this.http.post(this.base_url + '/profiles/addNewProfile',Profile,this.getHeaders());
    
  }

  public updateProfile(Profile:any){
    return this.http.post(this.base_url+"/updateProfile",Profile,this.getHeaders());
  }
}
