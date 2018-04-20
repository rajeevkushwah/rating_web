import { NgModule, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService  {
	rootUrl: string =   environment.config.BASE_URL;
    baseUrl: string =   environment.config.API_URL;
  constructor(
    private _router: Router,
    public http: Http
   ) {
     
  }

  getHeader() {
    const headers = new Headers({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    
    return new RequestOptions({ headers: headers });
  }

   getUsers() {       
        
       return this.http.get(`${this.baseUrl}getData`,this.getHeader())
                    .toPromise().then((res: Response) => res.json());
                 
   
  }

  rateUser(data) {       
        
       return this.http.post(`${this.baseUrl}rate`,data,this.getHeader())
                    .toPromise().then((res: Response) => res.json());
                 
   
  }
}
