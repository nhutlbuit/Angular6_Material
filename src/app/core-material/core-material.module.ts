import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const CORE_MODULES = [
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  HttpModule,
  HttpClientModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  FormsModule,
  CommonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...CORE_MODULES
  ],
  declarations: [],
  exports: [
    ...CORE_MODULES
  ]
})
export class CoreMaterialModule { }
