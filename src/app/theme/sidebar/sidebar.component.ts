import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


import { CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import { ThemeService } from "./../theme.service";


import { SocketService } from '../..//shared/socket.service';

@Component({
  selector: 'app-sidebar',
  providers: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
private subscription: Subscription;
Username:String= localStorage.getItem('name');
user:any;
avarage:Number=0;
  constructor(
  	 private _service: ThemeService,
     private socketService: SocketService,
  ) { }

  ngOnInit() {
    console.log(this.Username)
    this.getOne()

    this.socketService.getMessages('this').subscribe(message => {

        console.log(message)        

          if(this.user._id==message.to){
            this.user.rate.push(message);
          }

       
        
     })
  }


  getOne(){
    this._service.getOne(localStorage.getItem('userID')).then(
      (res: any) => {
       this.user = res.data;
      
        console.log(this.user)
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
     this.avarage=avg;
     return avg;

   }else{
      return avg;
   }

 }
}
