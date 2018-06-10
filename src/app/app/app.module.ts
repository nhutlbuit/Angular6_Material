import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LoginComponent } from '../login/login.component';
import { HighlightDirective } from '../highlight/highlight.directive';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpModule } from '@angular/http'
import { appRoutes } from './app.routes'
import { NotFoundComponent } from '../notfound/notfound.component'
import { MainPageComponent } from '../mainpage/mainpage.component'
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component'
import { HttpClientModule } from "@angular/common/http";
import { EmployeeOverviewComponent } from '../employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from '../employee-projects/employee-project.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { TypeScriptComponent } from '../typescript/typescript.component';
import { LoginService } from '../services/login.service';
import { CheckLoginGuard } from '../guards/check-login.component';
import { CheckSaveFormGuard } from '../guards/check-save-form.component';
import { AppComponent } from './app.component';
import { EmployeeService } from '../services/employee.service';
import { RegisterComponent } from '../register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from '../register/register.module';
import { MatButtonModule, MatCheckboxModule, MatInput, MatOption, MatSelect, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule, MatOptionModule } from '@angular/material';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CoreMaterialModule } from '../core-material/core-material.module';
import { EmployeeDeleteDialog } from '../employee-delete/employee-delete-dialog.component';
import { AuthenticationGuard } from '../guards/AuthenticationGuard.component';
import { AuthenticationChildGuard } from '../guards/AuthenticationChildGuard.component';
@NgModule({
  declarations: [
    TypeScriptComponent,
    EmployeeComponent,
    AppComponent,
    NotFoundComponent,
    MainPageComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    LoginComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    HighlightDirective,
    RegisterComponent,
    LoginComponent,
    EmployeeDeleteDialog
  ],
  entryComponents: [
    EmployeeDeleteDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    appRoutes,
    CoreMaterialModule,
  ],
  exports: [
    
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard, AuthenticationGuard, AuthenticationChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
