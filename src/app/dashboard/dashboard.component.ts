import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { expense } from './expense';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expenseform!:FormGroup;
  Addeditemcounter=0;
  changedDate!:string;

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();
  currentDate!:string;
  
  ExpenseList!:any[];
  editModeOn: boolean=false;
  totalExpense:number=0;

  

  constructor(private dashboardService:DashboardService,private router:Router,private activatedroute:ActivatedRoute) {
    this.currentDate = this.dd + '-' + this.mm + '-' + this.yyyy;
    this.changedDate=this.currentDate;
   }

  ngOnInit(): void {

    this.expenseform=new FormGroup({
      'item_name':new FormControl('',Validators.required),
      'spender':new FormControl('',Validators.required),
      'price':new FormControl('',Validators.required),
      'date':new FormControl('',Validators.required),
      'category':new FormControl('',Validators.required),
      'discription':new FormControl(''),
    })
   
    
    this.dashboardService.getAllExpensesFor(this.currentDate).subscribe((res:any[])=>{
      this.ExpenseList=res;
      this.totalExpense=0;
      for(let i=0;i<this.ExpenseList.length;i++){
        this.totalExpense+= Number(this.ExpenseList[i]['price']);
      }
      
    })


  }

  addNewExpenses(){
    this.expenseform=new FormGroup({
      'item_name':new FormControl('',Validators.required),
      'spender':new FormControl('akshay',Validators.required),
      'price':new FormControl('',Validators.required),
      'date':new FormControl(this.changedDate,Validators.required),
      'category':new FormControl('',Validators.required),
      'discription':new FormControl(''),
    })

  }


  updateExpense(expense:expense){
    this.dashboardService.getExpense(expense['expense_id']).subscribe((res:expense)=>{
      this.editModeOn=true;
      this.expenseform=new FormGroup({
        'expense_id':new FormControl(res['expense_id']),
        'item_name':new FormControl(res['item_name'],Validators.required),
        'spender':new FormControl(res['spender'],Validators.required),
        'price':new FormControl(res['price'],Validators.required),
        'date':new FormControl(res['date'],Validators.required),
        'discription':new FormControl(res['discription']),
        'category':new FormControl(res['category'])
      })

    } 
    )

  }

  DateChanged(event:any){
    this.ExpenseList=[];
    this.totalExpense=0;
    let datearr=event.target.value.split("-");
    let convertedDateinDesiredformat=datearr[2]+"-"+datearr[1]+"-"+datearr[0];
    this.changedDate=convertedDateinDesiredformat;
    this.dashboardService.getAllExpensesFor(this.changedDate).subscribe((res:any[])=>{
      this.ExpenseList=res;
      for(let i=0;i<this.ExpenseList.length;i++){
        this.totalExpense+= Number(this.ExpenseList[i]['price']);
      }
    })
  }

  deleteExpense(expense:expense){
    console.log(expense['expense_id'])
    this.dashboardService.deleteExpense(expense['expense_id']).subscribe((res)=>{
      this.dashboardService.getAllExpensesFor(this.changedDate).subscribe((res:any[])=>{
        this.ExpenseList=res;
        this.totalExpense=0;
        for(let i=0;i<this.ExpenseList.length;i++){
          this.totalExpense+= Number(this.ExpenseList[i]['price']);
        }
      })
    })
    
  }

  ModalClosed(){
    
      //////////////////////////////////
      this.dashboardService.getAllExpensesFor(this.changedDate).subscribe((res:any[])=>{
        this.ExpenseList=res;
        this.totalExpense=0;
        for(let i=0;i<this.ExpenseList.length;i++){
          this.totalExpense+= Number(this.ExpenseList[i]['price']);
        }
      })
      ////////////////////////////////////
    this.editModeOn=false;
    }


    saveExpense(){

      if(this.editModeOn){
        this.dashboardService.updateExpense(this.expenseform.value).subscribe((res)=>{
          this.expenseform.reset();
          this.expenseform.controls['date'].setValue(this.changedDate);
          this.editModeOn=false;
          this.totalExpense=0;
        for(let i=0;i<this.ExpenseList.length;i++){
          this.totalExpense+= Number(this.ExpenseList[i]['price']);
        }
          
        //////////////////////////////////
        this.dashboardService.getAllExpensesFor(this.changedDate).subscribe((res:any[])=>{
          this.ExpenseList=res;
          this.totalExpense=0;
          for(let i=0;i<this.ExpenseList.length;i++){
            this.totalExpense+= Number(this.ExpenseList[i]['price']);
          }
        })
        ////////////////////////////////////
        })
      }else{
        this.dashboardService.addExpense(this.expenseform.value).subscribe((res)=>{
          alert("Success")
          this.Addeditemcounter+=1;
          this.expenseform.reset();
          this.expenseform.controls['date'].setValue(this.changedDate);
          this.totalExpense=0;
        for(let i=0;i<this.ExpenseList.length;i++){
          this.totalExpense+= Number(this.ExpenseList[i]['price']);
        }
        
          //////////////////////////////////
        this.dashboardService.getAllExpensesFor(this.changedDate).subscribe((res:any[])=>{
          this.ExpenseList=res;
          this.totalExpense=0;
          for(let i=0;i<this.ExpenseList.length;i++){
            this.totalExpense+= Number(this.ExpenseList[i]['price']);
          }
        })
        ////////////////////////////////////
        })
      }  
    }

    sendMail(){
      this.dashboardService.sendMail().subscribe((res)=>{
        
      })
    }


}
