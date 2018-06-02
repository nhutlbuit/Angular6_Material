import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatCheckbox } from '@angular/material';
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
  public idChecked: number;
  public isChecked: boolean;
  public id_temp: number;
  public count: number = 1;
  public nameEmployee: string;
  displayedColumns = ['name', 'age', 'status', 'created', 'action'];
  //dataSource = new UserDataSource(this.employeeService);

  public dataSource;
  public selection;
  public selected: boolean;


  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {
    this.isChecked = true;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    this.employeeService.SearchEmployee(filterValue).subscribe((response: any[]) => {
      this.employeeService.SearchEmployee(filterValue).subscribe
      this.employees = response;
      this.dataSource = response;
      this.selection = new SelectionModel(true, response);
      this.count == 1;
    }, error => {
      console.log(error);
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
      data: { id: id, name: this.nameEmployee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.DeleteEmployee(id).subscribe(response => {
          if (response) {
            this.LoadData();
          }
        })
      }
    }, error => {
      console.log(error);
  });
  }

  LoadData() {
    this.employeeService.GetListEmployee().subscribe((response: any[]) => {
      this.employeeService.GetListEmployee().subscribe
      this.employees = response;
      this.dataSource = new MatTableDataSource(this.employees);
      this.selection = new SelectionModel(true, this.employees);
      this.count == 1;
    }, error => {
      console.log(error);
    });
  }

  HasSelectedGreaterOne(employee: any, check: boolean) {
    if (check) {
      this.selection.clear();
    } else {
      if (this.selection.selected.length > 1) {
        return null;
      } else {
        return this.selection.isSelected(employee);
      }
    }
  }

  Onchange($even, employee: any, id: number, name: string, check: boolean) {
    if (this.count == 1) {
      this.isChecked = !check;
    }

    if ((this.id_temp == id)) {
      this.isChecked = !check;
      if (this.count === 2) {
        this.isChecked = !this.isChecked;
      }
    }

    this.HasSelectedGreaterOne(employee, true);
    this.id_temp = id;
    this.idChecked = id;
    this.nameEmployee = name;
    this.count++;
    return this.selection.toggle(employee);
  }




}



