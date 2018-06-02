import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { User } from '../model/employeeCustom';
import { UserDatabase } from '../model/employeeDatabase';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'

@Component({
    selector: 'employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    @Input() user: User = new User();
    public employee: any;
    public editEmployeeForm: FormGroup;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.employee = {};
        this.getIdFromUrl();
        this.validateForm();
        this.getEmployeeDetail();
    }

    getIdFromUrl() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
    }

    getEmployeeDetail() {
        this.employeeService.GetEmployeeDetail(this._id).subscribe((data: any) => {
            (<FormControl>this.editEmployeeForm.controls['name']).setValue(data.name);
            (<FormControl>this.editEmployeeForm.controls['age']).setValue(data.age);
            (<FormControl>this.editEmployeeForm.controls['status']).setValue(data.status);
        }, error => {
            console.log(error);
        });
    }

    goToEmployee() {
        this.router.navigate(['employee']);
    }

    SaveForm() {
        this.employeeService.UpdateEmployee(this._id, this.editEmployeeForm.value).subscribe(response => {
            if (response) {
                alert("Save success");
                this.router.navigate(['employee']);
            }
        }, error => {
            console.log(error);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    validateForm() {
        this.editEmployeeForm = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20),
                Validators.pattern("[a-zA-Z]*")
            ]],
            age: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(2),
                Validators.pattern("[0-9]*")
            ]],
            status: ['', []],
        }, {
                validator: this.ageValidation
            });
    }

    ageValidation(abstractControl: AbstractControl) {
        if (abstractControl.get('age').touched || abstractControl.get('age').dirty) {
            let age = abstractControl.get('age').value;
            if (age < 1 || age > 99) {
                abstractControl.get('age').setErrors({ mismatch: true })
            }
            return null;
        }
    }
}