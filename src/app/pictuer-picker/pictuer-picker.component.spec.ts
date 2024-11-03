import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictuerPickerComponent } from './pictuer-picker.component';

describe('PictuerPickerComponent', () => {
  let component: PictuerPickerComponent;
  let fixture: ComponentFixture<PictuerPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictuerPickerComponent]
    });
    fixture = TestBed.createComponent(PictuerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
