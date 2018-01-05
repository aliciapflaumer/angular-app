import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  quiz = 'Angular quiz';
  instructions = 'Answer the question to the best of your knowledge.'
  // choices = 'A programming language'

  trivia: Trivia = {
    id: 1,
    name: 'What is AngularJS?',
    choice: 'A programming language'
  };

  constructor() { }

  ngOnInit() {
  }

}
