import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

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
