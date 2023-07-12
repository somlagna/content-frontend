import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaterlyAnalyticsComponent } from './quaterly-analytics.component';

describe('QuaterlyAnalyticsComponent', () => {
  let component: QuaterlyAnalyticsComponent;
  let fixture: ComponentFixture<QuaterlyAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuaterlyAnalyticsComponent]
    });
    fixture = TestBed.createComponent(QuaterlyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
