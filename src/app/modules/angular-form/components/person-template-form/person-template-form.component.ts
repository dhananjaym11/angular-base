import { Component, OnInit } from '@angular/core';

import { Hero } from '../../model/hero';

@Component({
  selector: 'app-person-template-form',
  templateUrl: './person-template-form.component.html',
  styleUrls: ['./person-template-form.component.scss']
})
export class PersonTemplateFormComponent implements OnInit {
  submitted = false;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
