import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRembourssementComponent } from './create-rembourssement.component';

describe('CreateRembourssementComponent', () => {
  let component: CreateRembourssementComponent;
  let fixture: ComponentFixture<CreateRembourssementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRembourssementComponent]
    });
    fixture = TestBed.createComponent(CreateRembourssementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
