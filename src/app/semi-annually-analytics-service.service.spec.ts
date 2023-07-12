import { TestBed } from '@angular/core/testing';

import { SemiAnnuallyAnalyticsServiceService } from './semi-annually-analytics-service.service';

describe('SemiAnnuallyAnalyticsServiceService', () => {
  let service: SemiAnnuallyAnalyticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemiAnnuallyAnalyticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
