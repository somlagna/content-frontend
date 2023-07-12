import { TestBed } from '@angular/core/testing';

import { UserPostsListService } from './user-posts-list_service.service';

describe('UserPostsListService', () => {
  let service: UserPostsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
