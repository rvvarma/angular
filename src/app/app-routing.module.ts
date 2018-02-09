import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
