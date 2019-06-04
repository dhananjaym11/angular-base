import { TestBed } from '@angular/core/testing';

import { PersonFormService } from './person-form.service';

describe('PersonFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonFormService = TestBed.get(PersonFormService);
    expect(service).toBeTruthy();
  });
});
