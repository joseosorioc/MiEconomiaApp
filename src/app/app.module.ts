import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { FormGastoModule } from './features/form-gasto/form-gasto.module';
import { sidebarModule } from './shared/sidebar/sidebar.module';
import { RoutingModule } from './shared/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormGastoModule,
    sidebarModule,
    CardModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
