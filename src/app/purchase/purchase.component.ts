import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

   books: any;
   constructor(private http: HttpClient) { }

   ngOnInit() {
     this.http.get('http://52.11.32.193:4000/purchase/fd115c03-f9d8-4438-a3fb-7b58606eca6f/order').subscribe(data => {
   console.log(data);
   this.books = data.Items;
 });
   }//

}
