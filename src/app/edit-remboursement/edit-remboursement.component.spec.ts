import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemboursementComponent } from './edit-remboursement.component';

describe('EditRemboursementComponent', () => {
  let component: EditRemboursementComponent;
  let fixture: ComponentFixture<EditRemboursementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRemboursementComponent]
    });
    fixture = TestBed.createComponent(EditRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
