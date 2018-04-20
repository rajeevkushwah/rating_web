import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class ThemeService{
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
   getOne(userId) {       
        
       return this.http.get(`${this.baseUrl}getone/${userId}`,this.getHeader())
                    .toPromise().then((res: Response) => res.json());
                 
   
  }
 
}
