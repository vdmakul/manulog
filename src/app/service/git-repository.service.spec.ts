import { TestBed } from '@angular/core/testing';

import { GitRepositoryService } from './git-repository.service';

describe('GitRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitRepositoryService = TestBed.get(GitRepositoryService);
    expect(service).toBeTruthy();
  });
});
