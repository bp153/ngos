import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgoServiceService } from '../../service/ngo-service.service';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-yearly-report',
  templateUrl: './yearly-report.component.html',
  styleUrls: ['./yearly-report.component.scss']
})
export class YearlyReportComponent implements OnInit {
public data:any
public response:any
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngoService: NgoServiceService,
    private auth: AuthServiceService,
  ) { 
    this.data={}
    this.setVariable()
    this.response=[]
  }

  ngOnInit(): void {
  }

  exportData(){
    this.spinner.show()
    this.ngoService.exportDataBYear(this.data.ngo_id,this.data.year).subscribe((data)=>{
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
    this.ngoService.getDataByYear(this.data.ngo_id,this.data.year).subscribe((data)=>{
  this.response=data
      this.spinner.hide()
    },(error)=>{
      console.log(error)
      this.spinner.hide()
    })
  }

  setVariable() {
 
   let kk:any = this.auth.getUse();
    console.log(kk.ngo_id)
    this.data.ngo_id = kk.ngo_id;
    console.log(this.data.ngo_id);
    
  }

  displayRecord(id:number){
    console.log(id)
    this.router.navigate(["ngo/view-entry", id]);
    //this.router.navigate(['view-entry/:id'], { queryParams: { id: id } })
  }



}
