import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome : string;
  content : string;

  constructor() {
    this.welcome = "Welcome to the home page";
    this.content = "Take a survey by navigating from the top menu";
   }

  ngOnInit() {
  }

}
