import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { AppSharedModule } from '../shared/app-shared.module';

import { DashboardService } from "./dashboard.service";

import { SocketService } from '../shared/socket.service';
import {CurrencyPipe} from '@angular/common'
declare var require: any;
import { ChartModule } from 'angular2-highcharts';
declare var require: any;
import  {RatingModule} from "ngx-rating";


@NgModule({
  imports: [AppSharedModule,
    DashboardRoutingModule,
    RatingModule
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [DashboardService, CurrencyPipe,SocketService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {
}
