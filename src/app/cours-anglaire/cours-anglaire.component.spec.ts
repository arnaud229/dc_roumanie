import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursAnglaireComponent } from './cours-anglaire.component';

describe('CoursAnglaireComponent', () => {
  let component: CoursAnglaireComponent;
  let fixture: ComponentFixture<CoursAnglaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursAnglaireComponent]
    });
    fixture = TestBed.createComponent(CoursAnglaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
