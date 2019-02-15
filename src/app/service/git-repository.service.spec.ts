import { TestBed } from '@angular/core/testing';

import { GitRepositoryService } from './git-repository.service';
import { HttpClientModule } from '@angular/common/http';

describe('GitRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: GitRepositoryService = TestBed.get(GitRepositoryService);
    expect(service).toBeTruthy();
  });
});
