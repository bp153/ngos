import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
 
 
})
export class EntryFormComponent implements OnInit {
public data:any
  public title:String;
  public info:any
  private supabase: SupabaseClient
public successMessage:String
loggedIn: boolean
danger:string
  constructor(private spinner: NgxSpinnerService) { 
    this.title="Entry Form";
    this.successMessage=""
    this.loggedIn=true
    this.danger = "success"
    this.data={}
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  
   
    

  }

  ngOnInit(): void {
  
  }
submitForm(){
  this.spinner.show()
  console.log(this.data)
  this.supabase.from('entries').insert({month:this.data.month,durbar:this.data.durbar,churches:this.data.churches,mosques:this.data.mosques,town_halls:this.data.town_hall,markets:this.data.markets,funerals:this.data.funerals,video_shows:this.data.video_shows,community_announcement:this.data.community_announcements,radio_discussion:this.data.radio,mobile_van:this.data.van,people_reached:this.data.people_reached,pregnant_women_identified:this.data.pregnant_women_identified,pregnant_women_followed:this.data.pregnant_women_followed,iptp_one:this.data.iptp_one,iptp_two:this.data.iptp_two,iptp_three:this.data.iptp_three,iptp_four:this.data.iptp_four,iptp_five:this.data.iptp_five}).select('*')
  .single().then((res:any)=>{
    console.log(res)
    this.spinner.hide()
    this.successMessage="knjbjnj"
    this.loggedIn=false
    this.data={}
   },(error:any)=>{
    console.log(error)
   })
}
}
