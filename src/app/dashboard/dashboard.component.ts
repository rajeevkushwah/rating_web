import { Component, OnInit } from '@angular/core';

import { DashboardService } from "./dashboard.service";



import { SocketService } from '../shared/socket.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import * as $ from 'jquery';
import {Observable} from "rxjs"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 	busy: Promise<any>;
	searchStr:String="";
	result:any=[];
  next:any;
  previous:any;
  
  constructor(
    private socketService: SocketService,
     private _service: DashboardService,
    private toastr: ToastrService
  ) { }

   ngOnInit() {
     this.getUsers();

      this.socketService.getMessages('this').subscribe(message => {

        console.log(message)

        this.result.forEach(function(items){

          if(items._id==message.to){
            items.rate.push(message)
          }

        })
        
     })
   }

 getUsers(){
   this.busy = this._service.getUsers().then(
      (res: any) => {
       this.result = res.data.filter(item=>(item._id!=localStorage.getItem('userID')));
      
        
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          //this.toastr.error(error.json().msg);
        } else {
         // this.toastr.error('you are not able to login. Please try later.');
        }
      }
    );
 }

 rate(user,rate){
   let obj={to:user,rate:rate,from:localStorage.getItem('userID')};

   this.busy = this._service.rateUser(obj).then(
      (res: any) => {
        this.toastr.success(res.msg);
      // this.getUsers();
        
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          //this.toastr.error(error.json().msg);
        } else {
         // this.toastr.error('you are not able to login. Please try later.');
        }
      }
    );

 }

 avgRating(data){
   let avg=0;

   if(data.length>0){
     let sum=0;
     let i=0;
     data.forEach(function(item){
       sum = sum + item.value;
       i++;
     })
     avg=sum/i;
     return avg;

   }else{
      return avg;
   }

 }


 
 
  

}

