import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {
books:any;
dependecies:any;
Editable: boolean=false;
EditRowId:any='';
data3:any;

salesheads:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getSaleDetail(this.route.snapshot.params['id']);

  }


  getSaleDetail(id) {
    let data=this.http.get('http://52.11.32.193:3001/sales/fd115c03-f9d8-4438-a3fb-7b58606eca6f/invoices/'+id);
	let data1=this.http.get('http://52.11.32.193:3001/sales/dependencies/fd115c03-f9d8-4438-a3fb-7b58606eca6f/');

	 forkJoin([data,data1]).subscribe(results => {
      // results[0] is our character
      // results[1] is our character homeworld
      this.books = results[0].Lines;
	  this.dependecies=results[1];

	   this.data3=this.dependecies.Account;
	   this.salesheads=this.dependecies.salesheads;
	 });


  }


Edit (val){
	this.EditRowId=val;
}

onSubmit() {
  //  console.log('you submitted value:', form);
    alert("hii");
  }
}
