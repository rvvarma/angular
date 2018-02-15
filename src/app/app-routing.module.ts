import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

import { PurchaseComponent } from './purchase/purchase.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';

const routes: Routes = [
  {
 path: 'sale',
 component: SaleComponent
},
{
path: 'sale/:id',
component: SaleDetailComponent
},
{
path: 'salecreate',
component: SaleCreateComponent
}
,
{
path: 'purchase',
component: PurchaseComponent
},
{
path: 'timesheet',
component: TimesheetComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
