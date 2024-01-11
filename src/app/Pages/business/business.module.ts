import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from '../business/business.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class BusinessModule { }
