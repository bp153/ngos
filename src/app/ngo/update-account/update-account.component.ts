import { Component, OnInit } from '@angular/core';
import { NgoServiceService } from '../../service/ngo-service.service';
import { AuthServiceService } from '../../auth-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {
data:any
public successMessage:String
loggedIn: boolean
staticAlertClosed: boolean;
title:any
kk:any
user_data:any
  constructor(private auth: AuthServiceService,
    private ngoService: NgoServiceService,private spinner:NgxSpinnerService) { 
    this.staticAlertClosed = true;
    this.loggedIn=true
    this.successMessage=" "
    this.title="Update Account"
    this.data={}
    this.setVariable()
    this.getUserName()
  }

  ngOnInit(): void {
  }

  submitForm(){
    this.spinner.show();
   
   
   
    this.ngoService.updateAccount(this.data).subscribe(
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

  getUserName(){
    this.ngoService.getUsername(this.data.user_id).subscribe((data)=>{
      this.data.username=String(data)
      console.log(this.data.username)
    })
  }

  setVariable() {

    this.kk = this.auth.getUser();
    this.user_data = JSON.parse(this.kk);

    this.data.user_id=this.user_data.user_id
  
    
  }

}
