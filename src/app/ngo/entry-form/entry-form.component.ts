import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgoServiceService } from '../../service/ngo-service.service';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../../auth-service.service';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent implements OnInit {
  public data: any;
  public title: String;
  public info: any;
  public user_data: any;
  public ngo_id: any;
  public kk: any;
  public successMessage: String;
  loggedIn: boolean;
  danger: string;
  staticAlertClosed: boolean;
  constructor(
    private spinner: NgxSpinnerService,
    private auth: AuthServiceService,
    private ngoService: NgoServiceService
  ) {
    this.title = 'Data Entry Form';
    this.successMessage = '';
    this.loggedIn = true;
    this.danger = 'success';
    this.data = {};
    this.staticAlertClosed = true;
this.spinner.hide()
    this.setVariable();
    
  }

  ngOnInit(): void {}
  submitForm() {
    this.spinner.show();
    this.data.month = this.data.month + '-10';
    this.setVariable();
    console.log(this.data.ngo_id);
    this.ngoService.makeEntry(this.data).subscribe(
      (res: any) => {
        if (res.ok) {
          this.loggedIn = false;
          this.successMessage = res.ok;
        }
        this.spinner.hide();
        this.data = {};
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
    this.data.ngo_id = this.user_data.ngo_id;
  }
}
