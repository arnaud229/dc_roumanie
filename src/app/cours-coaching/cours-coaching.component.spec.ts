import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCoachingComponent } from './cours-coaching.component';

describe('CoursCoachingComponent', () => {
  let component: CoursCoachingComponent;
  let fixture: ComponentFixture<CoursCoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursCoachingComponent]
    });
    fixture = TestBed.createComponent(CoursCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
