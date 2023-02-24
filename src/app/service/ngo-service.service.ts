import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgoServiceService {

  constructor(private http:HttpClient) { }

  login(user: any) {
    let baseUrl = "http://81.0.247.100/api/login";
    return this.http.post(baseUrl, user)
  }

 ngoDashboard(ngo_id: number) {
    let baseUrl = 'http://81.0.247.100/api/ngo/get-dashboard?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

 lastFiveEntries(ngo_id: number) {
    let baseUrl = 'http://81.0.247.100/api/ngo/get-five-entries?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  makeEntry(param: Object) {
    const data=JSON.stringify({param})
    let baseUrl = 'http://81.0.247.100/api/ngo/make-entry';
    return this.http.post(baseUrl,{data})
  }

  updateEntry(param: Object) {
    const data=JSON.stringify({param})
    let baseUrl = 'http://81.0.247.100/api/ngo/update-entry';
    return this.http.post(baseUrl,{data})
  }

  selectAll(ngo_id: number) {
    let baseUrl = 'http://81.0.247.100/api/ngo/select-all?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

viewById(entry_id: number) {
    let baseUrl = 'http://81.0.247.100/api/ngo/view-entry?entry_id='+entry_id+'';
    return this.http.get(baseUrl)
  }

  exportData(ngo_id: number) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    let baseUrl = 'http://81.0.247.100/api/ngo/export-data?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl,httpOptions)
  } 

  exportDataBYear(ngo_id: number,year:number) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    let baseUrl = 'http://81.0.247.100/api/ngo/export-data-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl,httpOptions)
  } 

  iptpData(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/iptp-data?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

 sensitization(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/sensitization?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  mediaEngagement(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/media-engagement?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  
  peopleReached(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/people-reached?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  ngoName(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/get-name?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  getFullName(user_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/get-full-name?user_id='+user_id+'';
    return this.http.get(baseUrl)
  }

  getDataByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/search-by-year?ngo_id='+ngo_id+'&year='+year;

    return this.http.get(baseUrl)
  }

  pregnantWomen(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/pregnant-women?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  ngoDashboardByYear(ngo_id: number,year:number) {
    let baseUrl = 'http://81.0.247.100/api/ngo/get-dashboard-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

  iptpDataByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/iptp-data-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

 sensitizationByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/sensitization-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

  mediaEngagementByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/media-engagement-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

  
  peopleReachedByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/people-reached-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

  pregnantWomenByYear(ngo_id:number,year:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/pregnant-women-year?ngo_id='+ngo_id+'&year='+year;
    return this.http.get(baseUrl)
  }

getYear(ngo_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/get-year?ngo_id='+ngo_id+'';
    return this.http.get(baseUrl)
  }

  getUsername(user_id:number){
    let baseUrl = 'http://81.0.247.100/api/ngo/get-username?user_id='+user_id+'';
    return this.http.get(baseUrl)
  }

  updateAccount(param: Object) {
    const data=JSON.stringify({param})
    let baseUrl = 'http://81.0.247.100/api/update-account';
    return this.http.post(baseUrl,{data})
  }
}
