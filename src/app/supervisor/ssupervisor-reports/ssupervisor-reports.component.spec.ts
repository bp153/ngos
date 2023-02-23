import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsupervisorReportsComponent } from './ssupervisor-reports.component';

describe('SsupervisorReportsComponent', () => {
  let component: SsupervisorReportsComponent;
  let fixture: ComponentFixture<SsupervisorReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsupervisorReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsupervisorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
