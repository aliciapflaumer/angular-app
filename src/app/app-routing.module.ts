import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { SurveysComponent }      from './surveys/surveys.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
