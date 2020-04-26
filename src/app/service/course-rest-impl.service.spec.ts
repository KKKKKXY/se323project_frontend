import { TestBed } from '@angular/core/testing';

import { CourseRestImplService } from './course-rest-impl.service';

describe('CourseRestImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseRestImplService = TestBed.get(CourseRestImplService);
    expect(service).toBeTruthy();
  });
});
