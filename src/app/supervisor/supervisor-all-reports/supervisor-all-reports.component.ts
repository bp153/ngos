import { Component, OnInit } from '@angular/core';
import { SupervisorService  } from '../../service/supervisor.service';

@Component({
  selector: 'app-supervisor-all-reports',
  templateUrl: './supervisor-all-reports.component.html',
  styleUrls: ['./supervisor-all-reports.component.scss']
})
export class SupervisorAllReportsComponent implements OnInit {
  public ngo:any
  title:String
  data:any
    constructor(private supervisor:SupervisorService) { 
        this.title="Export all entries to Excel"

      }
  
    ngOnInit(): void {
      this.getAlldata()
    }
  
    getAlldata(){
      this.supervisor.selectAll().subscribe((data)=>{
        this.data=data
      })
    }
  
    exportData(){
      this.supervisor.exportData().subscribe((data)=>{
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
  