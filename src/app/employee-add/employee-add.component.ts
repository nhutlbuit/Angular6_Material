import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit, AfterViewInit {
    public _id: number;
    public employee: any;
    public addEmployeeForm: FormGroup;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService,
        private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.employee = {};
        this.validateForm();  
    }

    ngAfterViewInit(){
      
    }

    goToEmployee() {
        this.router.navigate(['employee']);
    }

    SaveForm() {
        this.setDataFromFormtoEmployee();
        this.employeeService.AddEmployee(this.employee).subscribe(response => {
            if (response) {
                alert("add success");
                this.router.navigate(['employee']);
            }
        }, error => {
            console.log(error);
        });
    }

    checkEmptyString(value) {
        return (value == undefined || value == "" || value.length == 0);
    }

    setDataFromFormtoEmployee() {
        this.employee.name = this.addEmployeeForm.value.name;
        this.employee.age = this.addEmployeeForm.value.age;
        this.employee.status = false
        if ((this.addEmployeeForm.value.status) == true) {
            this.employee.status = true;
        }
    }

    validateForm() {
        this.addEmployeeForm = this.formBuilder.group({
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