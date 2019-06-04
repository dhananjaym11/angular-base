import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Person } from '../../model/person';
import { UiService } from '../../../../modules/shared/services/ui.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  personList: Person[] = [];
  personForm = new FormGroup({
    personName: new FormControl(''),
    personAge: new FormControl(''),
  });;

  constructor(private uiService: UiService) { }

  ngOnInit() {
  }

  onSaveClick() {
    const formValues = this.personForm.value;
    const lastMemberId = this.personList.length ? this.personList[this.personList.length - 1].id : 0;
    const obj = {
      id: lastMemberId + 1,
      name: formValues.personName,
      age: formValues.personAge
    }
    this.personList.push(obj);
    this.personForm.reset();
    this.uiService.showMessage('New person added');
  }

  handleDeletePerson(id) {
    const updatedList = this.personList.filter(person => person.id !== id);
    this.personList = updatedList;
    this.uiService.showMessage('person deleted');
  }

}
