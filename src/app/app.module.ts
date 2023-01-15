import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import {  ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { sidebarModule } from './shared/sidebar/sidebar.module';
import { RoutingModule } from './routing.module';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    sidebarModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    RoutingModule,
    FeaturesModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
