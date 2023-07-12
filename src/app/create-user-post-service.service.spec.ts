import { TestBed } from '@angular/core/testing';

import { CreateUserPostServiceService } from './create-user-post-service.service';

describe('CreateUserPostServiceService', () => {
  let service: CreateUserPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
