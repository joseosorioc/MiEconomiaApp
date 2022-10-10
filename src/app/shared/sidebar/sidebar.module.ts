import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [
    sidebarComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:[
    sidebarComponent
  ]
})
export class sidebarModule { }
