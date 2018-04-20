import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  busy: Promise<any>;
  public user = { email: "", password: "" };
  public msg = '';
  public isForgotPassword: boolean = false;
  public emailNew: string;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.clear();
    
  }

  login() {
    this.busy = this._service.login(this.user).then(
      (res: any) => {
        
        
       let data = res.data;
        localStorage.setItem('userID', data._id);
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('name', data.name);

         this._router.navigate(['/']);
        
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          this.toastr.error(error.json().msg);
        } else {
          this.toastr.error('you are not able to login. Please try later.');
        }
      }
    );
  }

}
