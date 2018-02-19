import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  books: any;
   private allItems: any[];

   totalRec : number;
     page: number = 1;

      // pager object
      pager: any = {};

      // paged items
      pagedItems: any[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://52.11.32.193:3001/sales/fd115c03-f9d8-4438-a3fb-7b58606eca6f/invoices').subscribe(data => {
  this.books = data.Items;
  this.allItems=data.Items;
  this.totalRec = this.allItems.length;
    console.log(this.allItems);

});
  }



}
