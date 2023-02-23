import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorYearlyReportsComponent } from './supervisor-yearly-reports.component';

describe('SupervisorYearlyReportsComponent', () => {
  let component: SupervisorYearlyReportsComponent;
  let fixture: ComponentFixture<SupervisorYearlyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorYearlyReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorYearlyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
