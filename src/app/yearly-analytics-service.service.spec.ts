import { TestBed } from '@angular/core/testing';

import { YearlyAnalyticsServiceService } from './yearly-analytics-service.service';

describe('YearlyAnalyticsServiceService', () => {
  let service: YearlyAnalyticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearlyAnalyticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
