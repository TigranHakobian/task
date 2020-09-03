import { TestBed } from '@angular/core/testing';

import { RegGGuard } from './reg-g.guard';

describe('RegGGuard', () => {
  let guard: RegGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
