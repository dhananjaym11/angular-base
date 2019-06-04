import { Injectable } from '@angular/core';

import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonFormService {
  personList: Person[] = [];

  constructor() { }
}
