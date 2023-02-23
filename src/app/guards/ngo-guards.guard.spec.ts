import { TestBed } from '@angular/core/testing';

import { NgoGuardsGuard } from './ngo-guards.guard';

describe('NgoGuardsGuard', () => {
  let guard: NgoGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NgoGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
