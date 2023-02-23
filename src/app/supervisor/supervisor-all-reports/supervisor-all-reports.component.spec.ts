import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAllReportsComponent } from './supervisor-all-reports.component';

describe('SupervisorAllReportsComponent', () => {
  let component: SupervisorAllReportsComponent;
  let fixture: ComponentFixture<SupervisorAllReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorAllReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorAllReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
