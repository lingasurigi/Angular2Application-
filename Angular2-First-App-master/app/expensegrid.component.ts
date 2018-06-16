import { Directive, Component ,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Expense } from './expense';


@Component({
  selector: 'expense-grid',
  templateUrl: './app/expensegrid.component.html'
})
export class ExpenseGridComponent 
{
    @Input('expenseDataChild') expenseDataChild : Expense;
     public expense : Expense;

     @Output() addInputsToExpense = new EventEmitter<Expense>();

       constructor(private router:Router){
       this.expense = new Expense();
     }

     ngOnInit() {
        this.expense = this.expenseDataChild;
     }
     expenseValues(expense){
       debugger;
       this.addInputsToExpense.emit(expense);
       
     }
} 