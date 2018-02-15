import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {
book:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getSaleDetail(this.route.snapshot.params['id']);

  }

  getSaleDetail(id) {
    this.http.get('http://52.11.32.193:3001/sales/fd115c03-f9d8-4438-a3fb-7b58606eca6f/invoices/'+id).subscribe(data => {
      this.book = data;
      console.log(data)
    });
  }


}
