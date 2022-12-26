import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    sidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,
  exports:[
    sidebarComponent
  ]
})
export class sidebarModule { }
