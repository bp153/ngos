import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public title:String;
  constructor(private router:Router) { 
    this.title="Reports";
  }

  ngOnInit(): void {
  }

  viewAllReports(){
    this.router.navigate(['ngo/all-entries']);
  }

  yearlyReport(){
    this.router.navigate(['ngo/yearly-report']);
  }
}
