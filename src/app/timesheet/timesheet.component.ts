import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

books: any;
   constructor(private http: HttpClient) { }

   ngOnInit() {
     this.http.get('http://52.11.32.193:4001/timesheet/fd115c03-f9d8-4438-a3fb-7b58606eca6f/payroll/timesheet/').subscribe(data => {
   console.log(data);
   this.books = data;
 });
   }

}
