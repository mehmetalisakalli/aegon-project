import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Surveyanswers } from './surveyanswers';

@Injectable({
  providedIn: 'root'
})
export class SurveyanswersService {

    private getUrl= "http://localhost:8080/api/v1/surveyanswers" ;
   
    constructor(private _httpClient:HttpClient) { }
  
    getSurveyanswersList(): Observable<Surveyanswers[]>{
      return this._httpClient.get<Surveyanswers[]>(this.getUrl).pipe(
        map(response => response)
      );
    }
 

   saveSurveyAnswer(surveyanswers:Surveyanswers):  Observable<Surveyanswers>{
     return this._httpClient.post<Surveyanswers>(this.getUrl, surveyanswers);
    }

    
}
