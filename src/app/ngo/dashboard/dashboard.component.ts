import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgoServiceService } from '../../service/ngo-service.service';
import { AuthServiceService } from '../../auth-service.service';
import { Chart, registerables } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public title: String;
  public data: any;

  public lifetime: any;
  public mosque: any;
  public church: any;
  public community_aannouncement: any;
  public schools: any;
  public radio_discussion: any;
  public mobile_van: any;
  public video_shows: any;
  public info: any;
  public user_data: any;
  public ngo_id: any;
  public entries: any;
  public iptp_data: any;
  public sensitization_data: any;
  public media_engagement:any
  public people_reached:any
  kk: any;
  ngo_name:any
spinner1:any
spinner2:any
  constructor(
    private auth: AuthServiceService,
    private ngoService: NgoServiceService,
    private spinner:NgxSpinnerService
  ) {
    this.title = 'Dashboard';
    this.setVariable();
  
  }

  ngOnInit(): void {
    this.getDashboard();
    //this.getEntries();
    this.getIptpData();
    this.sensitization();
    this.media()
    this.peopleReached()
    
  }

  getEntries() {
    this.ngoService.lastFiveEntries(this.ngo_id).subscribe((data) => {
      this.entries = data;
    });
  }

  getDashboard() {
    this.spinner.show("spinner2")
    this.ngoService.ngoDashboard(this.ngo_id).subscribe((data) => {
      this.data = data;
      this.lifetime = this.data[0].total_entries;
      this.mosque = this.data[0].mosques;
      this.church = this.data[0].church;
      this.community_aannouncement = this.data[0].town_halls;
      this.schools = this.data[0].schools;
      this.radio_discussion = this.data[0].radio_discussion;
      this.mobile_van = this.data[0].mobile_van;
      this.video_shows = this.data[0].video_shows;
      this.spinner.hide("spinner2")
    },(error)=>{
      this.spinner.hide("spinner2")
    });
  }

  setVariable() {
    this.data = [];
    this.kk = this.auth.getUser();
    this.user_data = JSON.parse(this.kk);
    this.ngo_id = this.user_data.ngo_id;
    console.log(this.ngo_id);
    
  }

  getIptpData() {
    this.spinner.show("spinner1");
    this.ngoService.iptpData(this.ngo_id).subscribe((data) => {
      this.iptp_data = data;
      this.spinner.hide("spinner1");
      var myChart = new Chart('myChart', {
        type: 'bar',

        data: {
          datasets: [
            {
              label: 'Iptp intake during follow up',
              data: this.iptp_data[0],
              backgroundColor: '#92B4A2',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  sensitization() {
    this.spinner.show("spinner3")
    this.ngoService.pregnantWomen(this.ngo_id).subscribe((data) => {
      this.sensitization_data = data;
      var myChart = new Chart('senisitization-Chart', {
        type: 'bar',

        data: {
          datasets: [
            {
              label: 'Pregnant Women',
              data: this.sensitization_data[0],
              backgroundColor: '#F1E19C',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      this.spinner.hide("spinner3")
    },(error)=>{
      this.spinner.hide("spinner3")
    });
  }

  media(){
    this.spinner.show("spinner5")
    this.ngoService.mediaEngagement(this.ngo_id).subscribe((data) => {
      this.media_engagement= data;
      this.spinner.hide("spinner5")
      var myChart = new Chart('media-Chart', {
        type: 'bar',

        data: {
          datasets: [
            {
              label: 'Media Engagement',
              data: this.media_engagement[0],
              backgroundColor: '#69B6F4',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },(error)=>{
      this.spinner.show("spinner5")
    });
  }

  peopleReached(){
    this.spinner.show("spinner4")
    this.ngoService.peopleReached(this.ngo_id).subscribe((data) => {
      this.people_reached= data;
      var myChart = new Chart('people-Chart', {
        type: 'bar',

        data: {
          datasets: [
            {
              label: 'People Reached in various sensitization activities',
              data: this.people_reached[0],
              backgroundColor: '#C7A9EC',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      this.spinner.hide("spinner4")
    },(error)=>{
      this.spinner.hide("spinner4")
    });
  }


}
