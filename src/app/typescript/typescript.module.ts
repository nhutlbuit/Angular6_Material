import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeScriptComponent } from './typescript.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AppModule } from '../app/app.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, AppModule
  ],
  providers: [],
  bootstrap: [TypeScriptComponent]
})
export class TypeScriptModule { }

