import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Surveytopics } from './surveytopics';

@Injectable({
  providedIn: 'root'
})
export class SurveytopicsService {
  private getUrl= "http://localhost:8080/api/v1/surveytopics" ;
 
  constructor(private _httpClient:HttpClient) { }

  getSurveytopicsList(): Observable<Surveytopics[]>{
    return this._httpClient.get<Surveytopics[]>(this.getUrl).pipe(
      map(response => response)
    )
  }
  
  getSurveyTopic(id: number): Observable<Surveytopics> {
    return this._httpClient.get<Surveytopics>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  saveSurvey(surveytopics:Surveytopics):  Observable<Surveytopics>{
    return this._httpClient.post<Surveytopics>(this.getUrl, surveytopics);
   }


}
