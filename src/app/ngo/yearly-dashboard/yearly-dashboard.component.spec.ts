import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyDashboardComponent } from './yearly-dashboard.component';

describe('YearlyDashboardComponent', () => {
  let component: YearlyDashboardComponent;
  let fixture: ComponentFixture<YearlyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
