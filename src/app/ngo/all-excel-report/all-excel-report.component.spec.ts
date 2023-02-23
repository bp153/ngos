import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExcelReportComponent } from './all-excel-report.component';

describe('AllExcelReportComponent', () => {
  let component: AllExcelReportComponent;
  let fixture: ComponentFixture<AllExcelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExcelReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExcelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
