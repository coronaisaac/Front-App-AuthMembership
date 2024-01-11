import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validLoginGuard } from './valid-login.guard';

describe('validLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
