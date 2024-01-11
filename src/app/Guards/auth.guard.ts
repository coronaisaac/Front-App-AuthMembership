import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import {environment} from 'src/environment/environment';
var key = environment.key;

@Injectable({
  providedIn:'root'
})
class PermissionsServices{
  /**
   *
   */
  constructor(private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    if(localStorage.getItem(key)) return true;
    this.router.navigateByUrl('accounts/login');
    return false;
  }
}


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => 
  {return inject(PermissionsServices).canActivate(route,state)}

