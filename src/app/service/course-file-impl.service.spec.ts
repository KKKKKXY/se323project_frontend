import { TestBed } from '@angular/core/testing';

import { CourseFileImplService } from './course-file-impl.service';

describe('CourseFileImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseFileImplService = TestBed.get(CourseFileImplService);
    expect(service).toBeTruthy();
  });
});
