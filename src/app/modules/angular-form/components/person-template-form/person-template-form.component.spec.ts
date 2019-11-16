import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateFormComponent } from './person-template-form.component';

describe('PersonTemplateFormComponent', () => {
  let component: PersonTemplateFormComponent;
  let fixture: ComponentFixture<PersonTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
