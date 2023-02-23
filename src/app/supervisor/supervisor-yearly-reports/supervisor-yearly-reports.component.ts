import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SupervisorService  } from '../../service/supervisor.service';

@Component({
  selector: 'app-supervisor-yearly-reports',
  templateUrl: './supervisor-yearly-reports.component.html',
  styleUrls: ['./supervisor-yearly-reports.component.scss']
})
export class SupervisorYearlyReportsComponent implements OnInit {
  public data:any
  public response:any
    constructor(
      private router: Router,
      private spinner: NgxSpinnerService,
      private supervisor: SupervisorService,
     
    ) { 
      this.data={}
      //this.setVariable()
      this.response=[]
    }
  
    ngOnInit(): void {
    }
  
    exportData(){
      this.spinner.show()
      this.supervisor.exportDataBYear(this.data.year).subscribe((data)=>{
        this.downloadFile(data);
        this.spinner.hide()
      },(error)=>{
        console.log(error)
        this.spinner.hide()
      })
    }
    downloadFile(da:any) {
      const blob = new Blob([da], {type: 'application/vnd.ms-excel'});
  
      var downloadURL = window.URL.createObjectURL(da);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "data.xls";
      link.click();
    }
    displayData(){
      this.spinner.show()
      this.supervisor.getDataByYear(this.data.year).subscribe((data)=>{
    this.response=data
        this.spinner.hide()
      },(error)=>{
        console.log(error)
        this.spinner.hide()
      })
    }
  
  
  
    displayRecord(id:number){
      console.log(id)
      this.router.navigate(["ngo/view-entry", id]);
      //this.router.navigate(['view-entry/:id'], { queryParams: { id: id } })
    }
  
  
  
  }
  