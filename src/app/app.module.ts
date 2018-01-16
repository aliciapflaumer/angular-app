import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { TriviaComponent } from './trivia/trivia.component';
import { SurveysComponent } from './surveys/surveys.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent,
    TriviaComponent,
    SurveysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
