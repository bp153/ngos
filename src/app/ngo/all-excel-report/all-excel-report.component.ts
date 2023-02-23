import { Component, OnInit } from '@angular/core';
import { NgoServiceService } from '../../service/ngo-service.service';
import { AuthServiceService } from '../../auth-service.service';
import { Workbook } from 'exceljs';
import {FileSaverOptions} from 'file-saver';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-all-excel-report',
  templateUrl: './all-excel-report.component.html',
  styleUrls: ['./all-excel-report.component.scss']
})
export class AllExcelReportComponent implements OnInit {
public ngo:any
title:String
data:any
  constructor(private auth: AuthServiceService,
    private ngoService: NgoServiceService) { 
      this.title="Export all entries to Excel"
     this.ngo= this.auth.getNgo()
     console.log(this.ngo.ngo_id)
    }

  ngOnInit(): void {
    this.getAlldata()
  }

  getAlldata(){
    this.ngoService.selectAll(this.ngo.ngo_id).subscribe((data)=>{
      this.data=data
    })
  }

  exportData(){
    this.ngoService.exportData(this.ngo.ngo_id).subscribe((data)=>{
      this.downloadFile(data);
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

}
