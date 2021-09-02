import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyanswersListComponent } from './surveyanswers-list/surveyanswers-list.component';
import { SurveytopicsListComponent } from './surveytopics-list/surveytopics-list.component';
import { InsertAnswerComponent } from './insert-answer/insert-answer.component';
import { InsertSurveyComponent } from './insert-survey/insert-survey.component';

const routes: Routes = [
{path: 'surveytopics' , component: SurveytopicsListComponent},
{path: 'surveyanswers', component: SurveyanswersListComponent},
{path: 'insertanswer', component: InsertAnswerComponent},
{path: 'insertsurvey', component: InsertSurveyComponent},
{path: 'answersurvey/:id', component: InsertAnswerComponent},
{path: '', redirectTo: 'surveytopics',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
