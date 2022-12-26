import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { Button, ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { sidebarModule } from './shared/sidebar/sidebar.module';
import { RoutingModule } from './routing.module';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    sidebarModule,
    BrowserAnimationsModule,
    CardModule,
    RoutingModule,
    FeaturesModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
