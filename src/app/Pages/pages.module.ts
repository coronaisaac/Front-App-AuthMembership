import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { BusinessModule } from './business/business.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    BusinessModule,
    // FormsModule, 
    // ReactiveFormsModule,
  ]
})
export class PagesModule { }
