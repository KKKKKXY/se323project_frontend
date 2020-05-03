import { TestBed } from '@angular/core/testing';

import { DeleteActivityService } from './delete-activity.service';

describe('DeleteActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteActivityService = TestBed.get(DeleteActivityService);
    expect(service).toBeTruthy();
  });
});
