import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/service/login.service';
import { FormatNumberDirective } from '../directives/format-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormatNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    routing,
    ReactiveFormsModule,

  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
