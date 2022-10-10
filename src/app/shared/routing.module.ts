import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormGastoComponent } from '../features/form-gasto/form-gasto.component';

const routes: Routes =
[
  {
    path: 'save',
    component: FormGastoComponent
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class RoutingModule { }
