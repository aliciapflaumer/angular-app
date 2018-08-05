import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  welcome : string;
  content : string;
  selectedValue : string;

  heroes = [
    new Hero(1, 'Wonder Woman'),
    new Hero(2, 'Spiderman'),
    new Hero(3, 'Cat Woman'),
    new Hero(4, 'Superman')
  ];

  myHero = this.heroes[0];

  constructor() {
    this.welcome = "Who is your favorite Superhero?";
    this.content = "Objective: To show how to display data from an array of objects. Give it a try and select a new hero from the dropdown list."
  }

  ngOnInit() {
  }

}
