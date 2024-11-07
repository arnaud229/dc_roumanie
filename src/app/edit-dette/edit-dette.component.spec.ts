import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetteComponent } from './edit-dette.component';

describe('EditDetteComponent', () => {
  let component: EditDetteComponent;
  let fixture: ComponentFixture<EditDetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDetteComponent]
    });
    fixture = TestBed.createComponent(EditDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
