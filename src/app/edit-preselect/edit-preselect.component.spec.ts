import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreselectComponent } from './edit-preselect.component';

describe('EditPreselectComponent', () => {
  let component: EditPreselectComponent;
  let fixture: ComponentFixture<EditPreselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPreselectComponent]
    });
    fixture = TestBed.createComponent(EditPreselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
