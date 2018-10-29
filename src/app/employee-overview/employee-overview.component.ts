import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable ,  Subscription } from 'rxjs';

import { Routes, ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/employeeCustom';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html'
})

export class EmployeeOverviewComponent implements OnDestroy, OnInit{
    public parentRouterId: number;
    public sub: Subscription;

    @Input() public employee: User;

    constructor(private router:Router, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params =>{
           this.parentRouterId = params['id'];
           console.log("child get id: "+this.parentRouterId);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    
}