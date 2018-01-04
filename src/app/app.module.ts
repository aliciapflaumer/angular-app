import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhaserComponent } from './phaser/phaser.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { TriviaComponent } from './trivia/trivia.component';


@NgModule({
  declarations: [
    AppComponent,
    PhaserComponent,
    AboutComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
