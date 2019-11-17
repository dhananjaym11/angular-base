import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-person-reactive-form',
  templateUrl: './person-reactive-form.component.html',
  styleUrls: ['./person-reactive-form.component.scss']
})
export class PersonReactiveFormComponent implements OnInit {
  profileForm: FormGroup;
  addresses: FormArray;
  /*profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });*/

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      addresses: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      city: '',
      state: '',
      country: ''
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  addAddress() {
    this.addresses = this.profileForm.get('addresses') as FormArray;
    this.addresses.push(this.createItem());
  }

  deleteAddress(idx: number) {
    this.addresses.removeAt(idx);
  }

}
