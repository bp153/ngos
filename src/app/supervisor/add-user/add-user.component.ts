import { Component, OnInit } from '@angular/core';
import { SupervisorService  } from '../../service/supervisor.service';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { AuthServiceService } from '../../auth-service.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
user:any
kk:any
user_data:any
public successMessage: String;
loggedIn: boolean;
danger: string;
staticAlertClosed: boolean;
ngos:any
title:String
  constructor(private supervisor:SupervisorService,private spinner:NgxSpinnerService,private auth:AuthServiceService) { 
    this.user={}
    this.successMessage = '';
    this.loggedIn = true;
    this.title="Add User"
    this.staticAlertClosed = true;
    this.danger = 'success';
    this.setVariable()
  }

  ngOnInit(): void {
    this.supervisor.getNgos().subscribe((res)=>{
      this.ngos=res
    })
  }

  submit(){
   this.spinner.show()
    this.supervisor.addUser(this.user).subscribe(
      (res: any) => {
        if (res.ok) {
          this.loggedIn = false;
          this.successMessage = res.ok;
        }
        this.spinner.hide();
        this.user = {};
        this.staticAlertClosed = false;
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  setVariable() {
    this.kk = this.auth.getUser();
    this.user_data = JSON.parse(this.kk);
    this.user.user_id = this.user_data.user_id;
    console.log(this.user.user_id)
  }
}
