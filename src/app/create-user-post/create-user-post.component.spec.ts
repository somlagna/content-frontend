import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPostComponent } from './create-user-post.component';

describe('CreateUserPostComponent', () => {
  let component: CreateUserPostComponent;
  let fixture: ComponentFixture<CreateUserPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserPostComponent]
    });
    fixture = TestBed.createComponent(CreateUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
