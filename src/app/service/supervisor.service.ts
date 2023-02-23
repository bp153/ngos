import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http:HttpClient) { }

  ngoDashboard() {
    let baseUrl = 'http://127.0.0.1:8000/api/supervisor/get-dashboard';
    return this.http.get(baseUrl)
  }

  iptpData(){
    let baseUrl = 'http://127.0.0.1:8000/api/supervisor/iptp-data';
    return this.http.get(baseUrl)
  }

 sensitization(){
    let baseUrl = 'http://127.0.0.1:8000/api/supervisor/sensitization';
    return this.http.get(baseUrl)
  }

  mediaEngagement(){
    let baseUrl = 'http://127.0.0.1:8000/api/supervisor/media-engagement';
    return this.http.get(baseUrl)
  }

  
  peopleReached(){
    let baseUrl = 'http://127.0.0.1:8000/api/supervisor/people-reached';
    return this.http.get(baseUrl)
  }

addUser(param:any){
  const data=JSON.stringify({param})
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/add-user';
  return this.http.post(baseUrl,{data})
}

getNgos(){
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/get-ngos';
  return this.http.get(baseUrl)
}

pregnantWomen(){
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/pregnant-women';
  return this.http.get(baseUrl)
}

selectAll() {
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/select-all';
  return this.http.get(baseUrl)
}

exportData() {
  const httpOptions = {
    responseType: 'blob' as 'json'
  };
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/export-data';
  return this.http.get(baseUrl,httpOptions)
} 

exportDataBYear(year:number) {
  const httpOptions = {
    responseType: 'blob' as 'json'
  };
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/export-data-year?year='+year+'';
  return this.http.get(baseUrl,httpOptions)
} 

getDataByYear(year:number){
  let baseUrl = 'http://127.0.0.1:8000/api/supervisor/search-by-year?year='+year+'';

  return this.http.get(baseUrl)
}
}
