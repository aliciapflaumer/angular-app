import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }      from './list/list.component';
import { AboutComponent }      from './about/about.component';
import { TriviaComponent }      from './trivia/trivia.component';
import { SurveysComponent }      from './surveys/surveys.component';

const routes: Routes = [
  { path: 'surveys', component: SurveysComponent },
  { path: 'list', component: ListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trivia', component: TriviaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
