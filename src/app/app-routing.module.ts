import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhaserComponent }      from './phaser/phaser.component';
import { AboutComponent }      from './about/about.component';
import { TriviaComponent }      from './trivia/trivia.component';

const routes: Routes = [
  { path: 'phaser', component: PhaserComponent }
  { path: 'about', component: AboutComponent }
  { path: 'trivia', component: TriviaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
