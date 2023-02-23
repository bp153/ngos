import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssupervisor-reports',
  templateUrl: './ssupervisor-reports.component.html',
  styleUrls: ['./ssupervisor-reports.component.scss']
})
export class SsupervisorReportsComponent implements OnInit {

  public title:String;
  constructor(private router:Router) { 
    this.title="Reports";
  }

  ngOnInit(): void {
  }
  viewAllReports(){
    this.router.navigate(['supervisor/all-report']);
  }

  yearlyReport(){
    this.router.navigate(['supervisor/yearly-report']);
  }

}
