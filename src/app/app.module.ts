import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppRoutingModule,
    HeaderComponent,
    CommonModule,
    AppComponent
  ],
})
export class AppModule { }
