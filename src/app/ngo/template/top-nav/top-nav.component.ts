import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgoServiceService } from '../../../service/ngo-service.service';
import { AuthServiceService } from '../../../auth-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',

  styleUrls: ['./top-nav.component.scss'],

})
export class TopNavComponent implements OnInit {
  public isCollapsed = false;
  public user_data: any;
  public data: any;
  public kk: any;
  public ngo_id: any;
  public ngo_name: any;
  user_id:any
  full_name:any
  year_list:any
  constructor(   private auth: AuthServiceService,
    private ngoService: NgoServiceService) { 
      this.setVariable()
      this.ngoName()
      this.getFullName()
      this.getYear()
    }

  ngOnInit(): void {
  }

  clickme(){
    console.log(675657)
  }

  setVariable() {
    this.data = [];
    this.kk = this.auth.getUser();
    this.user_data = JSON.parse(this.kk);
    this.ngo_id = this.user_data.ngo_id;
    this.user_id=this.user_data.user_id
    console.log(this.ngo_id);
    
  }
  ngoName(){
    this.ngoService.ngoName(this.ngo_id).subscribe((data) => {
      this.ngo_name=data
    })
    }

    getFullName(){
      this.ngoService.getFullName(this.user_id).subscribe((data) => {
      this.full_name=data
      })
    }

    getYear(){
      this.ngoService.getYear(this.ngo_id).subscribe((data:any) => {
      this.year_list=data

      for(let f of this.year_list){
       console.log(f.years)
      }
 
      })
    }

    logout(){
      localStorage.removeItem('access_token');
      localStorage.removeItem(
        'user'
      );
    }
}
