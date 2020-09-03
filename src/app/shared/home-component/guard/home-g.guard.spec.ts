import { TestBed } from '@angular/core/testing';

import { HomeGGuard } from './home-g.guard';

describe('HomeGGuard', () => {
  let guard: HomeGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
