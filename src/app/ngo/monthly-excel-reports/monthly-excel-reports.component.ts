import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-monthly-excel-reports',
  templateUrl: './monthly-excel-reports.component.html',
  styleUrls: ['./monthly-excel-reports.component.scss']
})
export class MonthlyExcelReportsComponent implements OnInit {
  public title:String;
  constructor() { 
    this.title="Monthly Excel Report"
  }

  ngOnInit(): void {
  }

}
