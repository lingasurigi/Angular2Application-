import { Component } from '@angular/core';
import { User } from '../app/user';
import { Router } from '@angular/router'
import { UserSharingService } from './user.sharingservice';

@Component({
  selector: 'my-app',
  templateUrl: './app/user.component.html'
})
export class UserComponent 
{
     public userBasic : User;
     
     constructor(private router:Router, private userSharingService:UserSharingService){
       this.userBasic = new User();
     }

     onSubmit() {
       debugger;
       this.userSharingService.setUserData(this.userBasic);
       this.router.navigateByUrl('/usermoreinfo');
       
    }
} 