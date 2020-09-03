import { TestBed } from '@angular/core/testing';

import { LogGGuard } from './log-g.guard';

describe('LogGGuard', () => {
  let guard: LogGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
