import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGastoComponent } from './form-gasto/form-gasto.component';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { TipoCaracteristicaPipe } from 'app/core/pipes/tipoCaracteristica.pipe';

@NgModule({
  declarations: [
    FormGastoComponent,
    TipoCaracteristicaPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    ReactiveFormsModule,
    InputNumberModule,
    TableModule,
    DialogModule

  ],
  exports:[
    FormGastoComponent
  ]
})
export class FeaturesModule { }
