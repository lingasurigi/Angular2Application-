import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav>
      <a routerLink="/userbasic" routerLinkActive="active">User Basic</a>
      <a routerLink="/usermoreinfo" routerLinkActive="active">User More Info</a>
    </nav>
    <div style="width:80%;float:right;">
        <router-outlet></router-outlet>
    </div>
    
  `
})
export class AppComponent {
}