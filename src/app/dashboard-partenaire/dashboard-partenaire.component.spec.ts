import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPartenaireComponent } from './dashboard-partenaire.component';

describe('DashboardPartenaireComponent', () => {
  let component: DashboardPartenaireComponent;
  let fixture: ComponentFixture<DashboardPartenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPartenaireComponent]
    });
    fixture = TestBed.createComponent(DashboardPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
