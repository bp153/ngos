import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public user:any
  constructor(private router:Router,private spinner: NgxSpinnerService) { 
    this.user={}
  }

  ngOnInit(): void {
  }


  logIn(){
    this.spinner.show();
    if(this.user.username=="test" && this.user.password=="test"){
      this.spinner.hide()
      this.router.navigate(["ngo/dashboard"])
    }
  }
}
