import { Component } from '@angular/core';

import { Survey } from '../survey';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})

export class SurveysComponent {

  options = ['Pizza', 'Chicken', 'Taco'];

  model = new Survey(1, 'What\'s your favorite food?', this.options[0]);

  submitted = false;

  onSubmitted = false;

  submitMessage = '';

  onSubmit() {
    this.submitMessage = 'You made your selection';
  }
  // Remove this when I'm done
  // get diagnostic() { return JSON.stringify(this.model); }

}
