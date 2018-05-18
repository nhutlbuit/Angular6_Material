import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component';
import { HighlightDirective } from '../highlight/highlight.directive';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
