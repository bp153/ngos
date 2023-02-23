import { Component, OnInit } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-display-entry',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.scss']
})
export class DisplayEntryComponent implements OnInit {
  private supabase: SupabaseClient;
  public info:any
  constructor(private router:Router) { 
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  ngOnInit(): void {
    this.dashboard()
  }

  dashboard(){
    this.supabase
          .from('entries')
          .select('*')
          
          .order('id', { ascending: false })
          .then(
            (data) => {
              this.info = data.data;
          
      
    
            },
            (error) => {
              console.log(error);
            }
          );
      }

      showRecord(){
      
        this.router.navigate(['view-entry/:id'], { queryParams: { id: this.info.id } })
      }
}
