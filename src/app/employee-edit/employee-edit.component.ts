import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { User } from '../model/employeeCustom';
import { UserDatabase } from '../model/employeeDatabase';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    @Input() user: User = new User();
    public employeeUpdate: UserDatabase = new UserDatabase;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.employeeService.GetEmployeeDetail(this._id).subscribe((data: any) => {
            // this.user = data;
            this.user.Username = data.name;
            this.user.Id = data.id;
            this.user.Age = data.age;
            this.user.Date = data.created;
            this.user.Status = data.status;
            console.log("this.employee" + JSON.stringify(this.user));
        });
    }

    goToEmployee() {
        this.router.navigate(['employee']);
    }

    SaveForm() {
        this.employeeUpdate.name = this.user.Username;
        this.employeeUpdate.age = this.user.Age;
        this.employeeUpdate.status = this.user.Status;
        this.employeeService.UpdateEmployee(this._id, this.employeeUpdate).subscribe(response => {
            if (response) {
                alert("Save success");
                this.router.navigate(['employee']);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}