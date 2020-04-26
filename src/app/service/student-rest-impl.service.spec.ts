import { TestBed } from '@angular/core/testing';

import { StudentRestImplService } from './student-rest-impl.service';

describe('StudentRestImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRestImplService = TestBed.get(StudentRestImplService);
    expect(service).toBeTruthy();
  });
});
