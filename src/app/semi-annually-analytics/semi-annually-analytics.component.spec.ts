import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiAnnuallyAnalyticsComponent } from './semi-annually-analytics.component';

describe('SemiAnnuallyAnalyticsComponent', () => {
  let component: SemiAnnuallyAnalyticsComponent;
  let fixture: ComponentFixture<SemiAnnuallyAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiAnnuallyAnalyticsComponent]
    });
    fixture = TestBed.createComponent(SemiAnnuallyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
