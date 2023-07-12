import { TestBed } from '@angular/core/testing';

import { QuaterlyAnalyticsServiceService } from './quaterly-analytics-service.service';

describe('QuaterlyAnalyticsServiceService', () => {
  let service: QuaterlyAnalyticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuaterlyAnalyticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
