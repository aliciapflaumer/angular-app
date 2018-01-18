import { Component } from '@angular/core';

import { Survey } from '../survey';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})

export class SurveysComponent {
  welcome : string;

  options = ['Pizza', 'Chicken', 'Taco'];

  model = new Survey(1, 'What\'s your favorite food?', this.options[0]);

  submitted = false;

  onSubmitted = false;

  submitMessage = '';

  onSubmit() {
    this.submitMessage = 'You made your selection';
  }

  constructor() {
    this.welcome = "Welcome to the survey page";
  }

}
