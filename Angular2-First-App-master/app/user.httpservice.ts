import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import { User } from './user'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserHttpService {
    baseUrl: string = 'http://localhost:1195/api/user/'

    constructor(private _http: Http) { }

    getUsers(){
        return this._http.get(this.baseUrl)
                    .map(this.extractData)
                    .catch(this._errorHandler);
    }
    private extractData(res: Response) {        
        return  res.json();
    }
    
    _errorHandler(error:Response){
        debugger;
        console.log(error);
        return Observable.throw(error || "Internal server error");
      }
  
}