import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgoServiceService } from '../../service/ngo-service.service';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.scss']
})
export class ViewEntryComponent {
  public title:String;
  data:any
  public successMessage:String
  loggedIn: boolean
  danger:string
  info:any
  staticAlertClosed: boolean;
  constructor(private ngo:NgoServiceService,private spinner:NgxSpinnerService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.data={}
    this.title="View and Update entries";
    this.successMessage=""
    this.loggedIn=true
    this.danger = "success"
    this.data={}
    this.staticAlertClosed = true;
    const entry_id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getData(entry_id)
  }

  submitForm() {
    this.spinner.show();
   
   
   
    this.ngo.updateEntry(this.data).subscribe(
      (res: any) => {
        if (res.ok) {
          console.log("uguhj")
          this.loggedIn = false;
          this.successMessage = res.ok;
          this.staticAlertClosed = false;
        }
        this.spinner.hide();
        
       
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  getData(entry_id:number){
    this.ngo.viewById(entry_id).subscribe((data)=>{
      this.info=data
     this.data=this.info[0]
    })
  }
}
