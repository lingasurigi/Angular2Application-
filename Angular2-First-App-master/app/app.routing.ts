import { UserComponent } from '../app/user.component';
import { UserMoreComponent  } from '../app/usermore.component';
import { Routes ,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ExpenseComponent } from './expense.component';
import { ExpenseGridComponent } from './expensegrid.component';
import { FontColorDirective } from './CustomDirectives/fontcolor.directive';


const appRoutes: Routes = [
    { path: '' , pathMatch:'full', redirectTo:'userbasic'},
    { path: "userbasic", component: UserComponent },
    { path: "usermoreinfo", component: UserMoreComponent },
    { path: "expenseinfo", component: ExpenseComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents: any = [
    AppComponent,
    UserComponent,
    UserMoreComponent,
    ExpenseComponent,
    ExpenseGridComponent,
    FontColorDirective
];