import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGastoComponent } from './form-gasto/form-gasto.component';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    FormGastoComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    ReactiveFormsModule,
    InputNumberModule

  ],
  exports:[
    FormGastoComponent
  ]
})
export class FeaturesModule { }
