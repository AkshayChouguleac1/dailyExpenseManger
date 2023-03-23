import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  base_url="http://localhost:8080";

public getHeaders() {
  const httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': String(localStorage.getItem('token'))
  }),observe:'response' as 'response'}
  return httpOptions;
}


constructor(private http:HttpClient) { }


public getAllExpensesFor(date:string) {
  return this.http.get<expense[]>(this.base_url+"/expenses/getAllExpensesForDate/"+date,this.getHeaders());
  
}

public getAllExpenses() {
  return this.http.get<expense[]>(this.base_url+"/expenses/getAllExpenses",this.getHeaders());
  
}

public getExpense(expense_id:any) {
  return this.http.get<expense>(this.base_url+"/expenses/getExpense/"+expense_id,this.getHeaders());
  
}


public addExpense(expense: any) {
  return this.http.post(this.base_url+"/expenses/addExpense",expense,this.getHeaders());
  
}

public updateExpense(expense:any){
  return this.http.post(this.base_url+"/expenses/updateExpense",expense,this.getHeaders());
}

public deleteExpense(expense_id:any) {
  return this.http.delete(this.base_url+"/expenses/deleteExpense/"+expense_id,this.getHeaders());
  
}

public sendMail() {
  return this.http.get(this.base_url+"/expenses/sendMail",this.getHeaders());
  
}



}
