import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { BaseService } from "../../services/base-service";
import { environment } from '../../../environments/environment';

export class User {
  constructor(    
    public name: string,
    public email: string,
    public password: string) { }
}

@Injectable()
export class SignupService {
  rootUrl: string =   environment.config.BASE_URL;
  baseUrl: string =   environment.config.API_URL;

  constructor(private _router: Router, private http: Http) { }

  
  signup(user) {
     const headers = new Headers({ });
    const options = new RequestOptions({ headers: headers });
     return this.http.post(`${this.baseUrl}signup`, user,options)
                    .toPromise().then((res: Response) => res.json());
  }

  
 
}
