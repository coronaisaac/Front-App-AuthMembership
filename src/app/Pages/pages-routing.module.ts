import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../Guards/auth.guard';
import { BusinessComponent } from './business/business.component';
import { LoginComponent } from './auth/login/login.component';
import { validLoginGuard } from '../Guards/valid-login.guard';

const routes: Routes = [
  {
    path:'Business',
    component: BusinessComponent,
    canActivate:[authGuard],
    loadChildren:()=>import('./business/business.module').then(m=>m.BusinessModule)
  },
  {
    path:'accounts',
    component: LoginComponent,
    canActivate:[validLoginGuard],
    loadChildren:()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
