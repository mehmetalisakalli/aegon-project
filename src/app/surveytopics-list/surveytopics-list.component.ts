import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveytopics } from '../surveytopics';
import { SurveytopicsService } from '../surveytopics.service';
import { Surveyanswers } from '../surveyanswers';
import { SurveyanswersService } from '../surveyanswers.service';

@Component({
  selector: 'app-surveytopics-list',
  templateUrl: './surveytopics-list.component.html',
  styleUrls: ['./surveytopics-list.component.css']
})
export class SurveytopicsListComponent implements OnInit {

  surveytopics : Surveytopics[];
  surveytopic: Surveytopics= new Surveytopics();
  constructor(private surveytopicsService: SurveytopicsService, private _surveyanswersService: SurveyanswersService,
    private router: Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSurveyTopics();
  }
  
  private getSurveyTopics(){
    this.surveytopicsService.getSurveytopicsList().subscribe(data => {
      this.surveytopics = data;
    });
  }


}
