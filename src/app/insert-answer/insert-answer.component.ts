import { Component, OnInit } from '@angular/core';
import { Surveyanswers } from '../surveyanswers';
import { SurveyanswersService } from '../surveyanswers.service';
import { Surveytopics } from '../surveytopics';
import { SurveytopicsService } from '../surveytopics.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-insert-answer',
  templateUrl: './insert-answer.component.html',
  styleUrls: ['./insert-answer.component.css']
})
export class InsertAnswerComponent implements OnInit {

  selectedValue: string = '';
  surveyAnswer: Surveyanswers= new Surveyanswers();
  surveytopic: Surveytopics= new Surveytopics();
  constructor(private _surveyAnswersService: SurveyanswersService,private _surveytopicsService: SurveytopicsService,
    private router: Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id')
  if (isIdPresent) {
      const id = +this._activatedRoute.snapshot.paramMap.get('id');
      this._surveytopicsService.getSurveyTopic(id).subscribe(
        data => this.surveytopic = data 
      )
  };
  }
   
  saveSurveyAnswer(){
    this.surveyAnswer.surveyId=this.surveytopic.id;
    this.surveyAnswer.topic=this.surveytopic.topic;
   this._surveyAnswersService.saveSurveyAnswer(this.surveyAnswer).subscribe(
     data => {
       console.log('response',data);
       this.router.navigateByUrl("/surveyanswers");
     }
   )
  }


  selectChangeHandler (event: any) {
    //update the ui
    this.selectedValue = event.target.value;
  }



}
