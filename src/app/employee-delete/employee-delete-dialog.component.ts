import { Component, OnInit, AfterViewInit, Inject, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../services/employee.service';
import { User } from '../model/employeeCustom';

@Component({
  selector: 'employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css']
})

export class EmployeeDeleteDialog {

 private employeeName:string;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteDialog>,
    public employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public employee: any) {
      this.employeeName =  employee.name;
   /*   
    this.employeeService.GetEmployeeDetail(employee.id).subscribe((data: any) => {
      this.employeeName = data.name;
    });
    */
  }

}
