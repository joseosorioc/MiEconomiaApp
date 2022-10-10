import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { FormGastoComponent } from './form-gasto.component';



@NgModule({
  declarations: [
    FormGastoComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:
  [
    FormGastoComponent
  ]
})
export class FormGastoModule { }
