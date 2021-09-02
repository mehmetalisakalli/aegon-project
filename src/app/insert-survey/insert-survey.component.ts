import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Surveyanswers } from '../surveyanswers';
import { Surveytopics } from '../surveytopics';
import { SurveytopicsService } from '../surveytopics.service';

@Component({
  selector: 'app-insert-survey',
  templateUrl: './insert-survey.component.html',
  styleUrls: ['./insert-survey.component.css']
})
export class InsertSurveyComponent implements OnInit {

  surveytopic: Surveytopics= new Surveytopics();
  constructor(private _surveytopicsService: SurveytopicsService,private router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  saveSurvey(){
    this._surveytopicsService.saveSurvey(this.surveytopic).subscribe(
      data => {
        console.log('response',data);
        this.router.navigateByUrl("/surveytopics");
      }
    )
   }

}
