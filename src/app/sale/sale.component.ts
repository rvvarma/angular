import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://52.11.32.193:3001/sales/fd115c03-f9d8-4438-a3fb-7b58606eca6f/invoices').subscribe(data => {
  console.log(data);
  this.books = data.Items;
});
  }

}
