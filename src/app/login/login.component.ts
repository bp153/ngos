import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgoServiceService } from '../service/ngo-service.service';
import { AuthServiceService } from '../auth-service.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: any;
  public credentials: any;
  private _success = new Subject<string>();

	staticAlertClosed = true;
	successMessage = '';

	
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private ngoService: NgoServiceService,
    private auth: AuthServiceService,
    private alert:NgbAlert
  ) {
    this.user = {};
  }

  ngOnInit(): void {}

  logIn() {
    this.spinner.show();
    this.ngoService.login(this.user).subscribe(
      (data) => {
        this.credentials = data;
        console.log(this.credentials);
        if (this.credentials.error) {
          //this.auth.handleError(this.credentials.error);
          this.spinner.hide();
         
          this.successMessage=this.credentials.error
          this.staticAlertClosed=false
        } 
        else if (this.credentials.details.user.level_id == 1) {
          localStorage.setItem('access_token', this.credentials.details.token);
          localStorage.setItem(
            'user',
            JSON.stringify(this.credentials.details.user)
          );
          this.router.navigate(['supervisor/dashboard']);
        }
        else if (this.credentials.details.user.level_id == 2) {
          localStorage.setItem('access_token', this.credentials.details.token);
          localStorage.setItem(
            'user',
            JSON.stringify(this.credentials.details.user)
          );
          this.router.navigate(['ngo/dashboard']);
        } 

        else{
          console.log("error")
        }
      },
      (error) => {
    

        this.spinner.hide();
        this.staticAlertClosed=false
        
      }
    );
  }


}
