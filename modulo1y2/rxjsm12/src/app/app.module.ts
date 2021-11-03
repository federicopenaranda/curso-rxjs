import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Kata21Component } from './kata21/kata21.component';
import { Kata22Component } from './kata22/kata22.component';
import { Kata23Component } from './kata23/kata23.component';

@NgModule({
  declarations: [
    AppComponent,
    Kata21Component,
    Kata22Component,
    Kata23Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
