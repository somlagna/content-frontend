import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuaterlyAnalyticsServiceService {
  private apiUrl='http://localhost:8080/api/content';
  constructor(private http:HttpClient) { }
  getPostAnalyticsData(userName:string,year:number){
    
    const url=`${this.apiUrl}/analytics/quaterly/${year}/${userName}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
}
