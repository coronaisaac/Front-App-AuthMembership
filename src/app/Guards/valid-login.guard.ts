import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {environment} from 'src/environment/environment';

var key = environment.key;
export const validLoginGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if(localStorage.getItem(key)){
    router.navigateByUrl('/Business/Panel');
  }
  return true;
};
