
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomFormsModule } from 'ng2-validation';

import { ThemeRoutingModule } from './theme.routing';


import { ThemeService } from "./theme.service";
import { ThemeComponent } from './theme.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppSharedModule } from '../shared/app-shared.module';
import {BusyModule} from 'angular2-busy';
import  {RatingModule} from "ngx-rating";


import { SocketService } from '../shared/socket.service';
@NgModule({
  imports: [  
   BusyModule,
    CustomFormsModule,
    AppSharedModule,  
    ThemeRoutingModule ,
    RatingModule  
    
  ],
  providers: [ThemeService,SocketService],
  declarations: [ThemeComponent, HeaderComponent, SidebarComponent]
})
export class ThemeModule { }
