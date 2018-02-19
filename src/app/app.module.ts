import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { HttpClientModule } from '@angular/common/http';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    SaleDetailComponent,
    SaleCreateComponent,
    PurchaseComponent,
    TimesheetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
