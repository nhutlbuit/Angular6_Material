import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs';

import { Routes, ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/employeeCustom'
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;
    /// @Input('master') masterName: string;

    @Input() user: User = new User();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            //get id from url
            this._id = params['id'];
            console.log("Id for employee choose" + this._id);
        });

        this.employeeService.GetEmployeeDetail(this._id).subscribe((data: any) => {
            // this.employee = data;
            //push data to User object from Json file
            this.user.Username = data.name;
            this.user.Id = data.id;
            this.user.Age = data.age;
            this.user.Date = data.created;
            this.user.Status = data.status;
            // this.user = data;

            console.log("Employee: " + JSON.stringify(data));
            console.log("user: " + JSON.stringify(this.user));
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}