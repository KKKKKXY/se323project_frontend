import { TestBed, inject } from '@angular/core/testing';

import { StudentsFileImplService } from './students-file-impl.service';

describe('StudentsFileImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsFileImplService]
    });
  });

  it('should be created', inject([StudentsFileImplService], (service: StudentsFileImplService) => {
    expect(service).toBeTruthy();
  }));
});
