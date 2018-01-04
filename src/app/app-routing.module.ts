import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhaserComponent }      from './phaser/phaser.component';

const routes: Routes = [
  { path: 'phaser', component: PhaserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
