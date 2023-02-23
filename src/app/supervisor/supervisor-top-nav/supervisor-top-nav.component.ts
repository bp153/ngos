import { Component, OnInit } from '@angular/core';
import { NgoServiceService } from '../../service/ngo-service.service';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-supervisor-top-nav',
  templateUrl: './supervisor-top-nav.component.html',
  styleUrls: ['./supervisor-top-nav.component.scss']
})
export class SupervisorTopNavComponent implements OnInit {
  public isCollapsed = false;
  public user_data: any;
  public data: any;
  public kk: any;
  public ngo_id: any;
  public ngo_name: any;
  user_id:any
  full_name:any
  constructor(   private auth: AuthServiceService,
    private ngoService: NgoServiceService) { 
      this.setVariable()
      this.getFullName()
    }


  ngOnInit(): void {
  }

  setVariable() {
    this.data = [];
    this.kk = this.auth.getUser();
    this.user_data = JSON.parse(this.kk);
    this.ngo_id = this.user_data.ngo_id;
    this.user_id=this.user_data.user_id
    console.log(this.ngo_id);
    
  }


    getFullName(){
      this.ngoService.getFullName(this.user_id).subscribe((data) => {
      this.full_name=data
      })
    }

    logout(){
      localStorage.removeItem('access_token');
      localStorage.removeItem(
        'user'
      );
    }
}
