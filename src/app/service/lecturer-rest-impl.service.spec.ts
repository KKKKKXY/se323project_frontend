import { TestBed } from '@angular/core/testing';

import { LecturerRestImplService } from './lecturer-rest-impl.service';

describe('LecturerRestImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturerRestImplService = TestBed.get(LecturerRestImplService);
    expect(service).toBeTruthy();
  });
});
