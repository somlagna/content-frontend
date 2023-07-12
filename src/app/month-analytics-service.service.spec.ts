import { TestBed } from '@angular/core/testing';

import { MonthAnalyticsServiceService } from './month-analytics-service.service';

describe('MonthAnalyticsServiceService', () => {
  let service: MonthAnalyticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthAnalyticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
