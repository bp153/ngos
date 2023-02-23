import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotAccessComponent } from './cannot-access.component';

describe('CannotAccessComponent', () => {
  let component: CannotAccessComponent;
  let fixture: ComponentFixture<CannotAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannotAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannotAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
