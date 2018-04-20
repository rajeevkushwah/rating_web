import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SignupService } from './signup.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
  busy: Promise<any>;
  public user = { email: "", password: "" };
  public msg = '';
  public isForgotPassword: boolean = false;
  public emailNew: string;

  constructor(
    private _service: SignupService,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.clear();
    
  }

  signup() {
    this.busy = this._service.signup(this.user).then(
      (res: any) => {       
        
       this.toastr.success(res.msg);


         //this._router.navigate(['/']);
        
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
