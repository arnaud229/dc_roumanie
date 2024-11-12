import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRemboursementComponent } from './create-remboursement.component';

describe('CreateRemboursementComponent', () => {
  let component: CreateRemboursementComponent;
  let fixture: ComponentFixture<CreateRemboursementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRemboursementComponent]
    });
    fixture = TestBed.createComponent(CreateRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
