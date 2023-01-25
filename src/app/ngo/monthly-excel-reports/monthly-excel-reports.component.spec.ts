import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExcelReportsComponent } from './monthly-excel-reports.component';

describe('MonthlyExcelReportsComponent', () => {
  let component: MonthlyExcelReportsComponent;
  let fixture: ComponentFixture<MonthlyExcelReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyExcelReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyExcelReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
