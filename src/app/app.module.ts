import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyanswersListComponent } from './surveyanswers-list/surveyanswers-list.component';
import { SurveytopicsListComponent } from './surveytopics-list/surveytopics-list.component';
import { InsertAnswerComponent } from './insert-answer/insert-answer.component';
import { InsertSurveyComponent } from './insert-survey/insert-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyanswersListComponent,
    SurveytopicsListComponent,
    InsertAnswerComponent,
    InsertSurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
