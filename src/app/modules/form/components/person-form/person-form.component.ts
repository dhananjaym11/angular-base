import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { UiService } from '../../../../modules/shared/services/ui.service';
import { PersonFormService } from '../../services/person-form.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  personForm = new FormGroup({
    personName: new FormControl(''),
    personAge: new FormControl(''),
  });;

  constructor(
    private uiService: UiService,
    private personFormService: PersonFormService,
  ) { }

  ngOnInit() {
  }

  onSaveClick() {
    const formValues = this.personForm.value;
    const lastMemberId = this.personFormService.personList.length ? this.personFormService.personList[this.personFormService.personList.length - 1].id : 0;
    const obj = {
      id: lastMemberId + 1,
      name: formValues.personName,
      age: formValues.personAge
    }
    this.personFormService.personList.push(obj);
    this.personForm.reset();
    this.uiService.showMessage('New person added');
  }

  handleDeletePerson(id) {
    const updatedList = this.personFormService.personList.filter(person => person.id !== id);
    this.personFormService.personList = updatedList;
    this.uiService.showMessage('person deleted');
  }

}
