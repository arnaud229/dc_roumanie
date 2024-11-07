import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRembourssementComponent } from './edit-rembourssement.component';

describe('EditRembourssementComponent', () => {
  let component: EditRembourssementComponent;
  let fixture: ComponentFixture<EditRembourssementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRembourssementComponent]
    });
    fixture = TestBed.createComponent(EditRembourssementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
