import { Component, Input } from '@angular/core';
import { User } from '../app/user';
import { Router } from '@angular/router'
import { UserSharingService } from './user.sharingservice';
import { UserHttpService } from './user.httpservice';

@Component({
  selector: 'my-app',
  templateUrl: './app/usermore.component.html'
})
export class UserMoreComponent 
{
     userBasicData : Array<any> = [];
     errorMessage: any;
     show :boolean = false;

     constructor(private router:Router, private _userSharingService:UserSharingService,
                 private _userHttpService:UserHttpService){
                  //this.userBasicData = this._userSharingService.getUserData();
              
     }
     getUsers(){
      debugger;
      this._userHttpService.getUsers().subscribe(
                            data =>  
                              this.testData(data),
                            error => 
                              this.errorMessage = error
          );                            
     }
     ngOnInit() {
      this.getUsers()
    }
    testData(test:any)
    {
       this.show = true;
       this.userBasicData = test;
    }
    onSubmit() {
       this.router.navigateByUrl('/userbasic');
    }
    
} 