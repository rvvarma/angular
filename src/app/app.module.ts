import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { HttpClientModule } from '@angular/common/http';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    SaleDetailComponent,
    SaleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
