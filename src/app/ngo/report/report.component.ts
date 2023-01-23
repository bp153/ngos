import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public title:String;
  constructor() { 
    this.title="Reports";
  }

  ngOnInit(): void {
  }

}
