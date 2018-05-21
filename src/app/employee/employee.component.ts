import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { EmployeeDeleteDialog } from '../employee-delete/employee-delete-dialog.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, AfterViewInit {
  public employees: any[];
  public name: any;
  public pages: number[];
  public currentPage: number;
  public keyword: string;
  displayedColumns = ['name', 'age', 'status', 'created', 'action'];
  //dataSource = new UserDataSource(this.employeeService);

  public dataSource;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    this.employeeService.SearchEmployee(filterValue).subscribe((response: any[]) => {
      this.employeeService.SearchEmployee(filterValue).subscribe
      this.employees = response;
      this.dataSource = response;
    });
  }

  ngAfterViewInit() {
    this.LoadData();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.currentPage = param['pageNumber'] || 1;
      //  console.log("-Page number is:" + this.currentPage + "\n-Filter is: " + param['filter']);
    });
    //this.LoadData();
    this.pages = [1, 2, 3, 4, 5];
  }

  DeleteDialog(id: number) {
    const dialogRef = this.dialog.open(EmployeeDeleteDialog, {
      height: '200px',
      width: '300px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.DeleteEmployee(id).subscribe(response => {
          if (response) {
            this.LoadData();
          }
        })
      }
    });
  }

  LoadData() {
    this.employeeService.GetListEmployee().subscribe((response: any[]) => {
      this.employeeService.GetListEmployee().subscribe
      this.employees = response;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }

}



