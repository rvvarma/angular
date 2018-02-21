import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent implements OnInit {
books:any;
items:any;
dependecies:any;
Editable: boolean=false;
EditRowId:any='';
data3:any;
nameId1:any;
salesheads:any;

  constructor(private http: HttpClient, private router: Router,private modalService: NgbModal) { }

  ngOnInit() {

      this.http.get('http://52.11.32.193:3001/sales/dependencies/fd115c03-f9d8-4438-a3fb-7b58606eca6f/').subscribe(data => {
    this.books = data.customer;
 this.dependecies=data;
this.items=[];
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
	this.items.push({Description:form.value.Id,Account:{UID:e,Name:form.value.Id1},Total:form.value.id2})

}

Edit (val){
	this.EditRowId=val;
}
}
