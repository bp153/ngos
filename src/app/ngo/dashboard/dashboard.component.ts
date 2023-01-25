import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public title: String;
  public data: any;
  private supabase: SupabaseClient;
  public lifetime: any;
  public mosque: any;
  public church: any;
  public community_aannouncement: any;
  public markets: any;
  public radio_discussion: any;
  public mobile_van: any;
  public video_shows: any;
public info:any
public dataSource:Object
  constructor() {
    this.title = 'Dashboard';
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.data = [];

    const chartData = [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }

  ngOnInit(): void {
    this.getData();
    this.dashboard()
  }

  dashboard(){
this.supabase
      .from('entries')
      .select('*')
      .limit(5)
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
  getData() {
    this.supabase
      .from('entries')
      .select('*')

      .then(
        (data) => {
          this.data = data.data;
          console.log(this.data);
          this.lifetimeSubmissions(this.data);
          this.totalMosque(this.data);
          this.totalChurch(this.data);
          this.totalCommunity(this.data);
          this.totalMarkets(this.data)
          this.totalRadio(this.data)
          this.totalVan(this.data)
          this.totalVideo(this.data)

        },
        (error) => {
          console.log(error);
        }
      );
  }

  lifetimeSubmissions(data: any) {
    this.lifetime = data.length;
  }

  totalMosque(data: any) {
    this.mosque = data.reduce((accuulator: any, object: any) => {
      return accuulator + object.mosques;
    }, 0);
  }

  totalChurch(data: any) {
    this.church = data.reduce((accuulator: any, object: any) => {
      return accuulator + object.churches;
    }, 0);
  }

  totalCommunity(data: any) {
    this.community_aannouncement = data.reduce(
      (accuulator: any, object: any) => {
        return accuulator + object.community_announcement;
      },
      0
    );
  }

  totalMarkets(data:any){
    this.markets = data.reduce(
      (accuulator: any, object: any) => {
        return accuulator + object.markets;
      },
      0
    );
  }

  totalRadio(data:any){
    this.radio_discussion = data.reduce(
      (accuulator: any, object: any) => {
        return accuulator + object.radio_discussion;
      },
      0
    );
  }

  totalVan(data:any){
    this.mobile_van = data.reduce(
      (accuulator: any, object: any) => {
        return accuulator + object.mobile_van;
      },
      0
    );
  }

  totalVideo(data:any){
    this.video_shows = data.reduce(
      (accuulator: any, object: any) => {
        return accuulator + object.video_shows;
      },
      0
    );
  }
}
