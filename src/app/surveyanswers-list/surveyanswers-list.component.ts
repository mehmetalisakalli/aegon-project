import { Component, Injectable, OnInit } from '@angular/core';
import { Surveyanswers } from '../surveyanswers';
import { SurveyanswersService } from '../surveyanswers.service';
import { Router } from '@angular/router';


@Injectable()
@Component({
  selector: 'app-surveyanswers-list',
  templateUrl: './surveyanswers-list.component.html',
  styleUrls: ['./surveyanswers-list.component.css']
})
export class SurveyanswersListComponent implements OnInit {
 
  

  filters = {
    keyword: ''
  }
 
  surveyanswers : Surveyanswers[] = [];
  constructor(private _surveyanswersService: SurveyanswersService,
    private router: Router) { }
 

  ngOnInit( ): void {
    this._surveyanswersService.getSurveyanswersList().subscribe(
      data => this.surveyanswers = data
    );
  }

  listExpenses() {
    this._surveyanswersService.getSurveyanswersList().subscribe(
      data => this.surveyanswers = this.filterAnswers(data)
    )
  }


  filterAnswers(surveyanswers: Surveyanswers[]) {
    return surveyanswers.filter((e) => {
      return e.topic.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }
  
 

}
