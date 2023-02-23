import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorTempComponent } from './supervisor-temp.component';

describe('SupervisorTempComponent', () => {
  let component: SupervisorTempComponent;
  let fixture: ComponentFixture<SupervisorTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
