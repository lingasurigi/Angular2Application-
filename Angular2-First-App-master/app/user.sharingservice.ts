import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserSharingService {

  constructor() { }

  private user:User;

  setUserData(data){
    this.user = data;
  }

  getUserData(){
    let temp = this.user;
    this.clearData();
    return temp;
  }

  clearData(){
    this.user = undefined;
  }

}
