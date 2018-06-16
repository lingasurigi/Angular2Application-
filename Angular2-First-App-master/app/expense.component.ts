import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Expense } from './expense';
import { ExpenseGridComponent } from './expensegrid.component'
@Component({
  selector: 'expense-controls',
  templateUrl: './app/expense.component.html',
})
export class ExpenseComponent 
{
     public expense : Expense ;
     expenseData : any ;
     show : boolean = false;
     expenseNotEdit : Expense;
     constructor(private router:Router){
       this.expense = new Expense();
       this.expenseNotEdit = new Expense();
     }

     onSubmit() {
       this.show = true;
       this.expenseData =  this.expense;   
    }

    displayValues(expenseInfo){
        debugger;
        this.expenseNotEdit = expenseInfo;
    }
} 