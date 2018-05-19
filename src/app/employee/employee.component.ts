import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, AfterViewInit {
  public employees: any[];
  public pages: number[];
  public currentPage: number;
  public keyword: string;
  displayedColumns = ['name', 'age', 'status', 'created', 'action'];
  //dataSource = new UserDataSource(this.employeeService);

  public dataSource;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

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
    //this.LoadData();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.currentPage = param['pageNumber'] || 1;
      //  console.log("-Page number is:" + this.currentPage + "\n-Filter is: " + param['filter']);
    });
    this.LoadData();
    this.pages = [1, 2, 3, 4, 5];
  }

  Delete(id: number) {
    let confirmResult = confirm("Are you sure to delete employee?");
    if (confirmResult) {
      this.employeeService.DeleteEmployee(id).subscribe(response => {
        if (response) {
          // alert("Delete Ok");
          this.LoadData();
        }
      })
    }
  }

  LoadData() {
    this.employeeService.GetListEmployee().subscribe((response: any[]) => {
      this.employeeService.GetListEmployee().subscribe
      this.employees = response;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }


}

