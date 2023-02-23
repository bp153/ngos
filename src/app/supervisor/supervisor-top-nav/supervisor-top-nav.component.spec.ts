import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorTopNavComponent } from './supervisor-top-nav.component';

describe('SupervisorTopNavComponent', () => {
  let component: SupervisorTopNavComponent;
  let fixture: ComponentFixture<SupervisorTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorTopNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
