import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetteComponent } from './create-dette.component';

describe('CreateDetteComponent', () => {
  let component: CreateDetteComponent;
  let fixture: ComponentFixture<CreateDetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDetteComponent]
    });
    fixture = TestBed.createComponent(CreateDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
