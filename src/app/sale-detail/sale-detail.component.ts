import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

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
nameId1:any;
salesheads:any;
modal:any;
name:any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private modalService: NgbModal) { }

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
      this.name=results[0];
	  this.dependecies=results[1];

	   this.data3=this.dependecies.Account;
	   this.salesheads=this.dependecies.salesheads;
	 });


  }
     open(content) {

	  this.modalService.open(content).result.then((result) => {
         console.log("closed");
      }, (reason) => {
         console.log("dismissed" );
      });
   }
onSubmit(form){
	var e="";
    console.log("adding form values ");
    console.log(this.data3);
	for(var i=0;i<this.data3.length;i++){
		console.log(this.data3[0].Name);
		if(this.data3[i].Name==form.value.Id1)
			e=this.data3[i].UID;
	}
	this.books.push({Description:form.value.Id,Account:{UID:e,Name:form.value.Id1},Total:form.value.id2})

}

Edit (val){
	this.EditRowId=val;
}

}
